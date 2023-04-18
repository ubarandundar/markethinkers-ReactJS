import classes from './SuccessStoryCard.module.css';

import WhiteForwardArrow from '../../../assets/Group 34-white.svg';

function SuccessStoryCard() {
  return (
    <div className='col-4'>
        <a href='www.google.com' className={classes.successStoryCardWrapper}>
            <div className={classes.successStoryCardBody}>
                <img className={classes.successStoryCardArrow} src={WhiteForwardArrow} alt='WhiteForward_Arrow' />
                <img />
                <div className='d-flex flex-row'>
                    <header>
                        +42%
                    </header>
                    <header>
                        revenue boost
                    </header>
                </div>
            </div>
        </a>
    </div>
  )
}

export default SuccessStoryCard;