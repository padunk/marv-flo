import React from "react";
import { VscLocation, VscMail } from "react-icons/vsc";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { WiTime10 } from "react-icons/wi";
import { TiSocialAtCircular } from "react-icons/ti";
import {
    ContactDetail,
    ContactIFrame,
    ContactInformation,
    ContactMap,
    ContactSection,
    ContactTitle,
    FollowUnorderedList,
    Header,
    IconWrapper,
    SocMed,
    SpanTitle,
} from "./styles";
import { Spacer } from "../Home/styles";

export const Contact = () => {
    return (
        <>
            <Header>
                <ContactTitle style={{ fontFamily: "var(--text-serif)" }}>
                    CONTACT US AT MARVELOUS FLORIST
                </ContactTitle>
            </Header>
            <ContactSection>
                <ContactMap>
                    <ContactIFrame
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJg27_RQa51C8RmaquOnTD-f8&key=AIzaSyBm4GrUtM4kw_E9oLnI9k6vfcFmSjtF_D4"
                    ></ContactIFrame>
                </ContactMap>
                <ContactInformation>
                    <ContactDetail>
                        <IconWrapper>
                            <VscLocation size={24} />
                        </IconWrapper>
                        <span>Jl. Pasar Baru IV/5, Padang, Indonesia</span>
                    </ContactDetail>
                    <ContactDetail>
                        <IconWrapper>
                            <IoPhonePortraitOutline size={24} />
                        </IconWrapper>
                        <a href="tel:+6287792369900">+62.877.9236.9900</a>
                    </ContactDetail>
                    <ContactDetail style={{ alignItems: "flex-start" }}>
                        <IconWrapper>
                            <VscMail size={24} />
                        </IconWrapper>
                        <div>
                            <SpanTitle>Wedding & General Queries: </SpanTitle>
                            <a href="mailto:marvelous.florist.pdg@gmail.com">
                                marvelous.florist.pdg@gmail.com
                            </a>
                            <Spacer size="sm" />
                            <SpanTitle>Private Events: </SpanTitle>
                            <a href="mailto:yu_lee_wong@yahoo.com">
                                yu_lee_wong@yahoo.com
                            </a>
                        </div>
                    </ContactDetail>
                    <ContactDetail style={{ alignItems: "flex-start" }}>
                        <IconWrapper>
                            <WiTime10 size={24} />
                        </IconWrapper>
                        <div>
                            <div>
                                <SpanTitle>Open Time</SpanTitle>
                            </div>
                            <Spacer size="sm" />
                            <SpanTitle>Monday - Saturday</SpanTitle>
                            <p>9.00 - 17.00</p>
                            <Spacer size="sm" />
                            <SpanTitle style={{ color: "indianred" }}>
                                Sunday
                            </SpanTitle>
                            <p>11.00 - 15.00</p>
                        </div>
                    </ContactDetail>
                    <ContactDetail>
                        <IconWrapper>
                            <TiSocialAtCircular size={24} />
                        </IconWrapper>
                        <SocMed>
                            <SpanTitle>Follow us:</SpanTitle>
                            <FollowUnorderedList>
                                <li>
                                    <a href="http://instagram.com/marvelous_florist/?hl=en">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="http://facebook.com">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send/?phone=6287792369900&text=Hi&app_absent=0">
                                        WhatsApp
                                    </a>
                                </li>
                            </FollowUnorderedList>
                        </SocMed>
                    </ContactDetail>
                </ContactInformation>
            </ContactSection>
        </>
    );
};
