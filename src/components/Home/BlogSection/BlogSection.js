import classes from './BlogSection.module.css';

import PinnedBlog from './PinnedBlog';
import ForwardArrow from '../../../assets/Group 34.svg';
import WhiteForwardArrow from '../../../assets/Group 34-white.svg';
import SliderBlogs from './SliderBlogs';
import SliderBlogControlArrow from './SliderBlogsControlArrow';
import BlogSectionLeftImg from '../../../assets/Path 16728.svg';
import BlogSectionRightImg from '../../../assets/Path 16727.svg';
import BlogCarousel from './BlogCarousel';

function BlogSection (props) {
    return (
    <div className='container-fluid'>
        <div className='row'>
        <img className={`img-fluid ${classes.BlogSectionLeftImg}`} src={BlogSectionLeftImg} alt='BlogSection_LeftImg' />
        {/* <img className={classes.BlogSectionRightImg} src={BlogSectionRightImg} alt='BlogSection_RightImg' /> */}
        <div className={classes.blogSectionBody}>
           <div className={`col-5 ${classes.blogPageBody}`}>
                <a href='www.google.com'>
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
                    <img src={WhiteForwardArrow} alt='WhiteForward_Arrow' />
                </a>
            </div>
            <div className={`col-2 ${classes.blogsBody}`}>
                <PinnedBlog />
                <a href='www.google.com' className={classes.howToGuide}>
                    <header>how to guide</header>
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                </a>
                <a href='www.google.com' className={classes.allCategories}>
                    <header>all categories</header>
                    <img src={ForwardArrow} alt='Forward_Arrow' />
                </a>
           </div>
           {/* <div className={classes.sliderBody}>
                <SliderBlogs />
           </div> */}
           <div className={`col-5 ${classes.blogCarouselbody}`}>
                <BlogCarousel />
           </div>
           {/* <div className={classes.sliderBodyControlArrow}>
                <SliderBlogControlArrow />
            </div> */}
        </div>
        </div>
    </div>
    );
}

export default BlogSection;