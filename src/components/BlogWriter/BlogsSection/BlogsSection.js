import BlogSearchBar from '../../Blog/BlogSearchSection/BlogSearchBar';
import BlogCard from '../../Blog/BlogCard/BlogCard';
import classes from './BlogsSection.module.css';
import BlogPagination from '../../Blog/BlogPagination/BlogPagination';

function BlogsSection() {
  return (
    <div className={`container ${classes.blogsSectionBody}`}>
        <header className={classes.blogsSectionHeader}>
            Blogs
        </header>
        <BlogSearchBar />
        <BlogPagination changesForBlogWriter={true} />
    </div>
  )
}

export default BlogsSection;