import React from "react";
import {FaBars} from "react-icons/fa";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";


const Navbar = ({ toggle }) => {
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to={"home"}>
                        Masadam
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to={'about'}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'responsive'}>Responsive</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'design'}>Design</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={'services'}>Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to={'/contact'}>Contact Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;