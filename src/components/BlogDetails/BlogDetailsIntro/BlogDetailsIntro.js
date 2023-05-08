import classes from './BlogDetailsIntro.module.css';

import BlogDetailsIntroImage from '../../../assets/Mask Group 24.png';
import FikriSabitImg from '../../../assets/NoPath.png';
import BlogDetailsIntroBackImg from '../../../assets/Path 16844.svg';

function BlogDetailsIntro() {
  return (
    <div className='container position-relative'>
        <img className={`img-fluid ${classes.blogDetailsIntroBackImg}`} src={BlogDetailsIntroBackImg} alt='BlogDetailsIntroBackImg' />
        <div className={classes.blogDetailsIntroLink}>
                <a href='www.google.com'>
                    Blog
                </a>
                <div className={classes.redDot}></div>
                <a href='www.google.com'>
                    Digital Marketing and SEO Blog
                </a>
        </div>
        <div className='position-relative'>
            <header className={classes.BlogDetailsIntroHeader}>
                2023 Guide for Digital Marketers: Recommendations From Top Experts
            </header>
            <img className={classes.blogDetailsIntroImage} src={BlogDetailsIntroImage} alt='BlogDetailsIntroImage' />
            <div className={classes.blogDetailsIntroProfileArea}>
                <div className={classes.blogDetailsIntroProfileDate}>
                    13 Oct 2022
                </div>
                <div className={classes.blogDetailsIntroProfileBody}>
                        <img className={classes.blogProfileImg} src={FikriSabitImg} alt='MultiBrandCarouselData_profilePicture' />
                        <div className='d-flex flex-column'>
                            <header className={classes.blogCardBottomSideNameSurname}>Fikri Sabit
                            </header>
                            <header className={classes.blogCardBottomSidePorfileTtile}>Copywriter</header>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetailsIntro