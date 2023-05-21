import classes from './SuccessStoriesIntro.module.css';

import AvansasLogo from '../../../assets/avansas logo.png';
import AvansasIntroBackImg from '../../../assets/Path 18650.svg';

function SuccessStoriesIntro() {
  return (
    <div className='container'>
        <img className={`img-fluid ${classes.successStoriesIntroBackImg}`} src={AvansasIntroBackImg} alt='AvansasIntroBackImg' />
        <div className={classes.successStoriesIntroLink}>
          <a href='www.google.com'>
            Homepage
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Success Stories
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Avansas
          </a>
        </div>
        <div className='row position-relative'>
            <div className='col-sm-12 col-md-6 col-lg-6 order-2'>
                <header className={classes.successStoriesIntroHeader}>
                    Revenue increase by 42%
                </header>
                <span className={classes.successStoriesIntroParag}>
                    Avansas is successfully following the newest
                    <br />
                    ecommerce trends.
                </span>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 d-flex order-1 justify-content-center'>
                <img className={`img-fluid ${classes.SuccessStoriesIntroCompanyLogo}`} src={AvansasLogo} alt='AvansasLogo' />
            </div>
        </div>
        <div className={classes.successStoriesIntroBlueArea}>
            <div className={classes.successStoriesIntroRateBody}>
                <div className={classes.successStoriesIntroNumber}>
                    <span className={classes.successStoriesIntroNumberSub}>+</span>38<span className={classes.successStoriesIntroNumberSub}>%</span>
                </div>
                <div className={classes.successStoriesIntroExplanation}>
                    Average Order Value
                </div>
            </div>
            <div className={classes.successStoriesIntroRateBody}>
                <div className={classes.successStoriesIntroNumber}>
                    <span className={classes.successStoriesIntroNumberSub}>+</span>16<span className={classes.successStoriesIntroNumberSub}>%</span>
                </div>
                <div className={classes.successStoriesIntroExplanation}>
                    Conversion Rate
                </div>
            </div>
            <div className={classes.successStoriesIntroRateBody}>
                <div className={classes.successStoriesIntroNumber}>
                    <span className={classes.successStoriesIntroNumberSub}>+</span>42<span className={classes.successStoriesIntroNumberSub}>%</span>
                </div>
                <div className={classes.successStoriesIntroExplanation}>
                    Revenue Increase
                </div>
            </div>
            <div className={classes.successStoriesIntroWhiteArea}>
                <header>
                    Taken services
                </header>
                <ul>
                    <li>
                        Lorem ipsum dolor
                    </li>
                    <li>
                        Lorem ipsum dolor
                    </li>
                    <li>
                        Lorem ipsum dolor
                    </li>
                    <li>
                        Lorem ipsum dolor
                    </li>
                </ul>    
            </div>
        </div>
    </div>
  )
}

export default SuccessStoriesIntro;