import { Fragment } from "react";
import markeThinkersImage from '../../assets/Group 200.svg';

import classes from './MainBar.module.css';

function MainBar (props) {
    return (
        <Fragment>
            <nav className={classes.mainbar}>
                <div>
                    <img src={markeThinkersImage} className={classes.markeThinkersImage} alt='markeThinkersImage' />
                </div>
                <div>
                <ul>
                    <li>
                        <a href="https://www.google.com/">expertise</a> 
                    </li>
                    <li>
                        <a href="https://www.google.com/">tools</a> 
                    </li>
                    <li>
                        <a href="https://www.google.com/">about us</a> 
                    </li>
                    <li>
                        <a href="https://www.google.com/">career</a> 
                    </li>
                    <li>
                        <a href="https://www.google.com/">blog</a> 
                    </li>
                    <li>
                        <a href="https://www.google.com/">FAQ</a> 
                    </li>
                    <li>
                        <button type="button" className={classes.contactButton}>contact</button>
                    </li>
                </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default MainBar;