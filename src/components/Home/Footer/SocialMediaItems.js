import { Fragment } from 'react';
import { ReactSVG } from 'react-svg';
import classes from './SocialMediaItems.module.css';

import TwitterIcon from '../../../assets/twitter.svg';
import TwitterIconLarge from '../../../assets/twitter-large.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import FacebookBlueIcon from '../../../assets/facebook-blue.svg';
import InstagramIcon from '../../../assets/instagram.svg';
import InstagramIconLarge from '../../../assets/instagram-large.svg';
import LinkedinIcon from '../../../assets/linkedin.svg';
import LinkedinIconLarge from '../../../assets/linkedin-large.svg';

function SocialMediaItems( {changeBorderColor, changesForSuccessStories, changeFacebookBackground, changesforBlogDetails, changesforMobile}) {

  return (
        <Fragment>
                    <a href='www.google.com'>
                        <div style={changeBorderColor ? {border: '1px solid #EBEBEB'} : {}} className={changesForSuccessStories ? classes.footerSocialMediaForSuccessStories : classes.footerSocialMedia}>
                            <img src={changesForSuccessStories ? TwitterIconLarge : TwitterIcon} alt='Twitter_Icon' />
                        </div>
                    </a>
                    <a href='www.google.com'>
                        <div style={changeBorderColor ? {border: '1px solid #EBEBEB'} : {} && changeFacebookBackground ? {background: '#1F0242'} : {}} className={changesForSuccessStories ? classes.footerSocialMediaExForSuccessStories : classes.footerSocialMediaEx}>
                            <ReactSVG  className={changesforBlogDetails ? classes.footerSocialMediaFaceIconForBlogDetails : classes.footerSocialMediaFaceIcon} src={changesForSuccessStories ? FacebookBlueIcon : FacebookIcon} alt='Facebook_Icon' />
                        </div>  
                    </a>
                    <a href='www.google.com'>
                        <div style={changeBorderColor ? {border: '1px solid #EBEBEB'} : {}} className={changesForSuccessStories ? classes.footerSocialMediaForSuccessStories :classes.footerSocialMedia}>
                            <img src={changesForSuccessStories ? InstagramIconLarge : InstagramIcon} alt='Instagram_Icon' />
                        </div>
                    </a>
                    <a href='www.google.com'>
                        <div style={changeBorderColor ? {border: '1px solid #EBEBEB'} : {}} className={changesForSuccessStories ? classes.footerSocialMediaForSuccessStories :classes.footerSocialMedia}>
                            <img src={changesForSuccessStories ? LinkedinIconLarge : LinkedinIcon} alt='Linkedin_Icon' />
                        </div>
                    </a>
        </Fragment>
  )
}

export default SocialMediaItems;