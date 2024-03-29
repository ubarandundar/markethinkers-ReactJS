import classes from './SuccessStoriesOtherSections.module.css';
import SocialMediaItems from '../../Home/Footer/SocialMediaItems';
import SuccessStoriesContent from './SuccessStoriesContent/SuccessStoriesContent';
import SuccessStoriesTableOfContents from './SuccessStoriesTableOfContents/SuccessStoriesTableOfContents';

function SuccessStoriesOtherSections() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'>
                <div style={{position: 'sticky', top: '18%', zIndex: '2'}}>
                    <SuccessStoriesTableOfContents />
                </div>
            </div>
            <div className={`col-sm-12 col-md-6 col-lg-6 ${classes.successStoriesContentWrapper}`}>
                <SuccessStoriesContent />
            </div>
            <div className='col-2'>
                <div className={classes.successStoriesOtherSectionsSocialWrapper}>
                    <SocialMediaItems changesForSuccessStories={true} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessStoriesOtherSections;