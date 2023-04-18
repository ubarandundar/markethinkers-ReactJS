import classes from './BlogSearchSection.module.css';

import BlogSearchSectionMiddleBackImg from '../../../assets/Path 16768.svg';
import BlogSearchBar from './BlogSearchBar';

function BlogSearchSection() {
  return (
    <div className='container'>
        <img className={classes.blogSearchSectionMiddleBackImg} src={BlogSearchSectionMiddleBackImg} alt='BlogSearchSectionMiddleBack_Image' />
        <div className='d-flex flex-column position-relative'>
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