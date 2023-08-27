import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import BlogCard from '../BlogCard/BlogCard';
import classes from './BlogPagination.module.css';
import './BlogPagination.css';

import BlogPanigationLeftFirstImg from '../../../assets/Path 16762-2.svg';
import BlogPanigationRightImg from '../../../assets/Path 16763-2.svg';
import BlogPanigationLeftSecondImg from '../../../assets/Path 16725-5.svg';

function BlogPagination ({changesForBlogWriter}) {
  const [currentPage, setCurrentPage] = useState(0);

  const renderPage = (pageNumber) => {
    const startIndex = pageNumber * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    if (pageNumber === 0) {
      return (
        <div className='container'>
        <img style={changesForBlogWriter ? {marginTop: '-31%'} : {}} className={classes.blogPanigationLeftFirstImg} src={BlogPanigationLeftFirstImg} alt='BlogPanigationLeftFirstImg' />
        <img style={changesForBlogWriter ? {marginTop: '15%'} : {}} className={classes.blogPanigationRightImg} src={BlogPanigationRightImg} alt='BlogPanigationRightImg' />
        <img style={changesForBlogWriter ? {marginTop: '60%'} : {}} className={classes.blogPanigationLeftSecondImg} src={BlogPanigationLeftSecondImg} alt='BlogPanigationLeftSecondImg' />
        <div className={`row ps-5 pe-5 ${classes.BlogPaginationGroup}`}>
            <BlogCard />
            <BlogCard changeBackgroundColor={true} />
        </div>
        <div className={`row ps-5 pe-5 ${classes.BlogPaginationGroup}`}>
            <BlogCard changeBackgroundColor={true} />
            <BlogCard />
        </div>
        <div className={`row ps-5 pe-5 ${classes.BlogPaginationGroup}`}>
            <BlogCard />
            <BlogCard changeBackgroundColor={true} />
        </div>
    </div>
      );
    } else if (pageNumber === 1) {
      return (
        <div className='container'>
        <img style={changesForBlogWriter ? {marginTop: '-31%'} : {}} className={classes.blogPanigationLeftFirstImg} src={BlogPanigationLeftFirstImg} alt='BlogPanigationLeftFirstImg' />
        <img style={changesForBlogWriter ? {marginTop: '15%'} : {}} className={classes.blogPanigationRightImg} src={BlogPanigationRightImg} alt='BlogPanigationRightImg' />
        <img style={changesForBlogWriter ? {marginTop: '60%'} : {}} className={classes.blogPanigationLeftSecondImg} src={BlogPanigationLeftSecondImg} alt='BlogPanigationLeftSecondImg' />
        <div className='row ps-5 pe-5'>
            <BlogCard changeBackgroundColor={true} />
            <BlogCard  />
        </div>
        <div className='row ps-5 pe-5'>
            <BlogCard  />
            <BlogCard changeBackgroundColor={true} />
        </div>
        <div className='row ps-5 pe-5'>
            <BlogCard changeBackgroundColor={true} />
            <BlogCard  />
        </div>
    </div>
      );
    }
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const imagesPerPage = 2;

  return (
    <div className="pagination-container">
      {renderPage(currentPage)}
      <ReactPaginate
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={5}
        // previousLabel={<span className='prev-arrow'><img src='../../../assets/Union 6.png' alt='pagination-arrow' className='x' /></span>}
        pageClassName="pagination-numbers-circle"
        pageLinkClassName="pagination-numbers"
        previousClassName="pagination-prev-arrow-circle"
        previousLinkClassName=""
        nextClassName="pagination-next-arrow-circle"
        nextLinkClassName=""
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName=""
        containerClassName="pagination"
        activeClassName="pagination-numbers-circle-active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default BlogPagination;