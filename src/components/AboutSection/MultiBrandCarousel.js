// import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './MultiBrandCarousel.module.css';

import HangiKrediImg from '../../assets/hk-new-logo-white.svg';
import ZoomImg from '../../assets/Zoom logo.svg';
import SalesforceImg from '../../assets/Salesforce logo.svg';
import AmazonImg from '../../assets/Amazon logo.svg';
import GlossierImg from '../../assets/Glossier logo.svg';
import GoogleImg from '../../assets/Google logo.svg';
import CustomLeftArrow from './CustomLeftArrow';
import CustomRightArrow from './CustomRightArrow';

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

function MultiBrandCarousel () {
    return (
        <div>
             <Carousel
                swipeable={true}
                draggable={false}
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
                arrows={true}
                centerMode={false}
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                >

                <div className={classes.multiBrandCarouselBodySub}>
                    <img className={classes.multiBrandCarouselBodyImagesHangiKredi} src={HangiKrediImg} alt='HangiKredi_Image' />
                </div>
                <div>
                    <img className={classes.multiBrandCarouselBodyImagesZoom} src={ZoomImg} alt='Zoom_Image' />
                </div>
                <div>
                    <img className={classes.multiBrandCarouselBodyImagesSalesforce} src={SalesforceImg} alt='Salesforces_Image' />
                </div>
                <div>
                    <img className={classes.multiBrandCarouselBodyImagesAmazon} src={AmazonImg} alt='Amazon_Image' />
                </div>
                <div>
                    <img className={classes.multiBrandCarouselBodyImagesGlossier} src={GlossierImg} alt='Glossier_Image' />
                </div>
                <div>
                    <img className={classes.multiBrandCarouselBodyImagesGoogle} src={GoogleImg} alt='Google_Image' />
                </div>

            </Carousel>
        </div>
    );
}

export default MultiBrandCarousel;