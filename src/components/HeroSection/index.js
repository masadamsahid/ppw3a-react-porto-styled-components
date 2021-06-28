import React, {useState} from 'react';

//Import componenets from HeroElements.js
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from "./HeroElements";

//Import video file
import Video from '../../videos/video.mp4'
import {Button} from "../ButtonElement";
import {Link} from "react-router-dom";

const HeroSection = ({id}) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return(
        <HeroContainer id={id}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type={'video/mp4'}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello There!</HeroH1>
                <HeroP>
                    I'm Adam, a &nbsp;
                    <span style={{textDecoration:"line-through"}}>Professional Googler</span>
                    <br/>
                    Programmer and Software Developer. <br/> <br/>
                    <p style={{fontSize:"16px"}}>I do UI-UX Design, Web Development, Mobile Development, and many more.</p>
                </HeroP>
                <HeroBtnWrapper>
                    <Button as={Link}
                        to={'aboutme'}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={'true'}
                        dark={'true'}
                    >
                        About Me {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
};


export default HeroSection;