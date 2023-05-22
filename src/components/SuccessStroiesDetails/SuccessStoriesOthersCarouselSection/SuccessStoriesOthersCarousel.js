import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDot from '../../Home/OurPartnersSection/CustomDot';
import SuccessStoryCard from '../../SuccessStories/SuccessStroyCard/SuccessStoryCard';
import CustomLeftLargeArrow from './CustomLeftLargeArrow';
import CustomRightLargeArrow from './CustomRightLargeArrow';

import classes from './SuccessStoriesOthersCarousel.module.css';
import './SuccessStoriesOthersCarousel.css';

function SuccessStoriesOthersCarousel (props) {

    const responsive = {
        desktopXXL: {
          breakpoint: { max: 3000, min: 1700 },
          items: 3,
          slidesToSlide: 1,
        },
        desktopXL: {
            breakpoint: { max: 1700, min: 1300 },
            items: 2,
            slidesToSlide: 1 
          },
        tablet: {
          breakpoint: { max: 1300, min: 767 },
          items: 1,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };

    return (
        <div className='container-fluid'>
            <div id='successStoriesOthersCarouselBodyId' className={classes.successStoriesOthersCarouselBody}>
            <Carousel
                swipeable={false}
                draggable={true}
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
                // customTransition='transform 300ms ease-in-out'
           
                >
                <div>
                  <SuccessStoryCard changeWidth={true} />
                </div>
                <div>
                  <SuccessStoryCard changeWidth={true} changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
                </div>
                <div>
                  <SuccessStoryCard changeWidth={true} />
                </div>
                <div>
                  <SuccessStoryCard changeWidth={true} changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeDistanceLogo={true} />
                </div>
            </Carousel>
            </div>
        </div>
    );
}

export default SuccessStoriesOthersCarousel;


