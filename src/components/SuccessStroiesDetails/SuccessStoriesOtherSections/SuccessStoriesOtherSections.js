import SocialMediaItems from '../../Home/Footer/SocialMediaItems';
import SuccessStoriesContent from './SuccessStoriesContent/SuccessStoriesContent';
import SuccessStoriesTableOfContents from './SuccessStoriesTableOfContents/SuccessStoriesTableOfContents';

function SuccessStoriesOtherSections() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-3'>
                <SuccessStoriesTableOfContents />
            </div>
            <div className='col-7'>
                <SuccessStoriesContent />
            </div>
            <div className='col-2'>
                <SocialMediaItems />
            </div>
        </div>
    </div>
  )
}

export default SuccessStoriesOtherSections;