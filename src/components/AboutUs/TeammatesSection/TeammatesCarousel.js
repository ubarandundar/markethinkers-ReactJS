import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './TeammatesCarousel.module.css';
import './TeammatesCarousel.css';

import TeammatesCard from "./TeammatesCard";
import TeammatesSectionBackImg from '../../../assets/Path 16762.png';
import CustomRightLargeArrow from '../../SuccessStroiesDetails/SuccessStoriesOthersCarouselSection/CustomRightLargeArrow';


function TeammatesCarousel (props) {

    const responsive = {
        desktopXXL: {
          breakpoint: { max: 3000, min: 1700 },
          items: 4,
          slidesToSlide: 1 // optional, default to 1.
        },
        desktopXL: {
            breakpoint: { max: 1700, min: 1300 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
          },
        tablet: {
          breakpoint: { max: 1300, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className='container'>
          <div id='teammatesSectionBodyId' className={classes.teammatesSectionBody}>
            <img className={classes.teammatesSectionBackImg} src={TeammatesSectionBackImg} alt='contactHelpBack_Image' />
            <div>
            <header className={classes.teammatesSectionHeader}>
            Our Teammates
            </header>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="transform 1000ms ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                arrows={true}
                centerMode={false}
                customRightArrow={<CustomRightLargeArrow changesForTeammates={true} />}
                
                >
                
                    <TeammatesCard />
                    <TeammatesCard />
                    <TeammatesCard />
                    <TeammatesCard />
                    <TeammatesCard />
                    <TeammatesCard />

            </Carousel>
            </div>
            </div>
        </div>
    );
}

export default TeammatesCarousel;


