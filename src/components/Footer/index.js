import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebRights,
    SocialIcons,
    SocialIconLinks
} from './FooterElements'
import {FaGithub, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/all";

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
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to={'/'}>
                        MASADAM
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLinks href={'https://github.com/masadamsahid'} target={'_blank'} aria-label={'Github'}>
                            <FaGithub/>
                        </SocialIconLinks>
                        <SocialIconLinks href={'https://www.linkedin.com/in/masadamsahid/'} target={'_blank'} aria-label={'LinkedIn'}>
                            <FaLinkedin/>
                        </SocialIconLinks>
                        <SocialIconLinks href={'https://www.youtube.com/channel/UCjwGYOoNHTYzgwtih6oNBfQ'} target={'_blank'} aria-label={'YouTube'}>
                            <FaYoutube/>
                        </SocialIconLinks>
                        <SocialIconLinks href={'https://www.instagram.com/masadamsahid/'} target={'_blank'} aria-label={'Instagram'}>
                            <FaInstagram/>
                        </SocialIconLinks>
                    </SocialIcons>
                    <WebRights>
                        masadam &copy; {new Date().getFullYear()} all rights reserved.
                    </WebRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;