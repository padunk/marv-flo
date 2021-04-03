import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const Hero = styled.div`
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; */
    background-color: black;
    background-image: url("/assets/images/orio-nguyen-c7qvP413OVU-unsplash-1.jpg");
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    min-width: 100%;
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
        bottom: 0;
    }
`;

export const HeroContent = tw.div`flex justify-center items-center text-white w-full h-full z-10 relative flex-col`;
export const HeroWrapper = tw.div`flex justify-center items-center flex-col w-60 m-auto text-center mt-40`;
export const HeroTitle = tw.h1`text-4xl`;
export const Spacer = styled.span`
    display: block;
    ${({ size }: { size: string }) =>
        size === "sm" ? tw`w-4` : size === "md" ? tw`w-8` : tw`w-10`}
    ${({ size }: { size: string }) =>
        size === "sm" ? tw`h-4` : size === "md" ? tw`h-8` : tw`h-10`}
`;
export const HeroSub = tw.div`text-gray-300 text-sm`;
export const LinkButton = tw(
    Link
)`px-4 py-2 rounded-2xl border border-gray-300 inline-block text-xs hover:text-black hover:bg-blue-50`;
