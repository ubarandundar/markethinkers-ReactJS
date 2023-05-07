import BlogSearchBar from '../../Blog/BlogSearchSection/BlogSearchBar';
import BlogCard from '../../Blog/BlogCard/BlogCard';
import classes from './BlogsSection.module.css';
import BlogPanigation from '../../Blog/BlogPanigation/BlogPanigation';

function BlogsSection() {
  return (
    <div className={`container ${classes.blogsSectionBody}`}>
        <header className={classes.blogsSectionHeader}>
            Blogs
        </header>
        <BlogSearchBar />
        <BlogPanigation changesForBlogWriter={true} />
    </div>
  )
}

export default BlogsSection;