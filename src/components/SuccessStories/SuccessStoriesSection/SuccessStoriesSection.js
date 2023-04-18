import SuccessStoriesDragBar from '../SuccessStoriesDragBar/SuccessStoriesDragBar';
import classes from './SuccessStoriesSection.module.css';

import TermsOfServiceBackImg from '../../../assets/Path 16768.svg';

function SuccessStoriesSection() {
  return (
    <div className='container'>
        <img className={classes.termsOfServiceBackImg} src={TermsOfServiceBackImg} alt='TermsOfServiceBack_Image' />
        <div className='position-relative'>
            <header className={classes.successStoriesSectionHeader}>
                success stories
            </header>
            <header className={classes.successStoriesSectionHeaderSub}>
                Let's check how our stories
                <br />
                sometimes looks like
            </header>
        </div>
    </div>
  )
}

export default SuccessStoriesSection;