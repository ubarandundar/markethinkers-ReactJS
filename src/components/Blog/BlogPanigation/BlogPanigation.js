import BlogCard from '../BlogCard/BlogCard';
import classes from './BlogPanigation.module.css';

import BlogPanigationLeftFirstImg from '../../../assets/Path 16762-2.svg';
import BlogPanigationRightImg from '../../../assets/Path 16763-2.svg';
import BlogPanigationLeftSecondImg from '../../../assets/Path 16725-5.svg';

function BlogPanigation({changesForBlogWriter}) {
  return (
    <div className='container'>
        <img style={changesForBlogWriter ? {marginTop: '-31%'} : {}} className={classes.blogPanigationLeftFirstImg} src={BlogPanigationLeftFirstImg} alt='BlogPanigationLeftFirstImg' />
        <img style={changesForBlogWriter ? {marginTop: '15%'} : {}} className={classes.blogPanigationRightImg} src={BlogPanigationRightImg} alt='BlogPanigationRightImg' />
        <img style={changesForBlogWriter ? {marginTop: '60%'} : {}} className={classes.blogPanigationLeftSecondImg} src={BlogPanigationLeftSecondImg} alt='BlogPanigationLeftSecondImg' />
        <div className='row ps-5 pe-5'>
            <BlogCard />
            <BlogCard changeBackgroundColor={true} />
        </div>
        <div className='row ps-5 pe-5'>
            <BlogCard changeBackgroundColor={true} />
            <BlogCard />
        </div>
        <div className='row ps-5 pe-5 pb-5'>
            <BlogCard />
            <BlogCard changeBackgroundColor={true} />
        </div>
    </div>
  )
}

export default BlogPanigation;