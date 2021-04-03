import React from "react";
import { FooterLink, FooterWrapper } from "./styles";

export const Footer = () => {
    return (
        <FooterWrapper>
            <span>
                Copyright 2021 - Present: Marvelous Florist | Created by:{" "}
                <FooterLink
                    href="http://anakagung.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Abraham A. Agung
                </FooterLink>
            </span>
        </FooterWrapper>
    );
};
