import MultiBrandCarousel from './MultiBrandCrousel';
import classes from './AboutUs.module.css';
import ForwardArrow from '../../assets/Group 34.svg';
import AboutIconImg from '../../assets/Mask Group 10.png';

function AboutUs (props) {
    return (
        <div className={classes.aboutSection}>
            <div className={classes.aboutSectionLeftSide}>
                <header className={classes.aboutSectionLeftSideHeader}>about us</header>
                <a href='www.google.com'>
                    <img className={classes.aboutSectionLeftSideForwardArrow} src={ForwardArrow} alt='Forward_Arrow' />
                </a>
                <img className={classes.aboutSectionLeftSideAboutIconImg} src={AboutIconImg} alt='AboutIcon_Image' />
            </div>

            <div className={classes.aboutSectionRightSide}>
                <header className={classes.aboutSectionRightSideHeader}>
                    Get literary visible
                    <br />
                    all in search platforms
                </header>
                <p className={classes.aboutSectionRightSideParag}>
                    SEO consulting must be professional, sustainable and user-oriented. SEO work that does
                    <br />
                    not focus on the user may not be permanent or successful; what is worse, it may damage
                    <br />
                    the brand.
                </p>
                    
                <p className={classes.aboutSectionRightSideParag}>What we offer you is professional, 360-degree SEO consultancy. Any solution that could
                <br />
                harm your brand or is unsustainable is never recommended to you by Markethinkers’
                <br />
                Expert Consultants. Through the recommendations of our consultants with proven
                <br />
                success and experience, your website—which represents your brand—is in safe hands.
                <br />
                We work to ensure sustainable success.
                </p>
                <a href='www.google.com' className={classes.aboutSectionRightSideMore}>more</a>
                <MultiBrandCarousel />
            </div>
        </div>
    );
}

export default AboutUs;