import BlogCard from '../BlogCard/BlogCard';
import classes from './BlogPanigation.module.css';

function BlogPanigation() {
  return (
    <div className='container'>
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