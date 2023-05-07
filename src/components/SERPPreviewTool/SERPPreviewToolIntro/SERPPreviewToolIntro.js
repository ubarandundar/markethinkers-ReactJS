import classes from './SERPPreviewToolIntro.module.css';

import SERPPreviewToolIntroBackImg from '../../../assets/Path 16768-2.png';

function SERPPreviewToolIntro() {
  return (
    <div className='position-relative'>
        <img className={`img-fluid ${classes.SERPPreviewToolIntroBackImg}`} src={SERPPreviewToolIntroBackImg} alt='SERPPreviewToolIntroBackImg' />
        <div className={classes.SERPPreviewToolIntroLink}>
          <a href='www.google.com'>
            Homepage
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Tools
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            SERP Preview Aracı
          </a>
        </div>
        <div className='position-relative'>
          <header className={classes.SERPPreviewToolIntroHeader}>
              SERP Preview Tool
          </header>
          <header className={classes.SERPPreviewToolIntroHeaderSub}>
            You can now prepare your texts
            <br />
            professionally!
          </header>
        </div>
    </div> 
  )
}

export default SERPPreviewToolIntro;