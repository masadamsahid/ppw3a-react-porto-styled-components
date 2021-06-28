import React from 'react';

import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesIcon
} from "./ServicesElements";

const Services = () => {
    return(
        <ServicesContainer id={'services'}>
            <ServicesH1>I Offer You My Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-7.svg'}/>
                    <ServicesH2>UI-UX Design</ServicesH2>
                    <ServicesP>I'll deliver UI-UX design start from $15 for each page</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-4.svg'}/>
                    <ServicesH2>Flutter Development</ServicesH2>
                    <ServicesP>I'll make a stunning mobile app with flutter</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-5.svg'}/>
                    <ServicesH2>Webdev with HTML, CSS, and JS</ServicesH2>
                    <ServicesP>I'll deliver you responsive webpages using HTML, CSS, and JS.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={'/images/svg-6.svg'}/>
                    <ServicesH2>React Website</ServicesH2>
                    <ServicesP>I'll work for your react projects starting from $10/h</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;