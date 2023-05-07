import classes from './GoogleMapSection.module.css';
import SocialMediaItems from '../../Home/Footer/SocialMediaItems';
import GoogleMapSectionBackImg from '../../../assets/Path 16845.svg';
import GoogleMap from './GoogleMap';

function GoogleMapSection () {
  return (
    <div className={'container'}>
        <img className={classes.GoogleMapSectionBackImg} src={GoogleMapSectionBackImg} alt='contactHelpBack_Image' />
        <div className={classes.GoogleMapSectionBody}>
            <div className={classes.GoogleMapSection}>
                <div>
                    <a className={classes.GoogleMapSectionEmail} href='mailto:info@markethinkers.com'>info@markethinkers.com</a>
                </div>
                <div>
                    <div className={classes.GoogleMapSectionNumber}>0545 856 87 36</div>
                </div>
                <div>
                    <div className={classes.GoogleMapSectionAddress}>Sepapaja 6, Tallinn 15551, Estonia</div>
                </div>
                <div className={classes.GoogleMapSectionSocialMediaArea}>
                    <SocialMediaItems changeBorderColor={true} />
                </div>
            </div>
            {/* <div className={classes.GoogleMapCard}>
                    <GoogleMap />
                </div> */}
        </div>
    </div>
  )
}

export default GoogleMapSection;