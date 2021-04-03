import tw, { styled } from "twin.macro";

export const Header = styled.header`
    position: relative;
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; */
    background-color: black;
    background-image: url("/assets/images/annie-spratt-hX_hf2lPpUU-unsplash.jpg");
    background-position: 0% 140%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
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

export const AboutTitle = tw.h1`text-white text-4xl text-center w-96 relative z-10 mt-40`;
export const AboutSection = tw.section`bg-gray-50 pb-8 flex flex-col items-center`;
export const Wrapper = tw.div`py-8`;
export const AboutSubtitle = tw.h2`text-yellow-600 text-center text-3xl`;
export const AboutArticle = tw.article`mx-auto max-w-prose py-4 px-4  text-gray-600`;
export const ArticleText = tw.p`pb-4 text-justify`;
export const DownloadButton = tw.button`rounded-full uppercase py-2 px-4 border border-gray-500 mx-auto block text-gray-600 hover:text-gray-50 hover:bg-gray-800`;
