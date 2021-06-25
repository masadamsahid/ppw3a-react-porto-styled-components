import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const FooterContainer = styled.footer`
  background-color: #01bf71;
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  
  @media screen and (max-width: 820px){
    padding-top: 16px;
    padding-bottom: 16px;
    justify-content: space-around;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  
  justify-content: space-around;
  @media screen and (max-width: 820px){
    flex-direction: row;
  }
  
  @media screen and (min-width: 820px){
    width: 100%;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  
  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.div`
  font-size: 18px;
  margin-bottom: 16px;
  border-bottom: 2px solid #fff;
  padding-right: 20px;
  padding-bottom: 8px;
`

export const FooterLink = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;
  
  &:hover{
    color: #010606;
    cursor: pointer;
    transition: all .3s ease-in-out;
    font-weight: bold;
  }
`


















