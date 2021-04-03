import React from "react";
import { Menu } from "./menu";
import { Footer } from "./footer";
import { MainLayout, MainWrapper } from "./styles";
import { useLocation, useRouteMatch } from "react-router";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    return (
        <MainLayout>
            <Menu />
            <MainWrapper>{children}</MainWrapper>
            {location.pathname !== "/" && <Footer />}
        </MainLayout>
    );
};
