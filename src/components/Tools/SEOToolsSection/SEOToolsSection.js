import { useState } from 'react';
import classes from './SEOToolsSection.module.css';

import SEOToolsSectionImg from '../../../assets/technical_seo.png';
import SEOToolsSectionBackLeftImg from '../../../assets/Path 36614.png';
import SEOToolsSectionBackRightImg from '../../../assets/Path 16728.png';
import ToolCards from './ToolCards';

function SEOToolsSection() {
    const [isVisible, setIsVisible] = useState(false);
    
    const listOfToolsShowHandler = () => {
        setIsVisible(true);
    }

  return (
    <div className={`container ${classes.SEOToolsSectionWrapper}`}>
        <img className={classes.SEOToolsSectionBackLeftImg} src={SEOToolsSectionBackLeftImg} alt='SEOToolsSectionBackLeft_Image' />
        <img className={classes.SEOToolsSectionBackRightImg} src={SEOToolsSectionBackRightImg} alt='SEOToolsSectionBackRight_Image' />
        <div className={classes.SEOToolsSectionLink}>
          <a href='www.google.com'>
            Homepage
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Tools
          </a>
        </div>
      <div className={`row ${classes.SEOToolsSectioBody}`}>
        <div className='col-sm-6 d-flex flex-column justify-content-center '>
            <header className={classes.SEOToolsSectionHeader}>
              seo tools
            </header >
            <header className={classes.SEOToolsSectionHeaderSub}>
              SEO Tools for Professionals
            </header>
            <span className={classes.SEOToolsSectionParag}>
              Tools aim to make the consultant's life easier. We're open-sourcing some of tools to help the community by giving back. Please let us know about your daily challenges, then our community team might create a new tool to make it happen.
            </span>
            <button onClick={listOfToolsShowHandler} type='button' className={classes.SEOToolsSectionButton}>
              List of Tools
            </button>
        </div>
        <div className='col-sm-6'>
          <img src={SEOToolsSectionImg} className='img-fluid' />
        </div>
      </div>
      {isVisible && <ToolCards />}
    </div>
  )
}

export default SEOToolsSection;