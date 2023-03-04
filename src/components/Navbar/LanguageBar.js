import { Fragment } from "react";

import classes from './LanguageBar.module.css';

function LanguageBar (props) {
    return (
        <Fragment>
            <nav className={classes.languageBar}>
                <a href="https://www.google.com/">EN</a>
            </nav>
        </Fragment>
    );
}

export default LanguageBar;