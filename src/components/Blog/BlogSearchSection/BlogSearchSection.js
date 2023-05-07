import classes from './BlogSearchSection.module.css';

import BlogSearchSectionMiddleBackImg from '../../../assets/Path 16768.svg';
import BlogSearchBar from './BlogSearchBar';

function BlogSearchSection() {
  return (
    <div className='container position-relative'>
        <img className={classes.blogSearchSectionMiddleBackImg} src={BlogSearchSectionMiddleBackImg} alt='BlogSearchSectionMiddleBack_Image' />
        <div className={classes.blogSearchSectionLink}>
                <a href='www.google.com'>
                    Homepage
                </a>
                <div className={classes.redDot}></div>
                <a href='www.google.com'>
                    Blog
                </a>
            </div>
        <div style={{zIndex: '3'}} className='d-flex flex-column position-relative'>
            <header className={classes.blogSearchSectionHeader}>
                blog
            </header>
            <header className={classes.blogSearchSectionHeaderSub}>
                Digital Marketing and SEO Blog
            </header>
            <BlogSearchBar />
        </div>
    </div>
  )
}

export default BlogSearchSection;