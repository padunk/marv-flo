import React from "react";
import { LinkButton } from "../Home/styles";
import {
    AboutArticle,
    AboutSection,
    AboutSubtitle,
    AboutTitle,
    ArticleText,
    DownloadButton,
    Header,
    Wrapper,
} from "./styles";

export const About = () => {
    return (
        <>
            <Header>
                <AboutTitle style={{ fontFamily: "var(--text-serif)" }}>
                    ABOUT US
                </AboutTitle>
            </Header>
            <AboutSection>
                <Wrapper>
                    <AboutSubtitle style={{ fontFamily: "var(--text-serif)" }}>
                        IT'S ALL BEGIN SMALL
                    </AboutSubtitle>
                </Wrapper>
                <AboutArticle>
                    <ArticleText>
                        We begin in 2007 in a small home in Padang, West
                        Sumatera. Over the years we have grow our customers and
                        employee. We now have 4 permanent amazing decorators and
                        one awesome freelance artist.
                    </ArticleText>
                    <ArticleText>
                        For the past 15 years we served wide variety of
                        customers. From couples sharing their beautiful wedding
                        decorations, business person opening new shop, to
                        families celebrating birthday of their loved ones.
                    </ArticleText>
                </AboutArticle>
                <LinkButton to="/contact">CONTACT US</LinkButton>
                {/* <DownloadButton>Download Event Price List</DownloadButton> */}
            </AboutSection>
        </>
    );
};
