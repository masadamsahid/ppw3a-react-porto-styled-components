import React  from 'react';

//Import componenets from HeroElements.js
import {
    HeroContainer,
    HeroBg,
    VideoBg
} from "./HeroElements";

//Import video file
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type={'video/mp4'}/>

            </HeroBg>
        </HeroContainer>
    )
};


export default HeroSection;