import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './OurPartnersSection.module.css';
import './OurPartnersSection.css';

import CrosstechImage from '../../../assets/Mask Group 13.png';
import ShopifyImage from '../../../assets/Shopify_logo_2018.svg.png';
import CustomDot from './CustomDot';

function OurPartnersSection (props) {

    const responsive = {
        desktopL: {
          breakpoint: { max: 3000, min: 1700 },
          items: 4,
          slidesToSlide: 1 
        },
        desktopM: {
            breakpoint: { max: 1699, min: 1300 },
            items: 3,
            slidesToSlide: 1 
          },
        desktopS: {
            breakpoint: { max: 1299, min: 992 },
            items: 2,
            slidesToSlide: 1 
          },
        tablet: {
          breakpoint: { max: 991, min: 767 },
          items: 1,
          slidesToSlide: 1 
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };

    return (
        <div className='container-fluid'>
            <div id='ourPartnersSectionBodyId' className={classes.ourPartnersSectionBody}>
            <header className={classes.ourPartnersSectionHeader}>Our Partners</header>
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={false}
                centerMode={true}
                // customTransition='transform 300ms ease-in-out'
                customDot={<CustomDot />}
                renderDotsOutside={true}
                >
                
                <div className={classes.ourPartnersImageBody}>
                    <img className={classes.ourPartnersImages} src={CrosstechImage} alt='Crosstech_Image' />
                </div>
                <div className={classes.ourPartnersImageBody}>
                    <img className={classes.ourPartnersImages} src={ShopifyImage} alt='Shopify_Image' />
                </div>
                <div className={classes.ourPartnersImageBody}>
                    <img className={classes.ourPartnersImages} src={CrosstechImage} alt='Crosstech_Image' />
                </div>
                <div className={classes.ourPartnersImageBody}>
                    <img className={classes.ourPartnersImages} src={ShopifyImage} alt='Shopify_Image' />
                </div>
                <div className={classes.ourPartnersImageBody}>
                    <img className={classes.ourPartnersImages} src={CrosstechImage} alt='Crosstech_Image' />
                </div>
                <div className={classes.ourPartnersImageBody}>
                    <img className={classes.ourPartnersImages} src={ShopifyImage} alt='Shopify_Image' />
                </div>         
            </Carousel>
            </div>
        </div>
    );
}

export default OurPartnersSection;


