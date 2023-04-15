import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './OurStoryCarousel.module.css';

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
        <div className='container-fluid'>
            <div className={classes.ourPartnersSectionBody}>
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
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={true}
                centerMode={false}
                // customTransition='transform 300ms ease-in-out'
    
                >
                <div className={classes.ourStoryCarouselImage}>
                    <span>
                        2019
                    </span>
                    <span>
                        April
                    </span>
                </div>
                <div className={classes.ourStoryCarouselImage}>
                    <span>
                        2020
                    </span>
                    <span>
                        July
                    </span>
                </div>
                <div className={classes.ourStoryCarouselImage}>
                    <span>
                        2020
                    </span>
                    <span>
                        November
                    </span>
                </div>
                <div className={classes.ourStoryCarouselImage}>
                    <span>
                        2021
                    </span>
                    <span>
                        February
                    </span>
                </div>
                        
            </Carousel>
            </div>
        </div>
    );
}

export default OurStoryCarousel;


