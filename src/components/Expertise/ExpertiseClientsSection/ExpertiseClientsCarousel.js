import { ReactSVG } from "react-svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import classes from './ExpertiseClientsCarousel.module.css';
import './ExpertiseClientsCarousel.css';
import CustomDot from "../../Home/OurPartnersSection/CustomDot";

import HangiKrediImg from '../../../assets/hk-new-logo-white.png';
import ErhanMutluImg from '../../../assets/Image 1.png';
import ForwardArrow from '../../../assets/Group 25657.svg';
import CustomLeftLargeArrow from "../../SuccessStroiesDetails/SuccessStoriesOthersCarouselSection/CustomLeftLargeArrow";
import CustomRightLargeArrow from "../../SuccessStroiesDetails/SuccessStoriesOthersCarouselSection/CustomRightLargeArrow";
import ExpertiseClientsCarouselLeftBackImg from '../../../assets/Path 36635.png';
import ExpertiseClientsCarouselRightBackImg from '../../../assets/Path 16726.png';

function ExpertiseClientsCarousel (props) {

    const responsive = {
        desktopXXL: {
          breakpoint: { max: 3000, min: 1700 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
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
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className='container-fluid'>
            <img className={`img-fluid ${classes.expertiseClientsCarouselLeftBackImg}`} src={ExpertiseClientsCarouselLeftBackImg} alt='ExpertiseClientsCarouselLeftBackImg' />
            <img className={`img-fluid ${classes.expertiseClientsCarouselRightBackImg}`} src={ExpertiseClientsCarouselRightBackImg} alt='ExpertiseClientsCarouselRightBackImg' />
            <div id='expertiseClientsCarouselBodyId' className={classes.expertiseClientsCarouselBody}>
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
                customLeftArrow={<CustomLeftLargeArrow changesForExpertise={true} />}
                customRightArrow={<CustomRightLargeArrow changesForExpertise={true} />}
                renderDotsOutside={true}
                >
                <a href='wwww.google.com' className={classes.expertiseClientsCarouselBlogBody}>
                    <div className={classes.expertiseClientsCarouselImagesBody}>
                        <img className='img-fluid' src={HangiKrediImg} alt='MultiBrandCarouselData_Image' />
                        <ReactSVG className={classes.expertiseClientsCarouselBlogArrow} src={ForwardArrow} alt='Forward_Arrow' />
                    </div>
                    <p className={classes.expertiseClientsCarouselBlogBodyParag}>
                        Öne çıkan özellikleri arasında daima çözüm odaklı olmaları ve hızlı çözümler getirmeleri var. Teknolojiyi ve alanlarındaki trendleri her zaman yakından takip ettiklerinden, ilettiğiniz sorulara en hızlı şekilde cevap alabilirsiniz.
                    </p>
                    <div>
                        <div className={classes.expertiseClientsCarouselBlogProfile}>
                            <img className={classes.expertiseClientsCarouselBlogProfileImg} src={ErhanMutluImg} alt='MultiBrandCarouselData_profilePicture' />
                            <div style={{marginLeft: '22px'}}>
                                <header className={classes.expertiseClientsCarouselBlogPorfileNameSurname}>
                                    Erhan Mutlu
                                </header>
                                <header className={classes.expertiseClientsCarouselBlogPorfileTitle}>
                                    Founder & Marketing
                                </header>
                            </div>
                        </div>
                    </div>
                </a>
                <a href='wwww.google.com' className={classes.expertiseClientsCarouselBlogBody}>
                    <div className={classes.expertiseClientsCarouselImagesBody}>
                        <img className='img-fluid' src={HangiKrediImg} alt='MultiBrandCarouselData_Image' />
                        <ReactSVG className={classes.expertiseClientsCarouselBlogArrow} src={ForwardArrow} alt='Forward_Arrow' />
                    </div>
                    <p className={classes.expertiseClientsCarouselBlogBodyParag}>
                        Öne çıkan özellikleri arasında daima çözüm odaklı olmaları ve hızlı çözümler getirmeleri var. Teknolojiyi ve alanlarındaki trendleri her zaman yakından takip ettiklerinden, ilettiğiniz sorulara en hızlı şekilde cevap alabilirsiniz.
                    </p>
                    <div>
                        <div className={classes.expertiseClientsCarouselBlogProfile}>
                            <img className={classes.expertiseClientsCarouselBlogProfileImg} src={ErhanMutluImg} alt='MultiBrandCarouselData_profilePicture' />
                            <div style={{marginLeft: '22px'}}>
                                <header className={classes.expertiseClientsCarouselBlogPorfileNameSurname}>
                                    Erhan Mutlu
                                </header>
                                <header className={classes.expertiseClientsCarouselBlogPorfileTitle}>
                                    Founder & Marketing
                                </header>
                            </div>
                        </div>
                    </div>
                </a>
            </Carousel>
            </div>
        </div>
    );
}

export default ExpertiseClientsCarousel;


