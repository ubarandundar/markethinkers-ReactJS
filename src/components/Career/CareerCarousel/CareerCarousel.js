import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './CareerCarousel.module.css';
import './CareerCarousel.css';

import CareerCarouselCard from './CareerCarouselCard';
import CustomDot from '../../Home/OurPartnersSection/CustomDot';
import CustomLeftLargeArrow from '../../SuccessStroiesDetails/SuccessStoriesOthersCarouselSection/CustomLeftLargeArrow';
import CustomRightLargeArrow from '../../SuccessStroiesDetails/SuccessStoriesOthersCarouselSection/CustomRightLargeArrow';

import CareerCarouselBackImg from '../../../assets/Path 16727-2.svg';

const responsive = {
    desktopS: {
        breakpoint: { max: 576, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
    desktopM: {
        breakpoint: { max: 992, min: 520 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
    desktopL: {
        breakpoint: { max: 1200, min: 992 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
    desktopXL: {
        breakpoint: { max: 1400, min: 1200 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
    desktopXXL: {
        breakpoint: { max: 4000, min: 1400 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    // tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 2,
    //     slidesToSlide: 1 // optional, default to 1.
    // },
    // mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1,
    //     slidesToSlide: 1 // optional, default to 1.
    // }
  };

function CareerCarousel (props) {
    
    return (
        <div id='careerCarouselWrapperId' className={`container-fluid ${classes.careerCarouselWrapper}`}>
            <img className={classes.careerCarouselBackImg} src={CareerCarouselBackImg} alt='CareerCarouselBackImg' />
             <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={false}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={true}
                centerMode={true}
                customDot={<CustomDot />}
                customLeftArrow={<CustomLeftLargeArrow />}
                customRightArrow={<CustomRightLargeArrow />}
                renderDotsOutside={true}
                >
                <CareerCarouselCard />
                <CareerCarouselCard />
                <CareerCarouselCard />
                <CareerCarouselCard />
                <CareerCarouselCard />
                <CareerCarouselCard />
            </Carousel>
        </div>
    );
}

export default CareerCarousel;