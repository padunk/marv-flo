import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const Header = styled.header`
    position: relative;
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; */
    background-color: black;
    background-image: url("/assets/images/artsy-vibes-WieARwnazLc-unsplash.jpg");
    background-position: center;
    background-size: cover;
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
export const ContactSection = tw.section`border grid grid-cols-1  md:grid-cols-2`;
export const ContactMap = tw.div`flex justify-center items-center p-2 lg:p-8`;
export const ContactIFrame = tw.iframe`border-0 w-full h-64 min-h-full`;
export const ContactInformation = tw.div`md:border-l border-gray-300 text-gray-500`;
export const ContactDetail = tw.div`flex gap-4 border-b border-gray-300 last:border-b-0 p-2 lg:p-4 items-center text-xs md:text-sm`;
export const SpanTitle = tw.span`font-bold`;
export const SocMed = tw.div`flex items-center gap-4 flex-wrap`;
export const FollowUnorderedList = tw.ul`flex gap-2`;
export const IconWrapper = tw.span`text-gray-300`;
