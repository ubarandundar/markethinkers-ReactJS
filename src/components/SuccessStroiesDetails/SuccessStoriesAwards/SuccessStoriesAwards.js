import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './SuccessStoriesAwards.module.css';

import UKDGAImage from '../../../assets/UKDGAwards-Logo-Dark-Background1.png';

function SuccessStoriesAwards (props) {

    const responsive = {
        desktopXXL: {
          breakpoint: { max: 3000, min: 1700 },
          items: 2,
          slidesToSlide: 1,
          partialVisibilityGutter: 240
        },
        desktopXL: {
            breakpoint: { max: 1700, min: 1300 },
            items: 2,
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
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div style={{marginTop: '100px', marginBottom: '50px', marginLeft: '18%'}} className='container-fluid'>
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
                // customTransition='transform 300ms ease-in-out'
                >
                <div className={classes.successStoriesAwardsCardBody}>
                    <img className='img-fluid' src={UKDGAImage} alt='UKDGA_Image' />
                    <div style={{marginLeft: '30px'}} className='d-flex flex-column'>
                        <header>
                            Lorem ipsum dolor sit
                        </header>
                        <span>  
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </span>
                    </div>
                </div>
                <div className={classes.successStoriesAwardsCardBody}>
                    <img className='img-fluid' src={UKDGAImage} alt='UKDGA_Image' />
                    <div style={{marginLeft: '30px'}} className='d-flex flex-column'>
                        <header>
                            Lorem ipsum dolor sit
                        </header>
                        <span>  
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </span>
                    </div>
                </div>
                <div className={classes.successStoriesAwardsCardBody}>
                    <img className='img-fluid' src={UKDGAImage} alt='UKDGA_Image' />
                    <div style={{marginLeft: '30px'}} className='d-flex flex-column'>
                        <header>
                            Lorem ipsum dolor sit
                        </header>
                        <span>  
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </span>
                    </div>
                </div>
            </Carousel>
            </div>
        </div>
    );
}

export default SuccessStoriesAwards;


