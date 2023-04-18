import classes from './BlogSearchBar.module.css';

function BlogSearchBar() {
  return (
        <div className={classes.blogSearchSectionInputWrapper}>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <input className={classes.blogSearchSectionSearchInput} type="search" id="site-search" name="q" placeholder='You can search here...' />
                </div>
                <div className={`col-sm-6 d-flex justify-content-center`}>
                    <select className={classes.blogSearchSectionSelectOption} name="choice">
                        <option defaultValue="default">All Categories</option>
                        <option value="second">Category 1</option>
                        <option value="third">Category 1.1</option>
                        <option value="fourth">Category 2</option>
                        <option value="fifth">Category 3</option>
                        <option value="sixth">Category 4</option>
                        <option value="seventh">Category 5</option>
                        <option value="eighth">Category 6</option>
                    </select>
                </div>
        </div>
  )
}

export default BlogSearchBar;