import classes from './Welcome.module.css';
// import x from '../../assets/Asset 1@2x.png';

function Welcome (props) {
    return (
    <div className='container-fluid'>
        <div className={classes.welcomeBodyWrapper}>
            {/* <img src={x} className={classes.y} alt='sad' /> */}
            <div className={classes.welcomeBody}>
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