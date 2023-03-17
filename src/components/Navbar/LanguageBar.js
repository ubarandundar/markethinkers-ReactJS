import React, { useState } from 'react';

import classes from './LanguageBar.module.css';
import NavbarEnglishLangImage from '../../assets/united-kingdom.svg';
import NavbarTurkishLangImage from '../../assets/turkey.svg';

function LanguageBar (props) {
    const [isVisibleOn, setIsVisibleOn] = useState(false);

    const onMouseOverHoverHandler = () => { 
        setIsVisibleOn(true);
    };

    const onMouseOutHoverHandler = () => { 
        setIsVisibleOn(false);
    };

    return (
            <nav onMouseOver={onMouseOverHoverHandler} onMouseOut={onMouseOutHoverHandler} className={isVisibleOn ? classes.languageBarENToggle : classes.languageBarEN}>
                <a href="https://www.google.com/">
                <img src={NavbarEnglishLangImage} alt='English' />
                    EN 
                </a>
                {isVisibleOn && <nav className={classes.languageBarTR}>
                    <a href="https://www.google.com/">
                    <img src={NavbarTurkishLangImage} alt='Turkish' />
                    TR
                    </a>
                </nav>}
            </nav>
    );
}

export default LanguageBar;