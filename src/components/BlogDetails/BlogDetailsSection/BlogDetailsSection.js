import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import SocialMediaItems from '../../Home/Footer/SocialMediaItems';
import SuccessStoriesTableOfContents from '../../SuccessStroiesDetails/SuccessStoriesOtherSections/SuccessStoriesTableOfContents/SuccessStoriesTableOfContents';
import BlogDetailsContent from './BlogDetailsContent/BlogDetailsContent';
import classes from './BlogDetailsSection.module.css';

function BlogDetailsSection () {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='d-sm-none d-md-block col-md-4 col-lg-4'>
                <div style={{position: 'sticky', top: '18%', marginTop: '-125px', zIndex: '3'}}>
                    <SuccessStoriesTableOfContents changesForBlogDetail={true} />
                </div>
            </div>
            <div className={`col-sm-12 col-md-6 col-md-6 ${classes.BlogDetailsContentWrapper}`}>
                <BlogDetailsContent />
            </div>
            <div style={{zIndex: '3'}} className='d-sm-none d-md-block col-md-2 col-lg-2'>
                <div className={classes.successStoriesOtherSectionsSocialWrapper}>
                    <SocialMediaItems changesForSuccessStories={true} changeFacebookBackground={true} changesforBlogDetails={true} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetailsSection;