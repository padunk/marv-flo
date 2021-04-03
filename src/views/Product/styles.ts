import tw, { styled } from "twin.macro";

export const Header = styled.header`
    position: relative;
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; */
    background-color: black;
    background-image: url("/assets/images/oriento-srx7_1c3sJM-unsplash.jpg");
    background-position: bottom;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 67vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & ::after {
        content: "";
        opacity: 0.6;
        background-color: black;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
    }
`;

export const ContactTitle = tw.h1`text-white text-4xl text-center w-96 relative z-10 mt-40`;
export const ProductSection = tw.section`p-8 flex justify-center items-center flex-col`;
export const ProductUL = tw.ul`flex gap-8 flex-wrap items-stretch justify-center`;
export const ProductList = tw.li`w-48 flex-auto`;
export const ProductCard = tw.div`bg-blue-50 rounded-xl border-blue-100 flex flex-col items-center overflow-hidden h-full`;
export const ProductHeader = tw.div`flex justify-center items-center overflow-hidden rounded-lg m-4`;
export const ProductImage = tw.img`object-cover w-full h-full cursor-pointer`;
export const ProductVideo = tw.video`object-cover w-full h-full cursor-pointer`;
export const ProductBody = tw.div`text-gray-400 border-b border-gray-300 w-full text-sm px-4 pb-8 flex-auto`;
export const ProductFooter = tw.div`text-gray-800 flex items-center justify-center py-4 h-16 uppercase`;

// Pagination
export const PaginationCursorWrapper = tw.div`flex justify-around gap-8 pt-4`;
export const PaginationSpan = tw.span`text-gray-500 hover:scale-110 hover:translate-x-1 hover:text-gray-800 cursor-pointer transform transition-all`;

// Modal
export const Modal = tw.div`fixed bg-black bg-opacity-80 inset-0 z-50 flex justify-center items-center`;
export const ModalClose = tw.span`absolute top-4 right-4 cursor-pointer hover:bg-gray-800 text-white h-6 w-6 border border-white rounded-md`;
export const ModalContent = tw.div`flex justify-center items-center overflow-hidden rounded-lg mx-auto`;
