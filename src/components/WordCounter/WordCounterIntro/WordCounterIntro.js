import classes from './WordCounterIntro.module.css';

import WordCounterIntroBackImg from '../../../assets/Path 16768-2.png';

function WordCounterIntro() {
  return (
    <div className='position-relative'>
       <img className={`img-fluid ${classes.wordCounterIntroBackImg}`} src={WordCounterIntroBackImg} alt='WordCounterIntroBackImg' />
        <div className={classes.wordCounterIntroLink}>
          <a href='www.google.com'>
            Homepage
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Tools
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Word Counter
          </a>
        </div>
        <div className='position-relative'>
          <header className={classes.wordCounterHeader}>
            Word Counter
          </header>
          <header className={classes.wordCounterHeaderSub}>
            You can now prepare your texts
            <br /><span> </span>
            professionally!
          </header>
        </div>
    </div>
  )
}

export default WordCounterIntro;