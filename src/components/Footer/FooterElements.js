import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


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

/*====== WATCH YOUR STEP, PEASANT! =======*/
/*======= SOCIAL MEDIA COMPONENTS ========*/
/*=========== START FROM HERE ============*/

export const SocialMedia = styled.div`
  width: 100%;
  background-color: black;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  width: 80%;
  
  @media screen and (max-width: 820px){
    flex-direction: column;
    margin: 40px auto 0 auto;
    width: 90%;
  }
`

export const SocialLogo = styled(LinkR)`
  color: #fff;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  flex: 30%;
`

export const WebRights = styled.small`
  color: #fff;
  margin-top: 16px;
  margin-bottom: 16px;
  flex: 30%;
  text-align: center;
`

export const SocialIconLinks = styled.a`
  color: #fff;
  font-size: 1.5em;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 2em;
  width: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 30%;
  max-width: 480px;
  padding: 8px 24px;
  transition: all .15s ease-in-out;
  margin-top: 16px;
  margin-bottom: 16px;
  border-radius: 2rem;
  
  @media screen and (max-width: 820px){
    width: 80%;
  }
  
  &:hover{
    background-color: #fff;
    border-radius: 1rem;
  }
  
  &:hover ${SocialIconLinks}{
    color: gray;
  }

  &:hover ${SocialIconLinks}:hover{
    color: #fff;
    transform: scale(1.25);
    border-radius: .5em;
    background-color: #000;
  }
`
















