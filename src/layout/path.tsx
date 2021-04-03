import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { MenuList } from "./styles";

const routes = [
    { to: "/", label: "Home" },
    { to: "/product", label: "Product" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

const StyledNavLink = (props: NavLinkProps) => {
    return (
        // @ts-ignore
        <NavLink
            {...props}
            activeStyle={{
                fontWeight: "bold",
                color: "var(--color-primary)",
            }}
        >
            {props.children}
        </NavLink>
    );
};

export const Path = () => {
    return (
        <>
            {routes.map((route) => (
                <MenuList key={route.label}>
                    <StyledNavLink exact to={route.to}>
                        {route.label}
                    </StyledNavLink>
                </MenuList>
            ))}
        </>
    );
};
