import styled from 'styled-components'
import {Link, Route, Switch} from "react-router-dom";

export const AboutmeBackground = styled.div`
  background: linear-gradient(20deg, #2E9DD1, #2ED1B3, #2ED162);
  min-height: 420px;
  padding: 4rem;
`

export const AboutmeContent = styled.div`
  padding: 0;
`

export const AboutmeWrapper = styled.div`
  margin: 0;
  background-color: white;
  display: flex;
  padding: 0;

  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
`

export const AboutmePhotoWrapper = styled.div`
  padding: 0;
  margin: 0;
`

export const AboutmePhoto = styled.img`
  margin: 0;
  width: 500px;
  padding: 0;

  @media screen and (max-width: 1000px){
    width: 100%;
  }
  
`

export const AboutmeSectionsWrapper = styled.div`
  flex: 60;
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: center;
`

export const AboutmeH1 = styled.h1`
  text-align: center;
  color: #01bf71;
`

export const AboutmeH2 = styled.h4`
  font-weight: normal;
  text-align: center;
  font-size: 20px;
  border-bottom: 2px solid black;
  width: fit-content;
  margin: 10px auto 20px;
`

export const AboutmeP = styled.p`
  text-align: justify;

  @media screen and (max-width: 480px){
    font-size: 12px;
  }
  
`





























export const AboutmeNavigation = styled.nav`
  display: flex;
  flex: 10;
`

export const AboutmeLinkWrap = styled.ul`
  flex: 1;
  height: 100%;
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AboutmeLink = styled(Link)`
  color: #01bf71;
  font-size: 1.5em;
  text-align: center;
  text-decoration: none;
`

export const AboutmeSectionContent = styled(Route)`
  flex: 80;
  overflow-wrap: break-word;
`







