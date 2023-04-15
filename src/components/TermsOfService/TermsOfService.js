import classes from './TermsOfService.module.css';
import TermsOfServiceBackImg from '../../assets/Path 16768.svg';

function TermsOfService() {
  return (
    <div className='container'>
        <img className={classes.termsOfServiceBackImg} src={TermsOfServiceBackImg} alt='TermsOfServiceBack_Image' />
        <div className='row'>
        <div className='col-2'></div>
        <div className={`col-8 ${classes.termsOfServiceBody}`}>
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
        <span className={classes.termsOfServiceParag}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
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
        </div>
        <div className='col-2'></div>
        </div>
    </div>
  )
}

export default TermsOfService;