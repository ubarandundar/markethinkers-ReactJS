import classes from './JsonLdIntro.module.css';

import JsonLdIntroBackImg from '../../../assets/Path 16768-2.png';

function JsonLdIntro() {
  return (
    <div className='position-relative'>
      <img className={`img-fluid ${classes.jsonLdIntroBackImg}`} src={JsonLdIntroBackImg} alt='JsonLdIntroBackImg' />
      <div className={classes.JsonLdIntroLink}>
          <a href='www.google.com'>
            Homepage
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Tools
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            JSON-LD FAQ Schema Oluşturucu
          </a>
      </div>
      <div className='position-relative'>
        <header className={classes.jsonLdIntroHeader}>
            json-ld FAQ schema generator
        </header>
        <header className={classes.jsonLdIntroHeaderSub}>
            You can easily prepare questions and
            <br />
            answers.
        </header>
      </div>
    </div>
  )
}
export default JsonLdIntro;