import classes from './SliderBlogsExtra.module.css';

import WhiteForwardArrow from '../../../assets/Group 34-white.svg';
import { Fragment } from 'react';

function SliderBlogsExtra ({isSmallScreenOther}) {
    return (
        <Fragment>
            <a href='www.google.com' className={isSmallScreenOther ? classes.sliderBlogExtraBodyWrapperMobileOther : classes.sliderBlogExtraBodyWrapper}>
                <div className={classes.sliderBlogExtraSecondBody}>
                    <img src={WhiteForwardArrow} alt='Forward_Arrow' />
                    <header className={classes.sliderBlogsExtraHeaderBottom}>strategy</header>
                    <header className={classes.sliderBlogsExtraOtherHeader}>
                    Blog Content
                    <br />
                    Strategy for
                    <br />
                    E-Commerce
                    </header>
                </div>
            </a>
            <a href='www.google.com' className={classes.sliderBlogExtraBodyWrapper}>
                <div className={isSmallScreenOther ? classes.sliderBlogExtraFirstBodyForMobile : classes.sliderBlogExtraFirstBody}>
                    <img src={WhiteForwardArrow} alt='Forward_Arrow' />
                    <header className={classes.sliderBlogsExtraHeaderTop}>strategy</header>
                    <header className={classes.sliderBlogsExtraOtherHeader}>
                    search tips
                    <br />
                    for business
                    </header>
                </div>
            </a>
        </Fragment>
    );
}

export default SliderBlogsExtra;