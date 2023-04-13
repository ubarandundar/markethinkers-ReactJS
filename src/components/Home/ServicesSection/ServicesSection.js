import React, { useState } from 'react';
import { ReactSVG } from "react-svg";

import classes from './ServicesSection.module.css';

import ForwardArrow from '../../../assets/Group 34.svg';
import ForwardArrowLarge from '../../../assets/Group 199.svg';
import SEOCopywritingIconImg from '../../../assets/Group 198.svg';
import SEOConsultingIconImg from '../../../assets/Group 59.svg';
import ServicesSectionLeftImg from '../../../assets/Path 16762.svg';

function ServicesSection (props) {
    const ServicesData = [
        {
            image: SEOCopywritingIconImg,
            header: 'SEO Copywriting',
            description: 'We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.',
            forwardTo: 'www.google.com'
        },
        {  
            image: SEOConsultingIconImg,
            header: 'SEO Consulting',
            description: 'We help you increase your web visibility and organic traffic, with one-off analysis and recommendations.',
            forwardTo: 'www.google.com'
        },
        {  
            image: SEOCopywritingIconImg,
            header: 'ASO Marketing',
            description: 'We help you increase your web visibility and organic traffic, with one-off analysis and recommendations.',
            forwardTo: 'www.google.com'
        },
        {  
            image: SEOConsultingIconImg,
            header: 'Performance Marketing',
            description: 'We help you increase your web visibility and organic traffic, with one-off analysis and recommendations.',
            forwardTo: 'www.google.com'
        },
        {  
            image: SEOCopywritingIconImg,
            header: 'Digital PR',
            description: 'We help you increase your web visibility and organic traffic, with one-off analysis and recommendations.',
            forwardTo: 'www.google.com'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const contentHandler = (currentIndex) => {
        setCurrentIndex(currentIndex);
    };

    return (
    <div className='container'>
        <img className={classes.ServicesSectionLeftImg} src={ServicesSectionLeftImg} alt='ServicesSection_LeftImg' />
        <div className={classes.ServicesSectionBody}>
            <div className='container'>
                <div className={classes.ServicesSectionLeftSide}>
                    <a href='www.google.com' className={classes.ServicesSectionLeftSideWrapper}>
                        <header className={classes.ServiceSectionLeftSideHeader}>Professional Seo Services</header>
                        <p className={classes.ServiceSectionLeftSideParag}>
                        Our Services That
                        <br />
                        Will Digitally Grow
                        <br />
                        Your Brand</p>
                        <p className={classes.ServiceSectionLeftSideParagSub}>
                        Reduce Costs, Increase Efficiency
                        <br />    
                        in a Secure Infrastructure!</p>
                        <img src={ForwardArrow} alt='Forward_Arrow' />
                    </a>
                </div>
            </div>
            <div className='container'>
                <div className={classes.ServicesSectionRightSide}>
                    <div className={classes.ServiceSectionCardTop}>
                        <div>
                            <ul className={classes.ServiceSectionCardTopFirstRow}>
                                <li>
                                    <button onClick={() => contentHandler(0)} type="button" className={`${classes.ServicesButtons} ${currentIndex === 0 ? classes.ServicesButtonsActive:""}`}>SEO Copywriting
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => contentHandler(1)} type="button" className={`${classes.ServicesButtons} ${currentIndex === 1 ? classes.ServicesButtonsActive:""}`}>SEO Consulting
                                </button>
                                </li>
                                <li>
                                    <button onClick={() => contentHandler(2)} type="button" className={`${classes.ServicesButtons} ${currentIndex === 2 ? classes.ServicesButtonsActive:""}`}>ASO Marketing
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className={classes.ServiceSectionCardTopSecondRow}>
                                <li>
                                    <button onClick={() => contentHandler(3)} type="button" className={`${classes.ServicesButtons} ${currentIndex === 3 ? classes.ServicesButtonsActive:""}`}>Performance Marketing
                                </button>
                                </li>
                                <li>
                                    <button onClick={() => contentHandler(4)} type="button" className={`${classes.ServicesButtons} ${currentIndex === 4 ? classes.ServicesButtonsActive:""}`}>Digital PR
                                </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {ServicesData[currentIndex] && <div className={classes.ServiceSectionCardBottom}>
                        <a href={ServicesData[currentIndex].forwardTo}>
                            <div>
                                <div className={classes.ServicesIcons}>
                                    <img src={ServicesData[currentIndex].image} alt='Services_Icon' />
                                    <ReactSVG className={classes.ServicesIconForwardArrowLarge} src={ForwardArrowLarge} />
                                </div>
                            </div>
                            <header className={classes.ServiceSectionCardBottomHeader}>{ServicesData[currentIndex].header}</header>
                            <p className={classes.ServiceSectionCardBottomParag}>{ServicesData[currentIndex
                            ].description}</p>
                        </a>
                    </div>}
                </div>
            </div>    
        </div>
    </div>
    );
}

export default ServicesSection;