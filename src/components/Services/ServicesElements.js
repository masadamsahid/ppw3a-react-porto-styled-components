import styled from 'styled-components'


export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;
  
  @media screen and (max-width: 768px){
    padding: 10px 0;
    height: 1100px;
  }

  @media screen and (max-width: 480px){
    height: fit-content;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 900px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 576px){
    grid-template-columns: 1fr;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
  transition: all .2s ease-in-out;
  
  &:hover{
    transform: scale(1.02);
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  
  @media screen and (max-width: 1200px){
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 900px){
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 576px){
    width: 90px;
    height: 90px;
  }
  
`

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 2rem;
    margin-bottom: 32px;
  }
  
  @media screen and (max-width: 480px){
    font-size: 1.5rem;
  }
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 900px){
    font-size: .8rem;
  }

  @media screen and (max-width: 576px){
    font-size: .7rem;
  }
`











































