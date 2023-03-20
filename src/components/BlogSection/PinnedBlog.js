import classes from './PinnedBlog.module.css';

import ForwardArrow from '../../assets/Group 34.svg';
import { Fragment } from 'react';

function PinnedBlog (props) {
    return (
        <Fragment>
        <a href='www.google.com' className={classes.pinnedBlogBody}>
            
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                
           <header className={classes.pinnedBlogHeader}>strategy</header>
           <header className={classes.pinnedBlogOtherHeader}>Google’s December 2020 Core Update</header>
           <p className={classes.pinnedBlogParag}>We have collected the key points from the Digitalzone’20 presentations of our precious speakers on SEO, PPC, and Content Marketing for you.</p>
        </a>
        </Fragment>
    );
}

export default PinnedBlog;