import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledAbout from './About.styled';
import { motion } from 'framer-motion';

const About = () => {

    const { t } = useTranslation();

    const AnimationText = {
        hidden: {
            opacity: 0,
            y: 300,
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2 },
        }),
    };

    const AnimationImg = {
        hidden: {
            scale: 0,
        },
        visible: (custom) => ({
            scale: 1,
            transition: { delay: custom * 0.2, duration: 0.3 },
        }),
    };

    return (
        <StyledAbout id='about'>
            <motion.div className="about-content"
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}>
                <motion.div className="about-info"
                    variants={AnimationText}
                    custom={2}>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="512.5px" height="512.5px" viewBox="0 0 512.5 512.5" className='svg-icon-about'
                    >
                        <g>
                            <path d="M112.5,208.25c61.856,0,112,50.145,112,112s-50.144,112-112,112s-112-50.145-112-112l-0.5-16
                            c0-123.712,100.288-224,224-224v64c-42.737,0-82.917,16.643-113.137,46.863c-5.817,5.818-11.126,12.008-15.915,18.51
                            C100.667,208.723,106.528,208.25,112.5,208.25z M400.5,208.25c61.855,0,112,50.145,112,112s-50.145,112-112,112
                            s-112-50.145-112-112l-0.5-16c0-123.712,100.287-224,224-224v64c-42.736,0-82.918,16.643-113.137,46.863
                            c-5.818,5.818-11.127,12.008-15.916,18.51C388.666,208.723,394.527,208.25,400.5,208.25z"/>
                        </g>
                    </svg>

                    <h2><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="512.5px" height="512.5px" viewBox="0 0 512.5 512.5" className='svg-icon-about2'
                    >
                        <g>
                            <path d="M112.5,208.25c61.856,0,112,50.145,112,112s-50.144,112-112,112s-112-50.145-112-112l-0.5-16
                            c0-123.712,100.288-224,224-224v64c-42.737,0-82.917,16.643-113.137,46.863c-5.817,5.818-11.126,12.008-15.915,18.51
                            C100.667,208.723,106.528,208.25,112.5,208.25z M400.5,208.25c61.855,0,112,50.145,112,112s-50.145,112-112,112
                            s-112-50.145-112-112l-0.5-16c0-123.712,100.287-224,224-224v64c-42.736,0-82.918,16.643-113.137,46.863
                            c-5.818,5.818-11.127,12.008-15.916,18.51C388.666,208.723,394.527,208.25,400.5,208.25z"/>
                        </g>
                    </svg>{t('description.aboutSubtitle')}<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="512.5px" height="512.5px" viewBox="0 0 512.5 512.5" className='svg-icon-about3'
                    >
                            <g>
                                <path d="M112.5,208.25c61.856,0,112,50.145,112,112s-50.144,112-112,112s-112-50.145-112-112l-0.5-16
                            c0-123.712,100.288-224,224-224v64c-42.737,0-82.917,16.643-113.137,46.863c-5.817,5.818-11.126,12.008-15.915,18.51
                            C100.667,208.723,106.528,208.25,112.5,208.25z M400.5,208.25c61.855,0,112,50.145,112,112s-50.145,112-112,112
                            s-112-50.145-112-112l-0.5-16c0-123.712,100.287-224,224-224v64c-42.736,0-82.918,16.643-113.137,46.863
                            c-5.818,5.818-11.127,12.008-15.916,18.51C388.666,208.723,394.527,208.25,400.5,208.25z"/>
                            </g>
                        </svg></h2>
                    <h2><br /> <br />{t('description.aboutSubtitle2')}</h2>
                    <h3 className='about-author'>Nicolas Mauer</h3>
                    <h4 className='author-spec'>{t('description.spec')}</h4>
                </motion.div>
                <motion.div className="about-img" variants={AnimationImg}
                    custom={2}>

                </motion.div>
            </motion.div>
        </StyledAbout>
    );
}

export default About;
