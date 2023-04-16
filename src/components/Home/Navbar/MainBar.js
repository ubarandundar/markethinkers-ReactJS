import { Fragment, useEffect, useState } from "react";
import markeThinkersImage from '../../../assets/Group 200.svg';

import classes from './MainBar.module.css';

function MainBar (props) {
    const [navbar, setNavbar] = useState(false);
    const [navbarLogo, setNavbarLogo] = useState(false);
    const [showSubMenusExpertise, setShowSubMenusExpertise] = useState(false);
    const [showSubMenusTools, setShowSubMenusTools] = useState(false);

    const changeBackground = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 20) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      }

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    })
    
    const changeLogo = () => {
        if (window.scrollY >= 20) {
          setNavbarLogo(true);
        } else {
          setNavbarLogo(false);
        }
    }
    
    useEffect(() => {
        changeLogo();
        window.addEventListener("scroll", changeLogo);
    })

    // const subMenusOnMouseLeaveHandler = () => {
    //     setTimeout(() => {
    //         setShowSubMenus(false);
    //     }, 300);
    // }

    return (
        <Fragment>
            <nav className={navbar ? classes.mainbarOnScroll : classes.mainbar}>
                <div>
                    <img src={markeThinkersImage} className={!navbarLogo ? classes.markeThinkersImage : classes.markeThinkersImageOnScroll} alt='markeThinkersImage' />
                </div>
                <div>
                <ul className={classes.mainbarUl}>
                    <li className={classes.mainbarLi}>
                        <a onMouseEnter={() => setShowSubMenusExpertise(true)} className={classes.mainbarA} href="https://www.google.com/">expertise</a>
                        {showSubMenusExpertise && <div onMouseLeave={() => setShowSubMenusExpertise(false)} className={classes.subMenus}>
                            <ul>
                                <li>
                                <div className={classes.subMenusDiv}></div>
                                <a href="https://www.google.com/">Professional SEO Consulting</a>
                                </li>
                                <li>
                                <div className={classes.subMenusDiv}></div>
                                <a href="https://www.google.com/">SEO Copywriting</a>
                                </li>
                                <li>
                                <div className={classes.subMenusDiv}></div>
                                <a href="https://www.google.com/">Content Marketing</a>
                                </li>
                                <li>
                                <div className={classes.subMenusDiv}></div>
                                <a href="https://www.google.com/">Digital PR - Link Building Services</a>
                                </li>
                                <li>
                                <div className={classes.subMenusDiv}></div>
                                <a href="https://www.google.com/">Digital Advertesing Services</a>
                                </li>
                            </ul>
                        </div>} 
                    </li>
                    <li className={classes.mainbarLi}>
                        <a onMouseEnter={() => setShowSubMenusTools(true)} className={classes.mainbarA} href="https://www.google.com/">tools</a>
                        {showSubMenusTools && <div onMouseLeave={() => setShowSubMenusTools(false)} className={classes.subMenus}>
                            <ul>
                                <li>
                                <div className={classes.subMenusDiv}></div>
                                <a href="https://www.google.com/">JSON-LD FAQ Schema Oluşturucu</a>
                                </li>
                                <li>
                                <div className={classes.subMenusDiv}></div>
                                <a href="https://www.google.com/">Word Counter</a>
                                </li>
                                <li>
                                <div className={classes.subMenusDiv}></div>
                                <a href="https://www.google.com/">SERP Preview Aracı</a>
                                </li>
                            </ul>
                        </div>}  
                    </li>
                    <li className={classes.mainbarLi}>
                        <a className={classes.mainbarA} href="https://www.google.com/">about us</a> 
                    </li>
                    <li className={classes.mainbarLi}>
                        <a className={classes.mainbarA} href="https://www.google.com/">career</a> 
                    </li>
                    <li className={classes.mainbarLi}>
                        <a className={classes.mainbarA} href="https://www.google.com/">blog</a> 
                    </li>
                    <li className={classes.mainbarLi}>
                        <a className={classes.mainbarA} href="https://www.google.com/">FAQ</a> 
                    </li>
                    <li className={classes.mainbarLi}>
                        <button type="button" className={classes.contactButton}>contact</button>
                    </li>
                </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default MainBar;