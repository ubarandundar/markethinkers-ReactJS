import classes from './Footer.module.css';

import markeThinkersImage from '../../assets/Group 200.svg';
import TurkishLangImage from '../../assets/turkey.png';
import TwitterIcon from '../../assets/twitter.svg';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import { Fragment } from 'react';

function Footer (props) {
    return (
        <Fragment>
             <div className={classes.footerBody}>
                <div className={classes.footerBodySub}>
                    <div className={classes.footerBodySubFistColumn}>
                        <img src={markeThinkersImage} className={classes.markeThinkersImage} alt='markeThinkersImage' />
                    </div>
                    <div className={classes.footerBodySubSecondColumn}>
                        <header className={classes.footerHeader}>Company</header>
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
                    <div className={classes.footerBodySubThirdColumn}>
                        <header className={classes.footerHeader}>Services</header>
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
                    <div className={classes.footerBodySubFourthColumn}>
                        <header className={classes.footerHeader}>Our Tools</header>
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
                    <div className={classes.footerBodySubFifthColumn}>
                        <header className={classes.footerHeader}>Get Our News</header>
                        <input className={classes.footerEmailAddress} type='email' placeholder='Your E-Mail Address' />
                        <div className={classes.footerCheckbox}>
                            <input type="checkbox" id="scales" name="scales" />
                            <label htmlFor="scales">
                            Lorem ipsum dolor sit amet, consectetur
                            <br />
                            adipiscing elit, sed do eiusmod tempor.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
                <div className={classes.footerBodyBottom}>
                <div className={classes.footerSocialMediaArea}>
                    <a href='www.google.com'>
                        <div className={classes.footerSocialMedia}>
                            <img src={TwitterIcon} alt='Twitter_Icon' />
                        </div>
                    </a>
                    <a href='www.google.com'>
                        <div className={classes.footerSocialMediaEx}>
                            <img src={FacebookIcon} alt='Facebook_Icon' />
                        </div>
                    </a>
                    <a href='www.google.com'>
                        <div className={classes.footerSocialMedia}>
                            <img src={InstagramIcon} alt='Instagram_Icon' />
                        </div>
                    </a>
                    <a href='www.google.com'>
                        <div className={classes.footerSocialMedia}>
                            <img src={LinkedinIcon} alt='Linkedin_Icon' />
                        </div>
                    </a>
                </div>
                    <hr />
                    <div className={classes.footerBottomSide}>
                        <div className='d-flex'>
                            <span className={classes.footerCopyright}>Copyright © 2023 | Marketinkers</span>
                            <span>-</span>
                            <a className={classes.footerBottomSideLinks} href='www.google.com'>Privacy Policy</a>
                            <span>-</span>
                            <a className={classes.footerBottomSideLinks} href='www.google.com'>Terms of Service</a>
                            </div>
                        <div className={classes.footerBottomSideLang}>
                            <a href='www.google.com'>
                                <img src={TurkishLangImage} alt='Turkish' />Türkçe
                            </a>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default Footer;