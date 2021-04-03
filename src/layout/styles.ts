import tw, { styled } from "twin.macro";

const centerMixin = "flex justify-center items-center";
export const MainLayout = tw.div`min-h-screen relative flex flex-col`;
export const Nav = tw.nav`flex items-center justify-center py-1 px-8 text-gray-50 fixed w-full top-0 left-0 right-0 z-50 md:justify-between transition-colors`;
export const MenuUnorderedList = tw.ul`gap-4 ${centerMixin} md:flex hidden`;
export const MenuList = tw.li`uppercase text-sm font-light py-1 px-4 md:p-0 lg:px-2 hover:text-blue-400`;
export const ImageWrapper = tw.div`overflow-hidden ${centerMixin}`;

// mobile menu
export const HamburgerButton = tw.button`inline-flex items-center justify-center p-2 ml-4 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`;
export const MobileMenuUnorderedList = tw.ul`flex flex-col absolute top-3 left-0 mt-16 bg-black bg-opacity-80 md:hidden`;

export const MainWrapper = tw.main`flex-auto flex flex-col`;

// footer
export const FooterWrapper = tw.footer`text-center text-xs md:text-sm py-8 text-gray-400 border-t border-gray-300 ${centerMixin}`;
export const FooterLink = tw.a`hover:text-black`;
