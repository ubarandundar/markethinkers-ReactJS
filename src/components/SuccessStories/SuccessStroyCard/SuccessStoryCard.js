import classes from './SuccessStoryCard.module.css';

import WhiteForwardArrow from '../../../assets/Group 34-white.svg';
import AvansasLogo from '../../../assets/avansas logo.svg';
import GeminilabLogo from '../../../assets/GeminiLab.svg';

function SuccessStoryCard({changeLogo, changeRate, changeBackgroundColor, changeDistance, changeColForCase, changeMarginForCase,changeDistanceForHover, changeWidth}) {
  return (
    <div style={changeWidth ? {width: '450px'} : {}} className={changeColForCase ? 'col-6' : 'col-4'}>
        <a href='www.google.com' className={classes.successStoryCardWrapper}>
            <div style={changeBackgroundColor ? {backgroundColor: '#0D1835'} : {} && changeMarginForCase ? {marginTop: '60px'} : {}} className={classes.successStoryCardBody}>
                <img style={changeDistance ? {marginBottom: '135px'} : {}} className={classes.successStoryCardArrow} src={WhiteForwardArrow} alt='WhiteForward_Arrow' />
                <img className={classes.successStoryCardAvansasLogo} src={changeLogo ? GeminilabLogo : AvansasLogo} alt='Avansas_Logo' />
                <div className='d-flex flex-row justify-content-center'>
                    <header className={classes.successStoryCardRate}>
                        <span className={classes.successStoryCardRateSub}>+</span>{changeRate ? '34' : '42'}<span className={classes.successStoryCardRateSub}>%</span>
                    </header>
                    <header className={classes.successStoryCardExplanation}>
                        revenue boost
                    </header>
                </div>
            </div>
        </a>
    </div>
  )
}

export default SuccessStoryCard;