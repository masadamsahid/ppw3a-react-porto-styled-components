import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements'

const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Services</FooterLinkTitle>
                            <FooterLink to=''>Full Bio</FooterLink>
                            <FooterLink to=''>My Team</FooterLink>
                            <FooterLink to=''>Testimonials</FooterLink>
                            <FooterLink to=''>Get Fake Assistants</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to=''>LinkedIn</FooterLink>
                            <FooterLink to=''>GitHub</FooterLink>
                            <FooterLink to=''>YouTube</FooterLink>
                            <FooterLink to=''>Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Services</FooterLinkTitle>
                            <FooterLink to=''>Full Bio</FooterLink>
                            <FooterLink to=''>My Team</FooterLink>
                            <FooterLink to=''>Testimonials</FooterLink>
                            <FooterLink to=''>Get Fake Assistants</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to=''>LinkedIn</FooterLink>
                            <FooterLink to=''>GitHub</FooterLink>
                            <FooterLink to=''>YouTube</FooterLink>
                            <FooterLink to=''>Instagram</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;