import React, { Suspense, useEffect, useState } from "react";
import { useWindow } from "../../libs/hooks";
import {
    ContactTitle,
    Header,
    Modal,
    ModalClose,
    ModalContent,
    PaginationCursorWrapper,
    PaginationSpan,
    ProductImage,
    ProductList,
    ProductSection,
    ProductUL,
    ProductVideo,
} from "./styles";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ProductCardComponent } from "./productCard";

export type IGData = {
    id: string;
    caption: string;
    media_url: string;
    media_type: string;
    permalink: string;
};

type IGPaging = {
    cursors: {
        before: string;
        after: string;
    };
    next?: string;
    previous?: string;
};

type IGResponseData = {
    data: IGData[];
    paging: IGPaging;
};

const baseURL = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${
    import.meta.env.VITE_ACCESS_TOKEN
}`;

export const Product = () => {
    const [igMedia, setIGMedia] = useState<null | IGResponseData>(null);
    const [openModal, setOpenModal] = useState(false);
    const [media, setMedia] = useState<null | IGData>(null);
    const [pageString, setPageString] = useState(baseURL);
    const windowSize = useWindow();
    const { width, height } = windowSize;

    useEffect(() => {
        const getIGData = async () => {
            const response = await fetch(pageString);
            const data = await response.json();
            setIGMedia(data);
        };
        getIGData();
    }, [pageString]);

    const handleProductMedia = (_: any, index: number) => {
        if (igMedia) {
            setMedia(igMedia.data[index]);
        }
        setOpenModal(true);
    };

    return (
        <>
            <Header>
                <ContactTitle style={{ fontFamily: "var(--text-serif)" }}>
                    OUR PRODUCTS
                </ContactTitle>
            </Header>
            <ProductSection>
                <ProductUL>
                    <Suspense fallback={<h2>Loading...</h2>}>
                        {igMedia &&
                            igMedia.data.length > 0 &&
                            igMedia.data.map((product, index) => {
                                return (
                                    <ProductList key={product.id}>
                                        <ProductCardComponent
                                            product={product}
                                            handleProductMedia={
                                                handleProductMedia
                                            }
                                            index={index}
                                        />
                                    </ProductList>
                                );
                            })}
                    </Suspense>
                </ProductUL>
                {/* pagination */}
                <PaginationCursorWrapper>
                    {igMedia?.paging.hasOwnProperty("previous") && (
                        <PaginationSpan
                            onClick={() =>
                                setPageString(igMedia?.paging.previous!)
                            }
                        >
                            <BsChevronLeft size={24} />
                        </PaginationSpan>
                    )}
                    {igMedia?.paging.hasOwnProperty("next") && (
                        <PaginationSpan
                            onClick={() => setPageString(igMedia?.paging.next!)}
                        >
                            <BsChevronRight size={24} />
                        </PaginationSpan>
                    )}
                </PaginationCursorWrapper>
            </ProductSection>
            {openModal && (
                <Modal style={{ backdropFilter: "blur(5px)" }}>
                    <ModalClose onClick={() => setOpenModal(false)}>
                        <svg
                            tw="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </ModalClose>
                    <ModalContent
                        style={{
                            width: width < height ? width : height,
                            height: width < height ? width : height,
                        }}
                    >
                        {media?.media_type === "VIDEO" ? (
                            <ProductVideo
                                src={media?.media_url}
                                autoPlay
                                muted
                                loop
                            ></ProductVideo>
                        ) : (
                            <ProductImage
                                src={media?.media_url}
                                alt=""
                                loading="lazy"
                            />
                        )}
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};
