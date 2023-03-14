import classes from './BlogSection.module.css';

import PinnedBlog from './PinnedBlog';
import ForwardArrow from '../../assets/Group 34.svg';
import SliderBlogs from './SliderBlogs';
import SliderBlogControlArrow from './SliderBlogsControlArrow';

function BlogSection (props) {
    return (
    <div className='container-fluid'>
        <div className={classes.blogSectionBody}>
           <div className={classes.blogPageBody}>
           <div>
                <header className={classes.blogPageHeader}>blog</header>
                <p className={classes.blogPageParagFirst}>
                somethink new,
                <br />
                from everything
                </p>
                <p className={classes.blogPageParagSecond}>
                Reduce Costs, Increase Efficiency
                <br />
                in a Secure Infrastructure!
                </p>
                <a href='www.google.com'>
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                </a>
                </div>
            </div>
            <div className={classes.blogsBody}>
                <PinnedBlog />
                <div className={classes.howToGuide}>
                    <header>how to guide</header>
                    <a href='www.google.com'>
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                </a>
                </div>
                <div className={classes.allCategories}>
                    <header>all categories</header>
                    <a href='www.google.com'>
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                </a>
                </div>
           </div>
           <div className={classes.sliderBody}>
                <SliderBlogs />
           </div>
           <div className={classes.sliderBodyControlArrow}>
                <SliderBlogControlArrow />
            </div>
        </div>
    </div>
    );
}

export default BlogSection;