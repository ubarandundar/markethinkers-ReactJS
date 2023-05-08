import { useState } from 'react';
import classes from './BlogDetailsCarouselCard.module.css';
import WhiteForwardArrow from '../../../assets/Group 34-white.svg';
import FikriSabitImg from '../../../assets/NoPath.png';

function BlogDetailsCarouselCard({changeBackground, changeMarginBottom}) {
    const [isVisible, setIsVisible] = useState(false);
    // const [changeMarginBottom, setChangeMarginBottom] = useState(false);
  
  return (
    <a href='www.google.com' className={classes.blogDetailsCarouselCardWrapper}>
        <div onMouseOver={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} className={changeBackground ? classes.blogDetailsCarouselCardBodyForBlogDetails : classes.blogDetailsCarouselCardBody}>
            <img style={isVisible ? {marginBottom: '40px'} : {}} className={classes.blogDetailsWhiteArrow} src={WhiteForwardArrow} alt='Forward_Arrow' />
            <header className={classes.blogDetailsCarouselCardHeader}>
                strategy
            </header>
            <div className={classes.blogDetailsCarouselCardExplanation}>
                2023 Guide for Digital Marketers:
                <br />
                Recommendations From Top Experts
            </div>
            {isVisible && <div className='d-flex flex-column'>
                <div className={classes.blogDetailsCarouselCardParag}>
                    To gather insights, we asked digital marketing professionals a lot of questions and asked them to answer 3 questions of their choice.
                </div>
                <div className={classes.blogDetailsCarouselCardProfileBody}>
                        <img className={classes.blogDetailsCarouselCardProfileImg} src={FikriSabitImg} alt='MultiBrandCarouselData_profilePicture' />
                        <div className='d-flex flex-column'>
                            <header className={classes.blogDetailsCarouselCardNameSurname}>Fikri Sabit
                            </header>
                            <header className={classes.blogDetailsCarouselCardProfileTitle}>Copywriter</header>
                        </div>
                </div>
            </div>}
        </div>
    </a>
  )
}

export default BlogDetailsCarouselCard;