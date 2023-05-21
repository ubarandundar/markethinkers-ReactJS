import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomRightLargeArrow from '../../SuccessStroiesDetails/SuccessStoriesOthersCarouselSection/CustomRightLargeArrow';
import SliderBlogs from './SliderBlogs';
import classes from './BlogCarousel.module.css';
import './BlogCarousel.css';
import CustomDot from '../OurPartnersSection/CustomDot';
import SliderBlogsExtra from './SliderBlogsExtra';

function BlogCarousel () {

    const responsive = {
        desktopM: {
          breakpoint: { max: 3000, min: 1200 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter:  350
        },
        desktop: {
            breakpoint: { max: 1200, min: 992},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          },
        tablet: {
          breakpoint: { max: 991, min: 768 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 471 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter:  180
        },
        mobileM: {
          breakpoint: { max: 470, min: 411 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter:  120
        },
        mobileS: {
          breakpoint: { max: 410, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter:  0
        }
      };

    return (
        <div>
            <div id='blogCarouselWrapperId' className={classes.blogCarouselWrapper}>
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
                centerMode={false}
                customRightArrow={<CustomRightLargeArrow changesForHome={true} /> }
                partialVisbile={true}
                customDot={<CustomDot />}
                >
            <div className={classes.sliderBody}>
                <SliderBlogs isSmallScreen={true}  />
           </div>
           <div className={classes.sliderBody}>
                <SliderBlogs isSmallScreen={true} />
           </div>
            </Carousel>
            </div>
        </div>
    );
}

export default BlogCarousel;


