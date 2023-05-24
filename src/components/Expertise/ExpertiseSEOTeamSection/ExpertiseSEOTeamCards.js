import { useState } from 'react';
import { ReactSVG } from "react-svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './ExpertiseSEOTeamCards.module.css';

import ExpertiseSEOTeamCardsAnalizPlanlamaImage from '../../../assets/Group 41642.png';
import ExpertiseSEOTeamCardsYolHaritasiImage from '../../../assets/Group 41638.png';
import ExpertiseSEOTeamCardsSEOPerfImage from '../../../assets/Group 41630.png';
import ExpertiseSEOTeamCardsAnalizOptImage from '../../../assets/Group 41634.png';
import WhiteForwardArrow from '../../../assets/Group 34-white.svg';

const responsive = {
  desktopXXL: {
    breakpoint: { max: 3000, min: 1700 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 120
  },
  desktopXL: {
      breakpoint: { max: 1700, min: 1300 },
      items: 3,
      slidesToSlide: 1,// optional, default to 1.
      partialVisibilityGutter: 100
    },
  tablet: {
    breakpoint: { max: 1300, min: 768 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 100
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 100
  }
};

function ExpertiseSEOTeamCards() {
    const [currentIndex, setCurrentIndex] = useState();

    const contentHandler = (currentIndex) => {
        setCurrentIndex(currentIndex);
    };


  return (
    <div className={`container-fluid ${classes.expertiseMultiBrandWrapper}`}>
        <div className={classes.expertiseMultiBrandBody}>
        <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        centerMode={false}
        partialVisible={true}
        >
        <div onClick={() => contentHandler(0)} className={classes.expertiseSEOTeamCardsBody}>
            <img className={`img-fluid ${classes.expertiseSEOTeamCardsHeadImages}`} src={ExpertiseSEOTeamCardsAnalizPlanlamaImage} alt='ExpertiseSEOTeamCardsAnalizPlanlama_Image' />
            <header className={classes.expertiseSEOTeamCardsHeader}>
                Ön Analiz
                <br />
                ve Planlama
            </header>
            <ReactSVG className={`img-fluid ${classes.expertiseSEOTeamCardsWhiteArrow}`} src={WhiteForwardArrow} alt='WhiteForwardArrow' />
        </div>
        <div className={classes.expertiseSEOTeamCardsBody}>
            <img className={`img-fluid ${classes.expertiseSEOTeamCardsHeadImages}`} src={ExpertiseSEOTeamCardsYolHaritasiImage} alt='ExpertiseSEOTeamCardsAnalizPlanlama_Image' />
            <header className={classes.expertiseSEOTeamCardsHeaderOther}>
                Yol Haritası,
                <br />
                Önceliklendirme 
                <br />
                ve SEO Operasyonu
            </header>
            <ReactSVG className={`img-fluid ${classes.expertiseSEOTeamCardsWhiteArrow}`} src={WhiteForwardArrow} alt='WhiteForwardArrow' />
        </div>
        <div className={classes.expertiseSEOTeamCardsBody}>
            <img className={`img-fluid ${classes.expertiseSEOTeamCardsHeadImages}`} src={ExpertiseSEOTeamCardsSEOPerfImage} alt='ExpertiseSEOTeamCardsAnalizPlanlama_Image' />
            <header className={classes.expertiseSEOTeamCardsHeader}>
                SEO Performansını 
                <br />
                Ölçümleme
            </header>
            <ReactSVG className={`img-fluid ${classes.expertiseSEOTeamCardsWhiteArrow}`} src={WhiteForwardArrow} alt='WhiteForwardArrow' />
        </div>
        <div className={classes.expertiseSEOTeamCardsBody}>
            <img className={`img-fluid ${classes.expertiseSEOTeamCardsHeadImages}`} src={ExpertiseSEOTeamCardsAnalizOptImage} alt='ExpertiseSEOTeamCardsAnalizPlanlama_Image' />
            <header className={classes.expertiseSEOTeamCardsHeader}>
                Analiz ve Yeniden
                <br />
                Optimizasyon
            </header>
            <ReactSVG className={`img-fluid ${classes.expertiseSEOTeamCardsWhiteArrow}`} src={WhiteForwardArrow} alt='WhiteForwardArrow' />
        </div>
    </Carousel>
</div>
</div>
  )
}

export default ExpertiseSEOTeamCards;