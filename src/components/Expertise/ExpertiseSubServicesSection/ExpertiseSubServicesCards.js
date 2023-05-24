import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './ExpertiseSubServicesCards.module.css';

import ExpertiseSubServicesCardsTeknikSEOImage from '../../../assets/Group 41579.svg';
import ExpertiseSubServicesCardsUluslararasiSEOImage from '../../../assets/Group 150.svg';
import ExpertiseSubServicesCardsSiteiciSEOImage from '../../../assets/Group 198.svg';
import ExpertiseSubServicesCardsSitedisiSEOImage from '../../../assets/Group 4439.svg';
import ExpertiseSubServicesCardsBackImg from '../../../assets/Path 16763.png';

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
    breakpoint: { max: 1300, min: 767 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 100
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 50
  }
};

function ExpertiseSubServicesCards() {
  return (
    <div className={`container-fluid ${classes.expertiseSubServicesCardsWrapper}`}>
            <img className={`img-fluid ${classes.expertiseSubServicesCardsBackImg}`} src={ExpertiseSubServicesCardsBackImg} alt='ExpertiseSubServicesCardsBackImg' />
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
            <div className={classes.expertiseSubServicesCardsBody}>
              <img className='img-fluid' src={ExpertiseSubServicesCardsTeknikSEOImage} alt='ExpertiseSubServicesCardsTeknikSEO_Image' />
              <header className={classes.expertiseSubServicesCardsHeader}>
                Teknik SEO
              </header>
              <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
              </span>
            </div>
            <div className={classes.expertiseSubServicesCardsBody}>
              <img className='img-fluid' src={ExpertiseSubServicesCardsUluslararasiSEOImage} alt='ExpertiseSubServicesCardsUluslararasiSEO_Image' />
              <header className={classes.expertiseSubServicesCardsHeader}>
              Uluslararası SEO
              </header>
              <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
              </span>
            </div>
            <div className={classes.expertiseSubServicesCardsBody}>
              <img className='img-fluid' src={ExpertiseSubServicesCardsSiteiciSEOImage} alt='ExpertiseSubServicesCardsSiteiciSEO_Image' />
              <header className={classes.expertiseSubServicesCardsHeader}>
              Site İçi SEO
              </header>
              <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
              </span>
          </div>
          <div className={classes.expertiseSubServicesCardsBody}>
            <img className='img-fluid' src={ExpertiseSubServicesCardsSitedisiSEOImage} alt='ExpertiseSubServicesCardsSitedisiSEO_Image' />
            <header className={classes.expertiseSubServicesCardsHeader}>
              Site Dışı SEO
            </header>
            <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
            </span>
          </div>
          <div className={classes.expertiseSubServicesCardsBody}>
            <img className='img-fluid' src={ExpertiseSubServicesCardsUluslararasiSEOImage} alt='ExpertiseSubServicesCardsUluslararasiSEO_Image' />
            <header className={classes.expertiseSubServicesCardsHeader}>
              Uluslararası SEO
            </header>
            <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
            </span>
          </div>
            </Carousel>
        </div>
    </div>
  )
}

export default ExpertiseSubServicesCards