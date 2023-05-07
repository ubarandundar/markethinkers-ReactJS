import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomLeftArrowForStory from './CustomLeftArrowForStory';
import CustomRightArrowForStory from './CustomRightArrowForStory';

import classes from './OurStoryCarousel.module.css';
import './OurStoryCarousel.css';

function OurStoryCarousel (props) {

    const responsive = {
        desktopXXL: {
          breakpoint: { max: 3000, min: 1700 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        desktopXL: {
            breakpoint: { max: 1700, min: 1300 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
          },
        tablet: {
          breakpoint: { max: 1300, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className='container'>
            <div id='ourStorySectionBody' className={classes.ourStorySectionBody}>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={true}
                centerMode={false}
                customLeftArrow={<CustomLeftArrowForStory />}
                customRightArrow={<CustomRightArrowForStory />}
                renderButtonGroupOutside={true}
                >
                <div className={classes.ourStoryCarouselImage}>
                    <span className={classes.ourStoryDate}>
                        2019
                    </span>
                    <span className={classes.ourStoryMonth}>
                        April
                    </span>
                </div>
                <div className={classes.ourStoryCarouselImage}>
                    <span className={classes.ourStoryDate}>
                        2020
                    </span>
                    <span className={classes.ourStoryMonth}>
                        July
                    </span>
                </div>
                <div className={classes.ourStoryCarouselImage}>
                    <span className={classes.ourStoryDate}>
                        2020
                    </span>
                    <span className={classes.ourStoryMonth}>
                        November
                    </span>
                </div>
                <div className={classes.ourStoryCarouselImage}>
                    <span className={classes.ourStoryDate}>
                        2021
                    </span>
                    <span className={classes.ourStoryMonth}>
                        February
                    </span>
                </div>
                        
            </Carousel>
            </div>
        </div>
    );
}

export default OurStoryCarousel;


