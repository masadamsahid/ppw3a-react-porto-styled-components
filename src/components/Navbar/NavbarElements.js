import styled from  'styled-components';
import { Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#01b060' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all .3s ease-in-out;
  
  @media screen and (max-width: 960px){
    transition: all .5s ease-in-out;
  }
`;

export const  NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkS)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 70%;
  cursor: pointer;
  
  &.active {
    background-color: black;
    color: #01b060;
    border-radius: 16px;
  }
  
  &:hover{
    font-weight: bold;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px){
    display: none;
  }
  
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({scrollNav}) => (scrollNav ? '#fff' : '#01bf71')};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${({scrollNav}) => (scrollNav ? '#01bf71' : '#010606')};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-decoration: none;
  
  &:hover{
    background: #010606;
    color: #01bf71;
    transform: scale(1.1);
  }
`








