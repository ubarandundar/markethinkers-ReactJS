import classes from './OurStorySection.module.css';

import MarketingBlogImage from '../../../assets/text-seo-editing.png';
import OurStoryCarousel from './OurStoryCarousel';

import OurStorySectionBackImg from '../../../assets/Path 16813.svg';

function OurStorySection() {
  return (
    <div className={`container ${classes.ourStorySectionWrapper}`}>
        <img className={classes.ourStorySectionBackImg} src={OurStorySectionBackImg} alt='OurStorySectionBackImg' />
        <div className='row position-relative'>
            <div className='col-sm-12 col-md-12 col-lg-5'>
                <div className='d-flex flex-column'>
                    <header className={classes.ourStorySectionLeftSideHeader}>
                        our story
                    </header>
                    <header className={classes.ourStorySectionLeftSideHeaderSub}>
                        Our Value-Creating Journey
                    </header>
                    <span className={classes.ourStorySectionLeftSideParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices.
                    </span>
                </div>
            </div>
            <div className='col-sm-12 col-md-7 col-lg-7 position-relative'>
                <div className={classes.ourStoryCarouselBody}>
                    <OurStoryCarousel />
                </div>
                <div className={classes.ourStorySectionRightSideBody}>
                    <div className='row'>
                        <div className='col-sm-5 d-flex align-items-center justify-content-center'>
                            <img className='img-fluid' src={MarketingBlogImage} alt='Blog_Image' />
                        </div>
                        <div className='col-sm-7 d-flex flex-column'>
                            <header className={classes.ourStorySectionRightSideHeader}>
                                Marketing Blog
                            </header>
                            <span className={classes.ourStorySectionRightSideParag}>
                                Diam vel quam elementum pulvinar etiam. Semper quis lectus nulla at volutpat diam. Et ultrices neque ornare aenean euismod. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Urna et pharetra.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStorySection;