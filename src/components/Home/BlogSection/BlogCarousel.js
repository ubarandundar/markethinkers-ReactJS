import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomRightLargeArrow from '../../SuccessStroiesDetails/SuccessStoriesOthersCarouselSection/CustomRightLargeArrow';
import SliderBlogs from './SliderBlogs';
import classes from './BlogCarousel.module.css';
import './BlogCarousel.css';

function BlogCarousel (props) {

    const responsive = {
        desktopXXL: {
          breakpoint: { max: 3000, min: 1700 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter:  350
        },
        desktopXL: {
            breakpoint: { max: 1700, min: 1300 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          },
        tablet: {
          breakpoint: { max: 1300, min: 464 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter:  350
        }
      };

    return (
        <div className='container'>
            <div id='blogCarouselWrapperId' className={classes.blogCarouselWrapper}>
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
                removeArrowOnDeviceType={false}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={true}
                centerMode={false}
                customRightArrow={<CustomRightLargeArrow changesForHome={true} /> }
                partialVisbile={true}
                
                >
            <div className={classes.sliderBody}>
                <SliderBlogs />
           </div>
           <div className={classes.sliderBody}>
                <SliderBlogs />
           </div>
           <div className={classes.sliderBody}>
                <SliderBlogs />
           </div>
            </Carousel>
            </div>
        </div>
    );
}

export default BlogCarousel;


