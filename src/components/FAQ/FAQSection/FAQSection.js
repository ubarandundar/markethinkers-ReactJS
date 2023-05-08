import classes from './FAQSection.module.css';
import FAQSectionBackImg from '../../../assets/Path 16768-6.svg';

function FAQSection() {
  return (
    <div className={`container ${classes.FAQSectionWrapper}`}>
      <img className={`img-fluid ${classes.FAQSectionBackImg}`} src={FAQSectionBackImg} alt='FAQSectionBack_Image' />
      <div className={classes.FAQSectionLink}>
                <a href='www.google.com'>
                  Homepage
                </a>
                <div className={classes.redDot}></div>
                <a href='www.google.com'>
                  FAQ
                </a>
        </div>
      <div className='row position-relative'>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <header className={classes.FAQSectionHeader}>
            frequently asked question
          </header>
          <header className={classes.FAQSectionHeaderSub}>
            Lorem ipsum dolor sit amet consectetur?
          </header>
          <p className={classes.FAQSectionParag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </div>
  )
}

export default FAQSection;