// import LanguageBar from "./LanguageBar";
// import MainBar from "./MainBar";

// import classes from './Navbar.module.css';

// function Navbar (props) {
//     return (
//         <div className="container-fluid">
//             <div className={classes.navbar}>
//                 <MainBar />
//                 <LanguageBar />
//             </div>
//         </div>
//     );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { ReactSVG } from 'react-svg';
import LanguageBar from "./LanguageBar";
import MainBar from "./MainBar";
import SocialMediaItems from '../Footer/SocialMediaItems';

import classes from './Navbar.module.css';
import './Navbar.css';
import markeThinkersImage from '../../../assets/Group 200.svg';
import hamburgerMenu from '../../../assets/menu-hamburger.svg';
import hamburgerMenuX from '../../../assets/menu-x.svg';
import hamburgerMenuArrow from '../../../assets/Group 64.svg';

function Navbar () {
    // showSettings (event) {
    //     event.preventDefault();
    //   }

const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(false);

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

  const [showSubMenusExpertise, setShowSubMenusExpertise] = useState(false);
  const [showSubMenusTools, setShowSubMenusTools] = useState(false);
  const [showSubMenusBlog, setShowSubMenusBlog] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [showArrow2, setShowArrow2] = useState(false);
  const [showArrow3, setShowArrow3] = useState(false);

  const normalMenu = (
    // <div className="container-fluid">
            // <div className={classes.navbar}>
            <>
                <MainBar />
            
                </>
            // </div>
        // </div>
  );

  const burgerMenu = (
        <Menu 
        width={390}
        left={true}
        isOpen={isBurgerMenuOpen}
        onStateChange={handleBurgerMenuClick}
        customBurgerIcon={ <ReactSVG src={hamburgerMenu} alt='menu-hamburger' /> }
        customCrossIcon={ <ReactSVG src={hamburgerMenuX} alt='menu-hamburger-x' /> }
        >
        <img style={{width: '132px'}} src={markeThinkersImage} alt='markeThinkersImage' />
        <div style={{marginTop: '78px'}}>
            <div className={classes.mobileMenuTitlesWrapper}>
                <div onClick={() => (setShowSubMenusExpertise(!showSubMenusExpertise), setShowArrow(!showArrow))} className={classes.mobileMenuTitlesBody}>
                    <div className={classes.mobileMenuTitles} >expertise</div>
                    <img src={hamburgerMenuArrow} className={showArrow ? classes.hamburgerMenuArrowRotate : ''} alt='hamburgerMenuArrow' />
                </div>
                        {showSubMenusExpertise && <div className={classes.mobileSubMenus}>
                            <ul>
                                <li style={{marginBottom: '10px', marginTop: '10px'}}>
                                    <a href="https://www.google.com/">Professional SEO Consulting</a>
                                </li>
                                <li style={{marginBottom: '10px'}}> 
                                <a  href="https://www.google.com/">SEO Copywriting</a>
                                </li>
                                <li style={{marginBottom: '10px'}}>
                                <a href="https://www.google.com/">Content Marketing</a>
                                </li>
                                <li style={{marginBottom: '10px'}}>
                                <a href="https://www.google.com/">Digital PR - Link Building Services</a>
                                </li>
                                <li>
                                <a href="https://www.google.com/">Digital Advertesing Services</a>
                                </li>
                            </ul>
                        </div>} 
            </div>
            <div style={{marginTop: '16px'}} className={classes.mobileMenuTitlesWrapper}>
                <div onClick={() => (setShowSubMenusTools(!showSubMenusTools), setShowArrow2(!showArrow2))} className={classes.mobileMenuTitlesBody}>
                    <div className={classes.mobileMenuTitles} >tools</div>
                    <img src={hamburgerMenuArrow} className={showArrow2 ? classes.hamburgerMenuArrowRotate : ''} alt='hamburgerMenuArrow' />
                </div>
                        {showSubMenusTools && <div className={classes.mobileSubMenus}>
                            <ul>
                                <li style={{marginBottom: '10px', marginTop: '10px'}}>
                                    <a href="https://www.google.com/">JSON-LD FAQ Schema Oluşturucu</a>
                                </li>
                                <li style={{marginBottom: '10px'}}> 
                                <a  href="https://www.google.com/">Word Counter</a>
                                </li>
                                <li style={{marginBottom: '10px'}}>
                                <a href="https://www.google.com/">SERP Preview Aracı</a>
                                </li>
                            </ul>
                        </div>} 
            </div>
            <div style={{marginTop: '16px'}} className={classes.mobileMenuTitlesWrapper}>
                <div className={classes.mobileMenuTitlesBody}>
                    <a href='www.google.com' className={classes.mobileMenuTitles} >about us</a>
                </div>
            </div>
            <div style={{marginTop: '16px'}} className={classes.mobileMenuTitlesWrapper}>
                <div className={classes.mobileMenuTitlesBody}>
                    <a href='www.google.com' className={classes.mobileMenuTitles} >career</a>
                </div>
            </div>
            <div style={{marginTop: '16px'}} className={classes.mobileMenuTitlesWrapper}>
                <div onClick={() => (setShowSubMenusBlog(!showSubMenusBlog), setShowArrow3(!showArrow3))} className={classes.mobileMenuTitlesBody}>
                    <div className={classes.mobileMenuTitles} >blog</div>
                    <img src={hamburgerMenuArrow} className={showArrow3 ? classes.hamburgerMenuArrowRotate : ''} alt='hamburgerMenuArrow' />
                </div>
                        {showSubMenusBlog && <div className={classes.mobileSubMenus}>
                            <ul>
                                <li style={{marginBottom: '10px', marginTop: '10px'}}>
                                    <a href="https://www.google.com/">Professional SEO Consulting</a>
                                </li>
                                <li style={{marginBottom: '10px'}}> 
                                <a  href="https://www.google.com/">SEO Copywriting</a>
                                </li>
                                <li style={{marginBottom: '10px'}}>
                                <a href="https://www.google.com/">Content Marketing</a>
                                </li>
                                <li style={{marginBottom: '10px'}}>
                                <a href="https://www.google.com/">Digital PR - Link Building Services</a>
                                </li>
                                <li>
                                <a href="https://www.google.com/">Digital Advertesing Services</a>
                                </li>
                            </ul>
                        </div>} 
            </div>
            <div style={{marginTop: '16px'}} className={classes.mobileMenuTitlesWrapper}>
                <div className={classes.mobileMenuTitlesBody}>
                    <a href='www.google.com' className={classes.mobileMenuTitles} >FAQ</a>
                </div>
            </div>
            <div style={{marginTop: '16px', background: '#1F0242', marginBottom: '66px'}} className={classes.mobileMenuTitlesWrapper}>
                <div className={classes.mobileMenuTitlesBody}>
                    <a style={{color: 'white'}} href='www.google.com' className={classes.mobileMenuTitles} >contact</a>
                </div>
            </div>
        </div>
        <hr className={classes.mobileHr} />
        <div className='d-flex flex-row'>
            <SocialMediaItems changeFacebookBackground={true} />
        </div>
        </Menu>
  );

  const menu = windowWidth <= 1470 ? burgerMenu : '';
  const menuDefault = windowWidth > 1470 ? normalMenu : '';

    return (
        <>
        <div className={`container-fluid ${classes.navbar}`}>
            <div className={navbar ? classes.mainbarOnScroll : classes.mainbar}>
                <div>
                    <img src={markeThinkersImage} className={!navbarLogo ? classes.markeThinkersImageMobile : classes.markeThinkersImageOnScrollMobile} alt='markeThinkersImage' />
                </div>
                {menuDefault}
            </div>
            {menuDefault ? <LanguageBar /> : '' }
        </div>
        {menu}
      </>
    );
}

export default Navbar;