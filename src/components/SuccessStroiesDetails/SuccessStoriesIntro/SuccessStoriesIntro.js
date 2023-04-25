import classes from './SuccessStoriesIntro.module.css';

import AvansasLogo from '../../../assets/avansas logo.png';

function SuccessStoriesIntro() {
  return (
    <div className='container'>
        <div style={{marginTop: '330px'}} className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>
                <header className={classes.successStoriesIntroHeader}>
                    Revenue increase by 42%
                </header>
                <span className={classes.successStoriesIntroParag}>
                    Avansas is successfully following the newest
                    <br />
                    ecommerce trends.
                </span>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center'>
                <img className='img-fluid' src={AvansasLogo} alt='AvansasLogo' />
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