import classes from './SuccessStoriesOtherSections.module.css';
import SocialMediaItems from '../../Home/Footer/SocialMediaItems';
import SuccessStoriesContent from './SuccessStoriesContent/SuccessStoriesContent';
import SuccessStoriesTableOfContents from './SuccessStoriesTableOfContents/SuccessStoriesTableOfContents';

function SuccessStoriesOtherSections() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'>
                <div style={{position: 'sticky', top: '18%'}}>
                    <SuccessStoriesTableOfContents />
                </div>
            </div>
            <div className='col-6' style={{paddingLeft: '50px'}}>
                <SuccessStoriesContent />
            </div>
            <div className='col-2'>
                <div className={classes.successStoriesOtherSectionsSocialWrapper}>
                    <SocialMediaItems changeBorderColor={true} changeFaceColor={true} changeFaceSize={true} changeMarginLeft={true} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessStoriesOtherSections;