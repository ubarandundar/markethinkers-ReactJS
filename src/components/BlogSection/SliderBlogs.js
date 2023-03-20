import classes from './SliderBlogs.module.css';

import WhiteForwardArrow from '../../assets/Group 34-white.svg';
import { Fragment } from 'react';

function SliderBlogs (props) {
    return (
        <Fragment>
            <a href='www.google.com' className={classes.sliderBlogBodyWrapper}>
                <div className={classes.sliderBlogFirstBody}>
                    <img src={WhiteForwardArrow} alt='Forward_Arrow' />
                    <header className={classes.sliderBlogsHeaderTop}>strategy</header>
                    <header className={classes.sliderBlogsOtherHeader}>
                    search tips
                    <br />
                    for business
                    </header>
                </div>
            </a>
            <a href='www.google.com' className={classes.sliderBlogBodyWrapper}>
                <div className={classes.sliderBlogSecondBody}>
                    <img src={WhiteForwardArrow} alt='Forward_Arrow' />
                    <header className={classes.sliderBlogsHeaderBottom}>strategy</header>
                    <header className={classes.sliderBlogsOtherHeader}>
                    Blog Content
                    <br />
                    Strategy for
                    <br />
                    E-Commerce
                    </header>
                </div>
            </a>
        </Fragment>
    );
}

export default SliderBlogs;