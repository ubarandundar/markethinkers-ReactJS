import React, { useState, useEffect } from 'react';

import classes from './LanguageBar.module.css';
import NavbarEnglishLangImage from '../../../assets/united-kingdom.svg';
import NavbarTurkishLangImage from '../../../assets/turkey.svg';

function LanguageBar (props) {
    const [isVisibleOn, setIsVisibleOn] = useState(false);

    const onMouseOverHoverHandler = () => { 
        setIsVisibleOn(true);
    };

    const onMouseOutHoverHandler = () => { 
        setIsVisibleOn(false);
    };

    const [languagebar, setLanguagebar] = useState(false);

    const changeBackground = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 20) {
            setLanguagebar(true);
        } else {
            setLanguagebar(false);
        }
      }

      useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
      })

    return (
            <nav onMouseOver={onMouseOverHoverHandler} onMouseOut={onMouseOutHoverHandler} style={languagebar ? {background: 'white'} : {}} className={isVisibleOn ? classes.languageBarENToggle : classes.languageBarEN && !languagebar ? classes.languageBarEN : classes.languageBarENOnScroll}>
                <a className={classes.languageBarENA} href="https://www.google.com/">
                <img className={classes.languageBarENImg} src={NavbarEnglishLangImage} alt='English' />
                    EN 
                </a>
                {isVisibleOn && <nav style={languagebar ? {background: 'white'} : {}} className={classes.languageBarTR}>
                    <a href="https://www.google.com/">
                    <img src={NavbarTurkishLangImage} alt='Turkish' />
                    TR
                    </a>
                </nav>}
            </nav>
    );
}

export default LanguageBar;