import React, {Component} from 'react';

import {
    AboutmeBackground,
    AboutmeWrapper,
    AboutmeContent,
    AboutmePhoto,
    AboutmeSectionsWrapper,
    AboutmePhotoWrapper, AboutmeH1, AboutmeH2, AboutmeP
} from "./AboutmeElements";

class AboutmeInfo extends Component {
    render() {
        return (
            <AboutmeBackground>
                <AboutmeContent>
                    <AboutmeWrapper>
                        <AboutmePhotoWrapper>
                            <AboutmePhoto src={'https://media-exp1.licdn.com/dms/image/C5603AQE2-ox_80I8Yg/profile-displayphoto-shrink_800_800/0/1619930750668?e=1630540800&v=beta&t=QYl2YWyes7bhdrq6qkQJQq__06ojRqPr3ZlMswuAB6o'} />
                        </AboutmePhotoWrapper>
                        <AboutmeSectionsWrapper>
                            <AboutmeH1>Maulana Adam Sahid</AboutmeH1>
                            <AboutmeH2>Just an Ordinary Student</AboutmeH2>
                            <AboutmeP>
                                Heloo, there! 👋 I'm Adam, currently attending my third year of Computer and Information System at Vocational College of Universitas Gadjah Mada.
                                I have learned and know some about software development like ui-ux design, programming languages, web development, mobile development, game development, etc.
                            </AboutmeP>
                            <br/>
                            <AboutmeP>
                                If you are interested to work together with me, feel free to reach me via maulana.a.s@mail.ugm.ac.id . Or you can also contact me from my social media accounts.
                                Thank you! See you in the next project! 😀
                            </AboutmeP>
                        </AboutmeSectionsWrapper>
                    </AboutmeWrapper>
                </AboutmeContent>
            </AboutmeBackground>
        );
    }
}

export default AboutmeInfo;