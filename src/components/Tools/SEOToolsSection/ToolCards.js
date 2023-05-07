import { ReactSVG } from "react-svg";
import classes from './ToolCards.module.css';

import ForwardArrow from '../../../assets/Group 34.svg';
import SEOToolSectionCardJSONImage from '../../../assets/faq.png';
import SEOToolSectionCardCounterImage from '../../../assets/counter.png';
import SEOToolSectionCardPreviewImage from '../../../assets/pagerank.png';
import SEOToolCardsBackImg from '../../../assets/Path 16762-2.png';

function ToolCards() {
  return (
    <div className={`row ${classes.SEOToolsSectionCardWrapper}`}>
        <img className={classes.SEOToolCardsBackImg} src={SEOToolCardsBackImg} alt='SEOToolCardsBackImg' />
        <div className='col-sm-4'>
            <div className={classes.SEOToolsSectionCard}>
                <a href='www.google.com' className={classes.SEOToolsSectionCardWrapper}>
                    <div className={classes.SEOToolsSectionCardBody}>
                        <ReactSVG className={classes.SEOToolsSectionCardArrowImage} src={ForwardArrow} alt='Forward_Arrow' />
                        <img className={`img-fluid ${classes.SEOToolsSectionCardJSONImage}`} src={SEOToolSectionCardJSONImage} alt='SEOToolsSectionCardJSON_Image' />
                        <header className={classes.SEOToolsSectionCardHeader}>
                            JSON-LD FAQ Schema Generator
                        </header>
                        <span className={classes.SEOToolsSectionCardParag}>
                            JavaScript Object Notation (JSON code) is a commonly used text format that can help servers and search engines better communicate with one another.
                        </span>
                    </div>
                </a>
            </div>
        </div>
        <div className='col-sm-4'>
            <div className={classes.SEOToolsSectionCard}>
                <a href='www.google.com' className={classes.SEOToolsSectionCardWrapper}>
                    <div className={classes.SEOToolsSectionCardBody}>
                        <ReactSVG className={classes.SEOToolsSectionCardArrowImage} src={ForwardArrow} alt='Forward_Arrow' />
                        <img className={`img-fluid ${classes.SEOToolsSectionCardCounterImage}`} src={SEOToolSectionCardCounterImage} alt='SEOToolsSectionCardCounter_Image' />
                        <header className={classes.SEOToolsSectionCardHeader}>
                            Word Counter
                        </header>
                        <span className={classes.SEOToolsSectionCardParag}>
                            Using specific keywords and ensuring that you are aware of how many times they appear within a body of work is an important part of ensuring that your SEO strategy is put to good use.
                        </span>
                    </div>
                </a>
            </div>
        </div>
        <div className='col-sm-4'>
            <div className={classes.SEOToolsSectionCard}>
                <a href='www.google.com' className={classes.SEOToolsSectionCardWrapper}>
                    <div className={classes.SEOToolsSectionCardBody}>
                        <ReactSVG className={classes.SEOToolsSectionCardArrowImage} src={ForwardArrow} alt='Forward_Arrow' />
                        <img className={`img-fluid ${classes.SEOToolsSectionCardPreviewImage}`} src={SEOToolSectionCardPreviewImage} alt='SEOToolsSectionCardPreview_Image' />
                        <header className={classes.SEOToolsSectionCardHeader}>
                            SERP Preview Tool
                        </header>
                        <span className={classes.SEOToolsSectionCardParag}>
                            How your content appears on search engine results pages can impact the amount of organic traffic that is streamed to your website, there is little point in optimising your content so that it appears on the top of results pages, only to have it overlooked by users.
                        </span>
                    </div>
                </a>
            </div>
        </div>
      </div>
  )
}

export default ToolCards;