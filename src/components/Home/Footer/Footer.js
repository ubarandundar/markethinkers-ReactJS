import { useState, useEffect } from 'react';
import classes from './Footer.module.css';

import markeThinkersImage from '../../../assets/Group 200.svg';
import TurkishLangImage from '../../../assets/turkey.png';
import SocialMediaItems from './SocialMediaItems';

function Footer (props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    
    const socialMobile = <SocialMediaItems changesforMobile={true} changeFacebookBackground={true} />
    const socialDesktop = <SocialMediaItems />

    const socialMediaMobile = windowWidth <= 767 ? socialMobile : '';
    const socialMediaDesktop = windowWidth > 768 ? socialDesktop : '';

    return (
        <div className='container'>
             <div className={classes.footerBody}>
                <div className={classes.footerBodySub}>
                    <div className={`col-sm-12 col-md-3 col-lg-3 ${classes.footerBodySubFistColumn}`}>
                        <img src={markeThinkersImage} className={classes.markeThinkersImage} alt='markeThinkersImage' />
                    </div>
                    <div className={`d-sm-none d-md-block col-md-2 col-lg-2 ${classes.footerBodySubSecondColumn}`}>
                        <header className={classes.footerHeaderCompany}>Company</header>
                        <ul>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>Home</a>
                            </li>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>About Us</a>
                            </li>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>Careers</a>
                            </li>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>Case Studies</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`d-sm-none d-md-block col-md-2 col-lg-2 ${classes.footerBodySubThirdColumn}`}>
                        <header className={classes.footerHeaderServices}>Services</header>
                        <ul>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>Copywriting</a>
                            </li>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>SEO Strategy</a>
                            </li>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>Product Design</a>
                            </li>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>Digital PR</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`d-sm-none d-md-block col-md-2 col-lg-2 ${classes.footerBodySubFourthColumn}`}>
                        <header className={classes.footerHeaderOurTools}>Our Tools</header>
                        <ul>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>Word Counter</a>
                            </li>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>SERP Preview</a>
                            </li>
                            <li>
                                <a className={classes.footerNavLinks} href='www.google.com'>Schema Generator</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`col-sm-12 col-md-3 col-lg-3 ${classes.footerBodySubFifthColumn}`}>
                        <header className={classes.footerHeaderGetOurNews}>Get Our News</header>
                        <div className='position-relative'>
                            <input className={classes.footerEmailAddress} type='email' placeholder='Your E-Mail Address' />
                            <button className={classes.joinButton} type='submit'>join</button>
                        </div>  
                        <div className={classes.footerCheckboxWrapper}>
                            <input className={classes.footerCheckbox} type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales">
                            Lorem ipsum dolor sit amet, consectetur 
                            <br /><span> </span>
                            adipiscing elit, sed do eiusmod tempor.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footerBodyBottom}>
                <div className={classes.footerSocialMediaArea}>
                    <div className='d-flex flex-row'>
                        {socialMediaMobile}
                        {socialMediaDesktop}
                    </div>
                    <div className={classes.footerBottomSideLangExtra}>
                            <a href='www.google.com'>
                                <img src={TurkishLangImage} alt='Turkish' />Türkçe
                            </a>
                    </div>
                </div>
                    <hr />
                    <div className={classes.footerBottomSide}>
                        <div className={classes.footerBottomSideSub}>
                            <span className={classes.footerCopyright}>Copyright © 2023 | Marketinkers</span>
                            <span className={classes.footerBottomSideSpan}>-</span>
                            <div>
                                <a className={classes.footerBottomSideLinks} href='www.google.com'>Privacy Policy</a>
                                <span>-</span>
                                <a className={classes.footerBottomSideLinks} href='www.google.com'>Terms of Service</a>
                                </div>
                            </div>
                        <div className={classes.footerBottomSideLang}>
                            <a href='www.google.com'>
                                <img src={TurkishLangImage} alt='Turkish' />Türkçe
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Footer;