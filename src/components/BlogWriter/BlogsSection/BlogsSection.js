import BlogSearchBar from '../../Blog/BlogSearchSection/BlogSearchBar';
import BlogCard from '../../Blog/BlogCard/BlogCard';
import classes from './BlogsSection.module.css';

function BlogsSection() {
  return (
    <div className={`container ${classes.blogsSectionBody}`}>
        <header className={classes.blogsSectionHeader}>
            Blogs
        </header>
        <BlogSearchBar />
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

export default BlogsSection;