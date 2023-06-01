import { ReactSVG } from "react-svg";
import classes from './BlogCard.module.css';

import FikriSabitImg from '../../../assets/NoPath.png';
import ForwardArrow from '../../../assets/Group 34.svg';

function BlogCard({changeBackgroundColor}) {
  return (
    <div className='col-sm-12 col-md-6 col-lg-6'>
        <a href='www.google.com' className={`container ${classes.blogCardWrapper}`}>
        <div className='position-relative'>
            <header className={classes.blogCardTopSideHeader}>
                Lorem ipsum dolor
            </header>
            <div style={changeBackgroundColor ? {backgroundColor: '#0D1835CC'} : {}} className={classes.blogCardTopSide}>
            </div>
            <div className={classes.blogCardBottomSide}>
                <div className="d-flex flex-row justify-content-between">
                    <header className={classes.blogCardBottomSideHeader}>
                        2023 Guide for Digital Marketers: Recommendations From Top Experts
                    </header>
                    <ReactSVG className={classes.blogCardBottomSideForwardArrow} src={ForwardArrow} />
                </div>
                <header className={classes.blogCardBottomSideHeaderSub}>
                    To gather insights, we asked digital marketing professionals a lot of questions and asked them to answer 3 questions of their choice.
                </header>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <div className='d-flex flex-row align-items-center'>
                        <img className={classes.blogProfileImg} src={FikriSabitImg} alt='MultiBrandCarouselData_profilePicture' />
                        <div className='d-flex flex-column'>
                            <header className={classes.blogCardBottomSideNameSurname}>Fikri Sabit
                            </header>
                            <header className={classes.blogCardBottomSidePorfileTtile}>Copywriter</header>
                        </div>
                    </div>
                    <div className={classes.blogCardBottomSideDate}>
                        02.02.2023
                    </div>
                </div>
            </div>
        </div>
        </a>
    </div>
  )
}

export default BlogCard;