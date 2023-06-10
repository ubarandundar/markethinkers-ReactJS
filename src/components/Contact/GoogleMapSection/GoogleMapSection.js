import classes from './GoogleMapSection.module.css';
import SocialMediaItems from '../../Home/Footer/SocialMediaItems';
import GoogleMapSectionBackImg from '../../../assets/Path 16845.svg';
import GoogleMap from './GoogleMap';

function GoogleMapSection () {
  return (
    <div className={'container'}>
        <img className={classes.GoogleMapSectionBackImg} src={GoogleMapSectionBackImg} alt='contactHelpBack_Image' />
        <div>
            <div className={classes.GoogleMapSectionInfoSide}>
                <div className={classes.GoogleMapSectionEmailWrapper}>
                    <a className={classes.GoogleMapSectionEmail} href='mailto:info@markethinkers.com'>info@markethinkers.com</a>
                </div>
                <div>
                    <div className={classes.GoogleMapSectionNumber}>0545 856 87 36</div>
                </div>
                <div>
                    <div className={classes.GoogleMapSectionAddress}>Sepapaja 6, Tallinn 15551, Estonia</div>
                </div>
                <div className={classes.GoogleMapSectionSocialMediaArea}>
                    <SocialMediaItems changeBorderColor={true} changesforMobile={true} changeFacebookBackground={true} />
                </div>
            </div>
        </div>
        <div className={classes.GoogleMapSectionMapArea}>
            {/* <div className={classes.GoogleMapCard}>
                <GoogleMap />
            </div> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.7383703602368!2d24.800671577346602!3d59.42075910369864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692eb56f748e313%3A0x454f20de7d588011!2sArtur%20Lind%20Building%2C%20Sepapaja%206%2C%2011415%20Tallinn%2C%20Estonia!5e0!3m2!1sen!2str!4v1685559092061!5m2!1sen!2str" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default GoogleMapSection;