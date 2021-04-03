import React, { useEffect, useRef, useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import tw, { styled } from "twin.macro";
import Logo from "../components/icons/logo";
import { debounce } from "../libs/helpers";
import { useWindow } from "../libs/hooks";
import { Path } from "./path";
import {
    HamburgerButton,
    ImageWrapper,
    MenuList,
    MenuUnorderedList,
    MobileMenuUnorderedList,
    Nav,
} from "./styles";

export const Menu = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const mobileMenu = useRef(null);
    const [activateNavBG, setActivateNavBG] = useState(false);
    const { height } = useWindow();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 340) {
                setActivateNavBG(true);
            } else {
                setActivateNavBG(false);
            }
        };
        window.addEventListener("scroll", debounce(handleScroll, 50));
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Nav
            style={{
                backgroundColor: activateNavBG
                    ? "rgba(0,0,0,0.8)"
                    : "transparent",
                backdropFilter: "blur(5px)",
            }}
        >
            {/* mobile menu */}
            <div tw="absolute inset-y-0 left-0 flex items-center md:hidden">
                <HamburgerButton
                    type="button"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    onClick={() => setOpenMobileMenu(!openMobileMenu)}
                >
                    <span tw="sr-only">Open main menu</span>
                    <svg
                        style={{
                            display: openMobileMenu ? "none" : "block",
                            width: "1.5rem",
                            height: "1.5rem",
                        }}
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
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <svg
                        style={{
                            display: openMobileMenu ? "block" : "none",
                        }}
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
                </HamburgerButton>
            </div>
            {/* <MenuUnorderedList>
                <MenuList>Weddings</MenuList>
                <MenuList>Corporate Events</MenuList>
                <MenuList>Private Events</MenuList>
            </MenuUnorderedList> */}
            <ImageWrapper>
                <Logo />
            </ImageWrapper>
            <MenuUnorderedList>
                <Path />
            </MenuUnorderedList>

            {/* dropdown mobile menu */}
            <div
                ref={mobileMenu}
                style={{
                    display: openMobileMenu ? "block" : "none",
                }}
            >
                <MobileMenuUnorderedList
                    style={{ backdropFilter: "blur(5px)" }}
                >
                    {/* <MenuList>Weddings</MenuList>
                    <MenuList>Corporate Events</MenuList>
                    <MenuList>Private Events</MenuList> */}
                    <Path />
                </MobileMenuUnorderedList>
            </div>
        </Nav>
    );
};
