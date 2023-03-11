import classes from './SliderBlogs.module.css';

import ForwardArrow from '../../assets/Group 34.svg';

function SliderBlogs (props) {
    return (
        <div>
            <div className={classes.sliderBlogFirstBody}>
                <a className={classes.sliderBlogsArrow} href='www.google.com'>
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                </a>
            <header className={classes.sliderBlogsHeaderTop}>strategy</header>
            <header className={classes.sliderBlogsOtherHeader}>
            search tips
            <br />
            for business
            </header>
            </div>
            <div className={classes.sliderBlogSecondBody}>
            <a className={classes.sliderBlogsArrow} href='www.google.com'>
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                </a>
           <header className={classes.sliderBlogsHeaderBottom}>strategy</header>
           <header className={classes.sliderBlogsOtherHeader}>
            Blog Content
            <br />
            Strategy for
            <br />
            E-Commerce
            </header>
            </div>
        </div>
    );
}

export default SliderBlogs;