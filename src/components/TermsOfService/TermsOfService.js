import classes from './TermsOfService.module.css';
import TermsOfServiceBackImg from '../../assets/Path 16768.svg';

function TermsOfService() {
  return (
    <div className='container'>
        <img className={classes.termsOfServiceBackImg} src={TermsOfServiceBackImg} 
        alt='TermsOfServiceBack_Image' />
          <div className={classes.termsOfServiceLink}>
          <a href='www.google.com'>
            Homepage
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Terms of Service
          </a>
        </div>
        <div className='row'>
        <div className='d-sm-none d-md-block col-md-2 col-lg-2'></div>
        <div className={`col-sm-12 col-md-8 col-lg-8 ${classes.termsOfServiceBody}`}>
        <header className={classes.termsOfServiceHeader}>
            Terms of Service
        </header>
        <header className={classes.termsOfServiceHeaderSub}>
            You can now prepare your texts
            <br />
            professionally!
        </header>
        <div className='d-flex flex-row justify-content-center'>
            <span className={classes.termsOfServiceDateOfUpdate}>
                Date of Update :
            </span>
            <span className={classes.termsOfServiceDate}>
                15.04.2021
            </span>
        </div>
        <header className={classes.termsOfServiceExpHeader}>
            lorem ipsum dolor
        </header>
        <span className={classes.termsOfServiceParag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <span className={classes.termsOfServiceParag}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
        </span>
        <span className={classes.termsOfServiceParag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   
        </span>
        <span className={classes.termsOfServiceParag}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <span className={classes.termsOfServiceParag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
        <span className={classes.termsOfServiceParagLast}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <header className={classes.termsOfServiceExpHeaderOther}>
            lorem ipsum dolor
        </header>
        <span className={classes.termsOfServiceParagOther}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </span>
        <span className={classes.termsOfServiceParagOther}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
        </span>
        <span className={classes.termsOfServiceParagOther}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   
        </span>
        </div>
        <div className='d-sm-none d-md-block col-md-2 col-lg-2'></div>
        </div>
    </div>
  )
}

export default TermsOfService;