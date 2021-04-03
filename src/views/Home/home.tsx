import React from "react";
import { Link } from "react-router-dom";
import {
    Hero,
    HeroContent,
    HeroSub,
    HeroTitle,
    HeroWrapper,
    LinkButton,
    Spacer,
} from "./styles";

export const Home = () => {
    return (
        <>
            <Hero>
                <HeroContent>
                    <HeroWrapper>
                        <HeroTitle
                            style={{
                                fontFamily: "var(--text-serif)",
                            }}
                        >
                            YOUR WEDDING FLOWERS & ARRANGEMENTS
                        </HeroTitle>
                        <Spacer size="sm" />
                        <HeroSub>
                            <p>
                                Exceptional design, exquisite color
                                combinations, and beautiful textures.
                            </p>
                            <Spacer size="sm" />
                            <LinkButton to="/contact">CONTACT US</LinkButton>
                        </HeroSub>
                    </HeroWrapper>
                </HeroContent>
            </Hero>
        </>
    );
};
