import Lottie from 'react-lottie-player'
import ErrorJSON from  './404-edited.json';
import classes from './ErrorPage.module.css';

function ErrorPage() {

  return (
    <div className='container position-relative'>
      <div className={classes.errorPageOops}>
        Oops...
      </div>
      <div className={classes.errorPage404}>
        404
      </div>
      <div className={classes.errorPageLottie}>
        <Lottie animationData={ErrorJSON} speed="1" style={{width: '638px', height: '387px', background: "transparent"}} loop play />
      </div>
      <div className={classes.errorPageHeader}>
        I think we got too high,how about going back?
      </div>
      <div className={classes.errorPageHeaderSub}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br />
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <button className={classes.errorPageButton} type='button'>
        Back to Home
      </button>
    </div>
  )
}

export default ErrorPage;