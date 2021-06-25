import React, {Component} from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={"about"} onClick={toggle}>About</SidebarLink>
                    <SidebarLink to={"responsive"} onClick={toggle}>Responsive</SidebarLink>
                    <SidebarLink to={"design"} onClick={toggle}>Design</SidebarLink>
                    <SidebarLink to={"services"} onClick={toggle}>Services</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={"/contact"}>Contacts</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
};

export default Sidebar;