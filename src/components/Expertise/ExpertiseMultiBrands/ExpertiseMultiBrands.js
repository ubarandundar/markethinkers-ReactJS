import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './ExpertiseMultiBrands.module.css';

import SeturImage from '../../../assets/Image 10.png';
import AvansasImage from '../../../assets/Image 11.png';
import MidasImage from '../../../assets/Image 13.png';
import ExpansienceLabImage from '../../../assets/Image 14.png';
import MaskGroupImage from '../../../assets/Mask Group 40.png';


function ExpertiseMultiBrand (props) {

    const responsive = {
        desktopXXL: {
          breakpoint: { max: 3000, min: 1700 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        desktopXL: {
            breakpoint: { max: 1700, min: 1300 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
          },
        tablet: {
          breakpoint: { max: 1300, min: 768 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className='container-fluid'>
            <div className={classes.expertiseMultiBrandBody}>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={false}
                centerMode={true}
                // customTransition='transform 300ms ease-in-out'
                >
                <div className={classes.expertiseMultiBrandImageCard}>
                    <img className={classes.expertiseMultiBrandImage} src={SeturImage} alt='SeturImage' />
                </div>
                <div className={classes.expertiseMultiBrandImageCard}>
                    <img className={classes.expertiseMultiBrandImage} src={AvansasImage} alt='AvansasImage' />
                </div>
                <div className={classes.expertiseMultiBrandImageCard}>
                    <img className={classes.expertiseMultiBrandImage} src={MidasImage} alt='MidasImage' />
                </div>
                <div className={classes.expertiseMultiBrandImageCard}>
                    <img className={classes.expertiseMultiBrandImage} src={ExpansienceLabImage} alt='ExpansienceLabImage' />
                </div>
                <div className={classes.expertiseMultiBrandImageCard}>
                    <img className={classes.expertiseMultiBrandImage} src={MaskGroupImage} alt='MaskGroupImage' />
                </div>   
            </Carousel>
            </div>
        </div>
    );
}

export default ExpertiseMultiBrand;


