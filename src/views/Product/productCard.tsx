import React from "react";
import { sanitizeIGCaption } from "../../libs/helpers";
import { IGData } from "./product";
import {
    ProductBody,
    ProductCard,
    ProductFooter,
    ProductHeader,
    ProductImage,
    ProductVideo,
} from "./styles";

type ProductCardComponentProps = {
    product: IGData;
    handleProductMedia: (_: any, index: number) => void;
    index: number;
};

export const ProductCardComponent: React.FC<ProductCardComponentProps> = ({
    product,
    handleProductMedia,
    index,
}) => {
    return (
        <ProductCard>
            <ProductHeader>
                {product.media_type === "VIDEO" ? (
                    <ProductVideo
                        src={product.media_url}
                        autoPlay
                        muted
                        loop
                        onClick={(event: any) =>
                            handleProductMedia(event, index)
                        }
                    ></ProductVideo>
                ) : (
                    <ProductImage
                        src={product.media_url}
                        alt={product.caption}
                        loading="lazy"
                        onClick={(event: any) =>
                            handleProductMedia(event, index)
                        }
                    />
                )}
            </ProductHeader>

            <ProductBody>
                <p>{sanitizeIGCaption(product.caption)}</p>
            </ProductBody>
            <ProductFooter>
                <a
                    href={`https://api.whatsapp.com/send/?phone=6287792369900&text=${encodeURI(
                        "Hi, saya mau tanya harga produk ini\n" +
                            product.permalink
                    )}&app_absent=0`}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Ask price
                </a>
            </ProductFooter>
        </ProductCard>
    );
};
