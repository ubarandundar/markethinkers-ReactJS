import classes from './SliderBlogs.module.css';

import WhiteForwardArrow from '../../../assets/Group 34-white.svg';
import { Fragment } from 'react';

function SliderBlogs ({isSmallScreen}) {
    return (
        <Fragment>
            <a href='www.google.com' className={isSmallScreen ? classes.sliderBlogBodyWrapperForMobile : classes.sliderBlogBodyWrapper}>
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
                <div className={isSmallScreen ? classes.sliderBlogSecondBodyForMobile : classes.sliderBlogSecondBody}>
                    <img src={WhiteForwardArrow} alt='Forward_Arrow' />
                    <header className={isSmallScreen ? classes.sliderBlogsHeaderBottomForMobile : classes.sliderBlogsHeaderBottom}>strategy</header>
                    <header className={isSmallScreen ? classes.sliderBlogsOtherHeaderForMobile : classes.sliderBlogsOtherHeader}>
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