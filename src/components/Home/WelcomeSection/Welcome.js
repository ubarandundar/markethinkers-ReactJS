import classes from './Welcome.module.css';
import Lottie from 'react-lottie-player'
import WelcomeJSON from  './data - 1.json';

function Welcome (props) {
    return (
    <div className='container-fluid'>
        <div className={classes.welcomeBodyWrapper}>
            <div className={classes.welcomeBody}>
                <div className={classes.welcomeLottie}>
                    <Lottie className='img-fluid' animationData={WelcomeJSON} speed="1" style={{width: '1920px', height: '1280px', background: "transparent"}} loop play />
                </div>
                <div>
                    <p className={classes.welcome}>welcome</p>
                    <p className={classes.increase}>Increase Your Visibility with Our Awarded</p>
                    <p className={classes.services}>Services <span className={classes.and}>and</span> Copywriting.</p>
                    <p className={classes.weAre}>We are ready to grow your business digitally with our expertise and</p>
                    <p className={classes.experience}>experienced team in SEO services and copywriting.</p>
                </div>
                <div className={classes.buttons}>
                    <button className={classes.contactUs}>Contact Us</button>
                    <button className={classes.ourServices}>Our Services</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Welcome;