import { Fragment, useState } from 'react';
import classes from './SocialMediaItems.module.css';

import TwitterIcon from '../../../assets/twitter.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import FacebookBlueIcon from '../../../assets/facebook-blue.svg';
import InstagramIcon from '../../../assets/instagram.svg';
import LinkedinIcon from '../../../assets/linkedin.svg';

function SocialMediaItems( {changeBorderColor, changeFaceColor, changeFaceSize, changeMarginLeft}) {

  return (
        <Fragment>
                    <a href='www.google.com'>
                        <div style={changeBorderColor ? {border: '1px solid #EBEBEB'} : {} && changeMarginLeft ? {marginLeft: '0px'} : {}} className={classes.footerSocialMedia}>
                            <img src={TwitterIcon} alt='Twitter_Icon' />
                        </div>
                    </a>
                    <a href='www.google.com'>
                        <div style={changeBorderColor ? {border: '1px solid #EBEBEB'} : {} && changeMarginLeft ? {marginLeft: '0px'} : {}} className={changeFaceSize ? classes.footerSocialMediaExForSuccessStories : classes.footerSocialMediaEx}>
                            <img src={changeFaceColor ? FacebookBlueIcon : FacebookIcon} alt='Facebook_Icon' />
                        </div>
                    </a>
                    <a href='www.google.com'>
                        <div style={changeBorderColor ? {border: '1px solid #EBEBEB'} : {} && changeMarginLeft ? {marginLeft: '0px'} : {}} className={classes.footerSocialMedia}>
                            <img src={InstagramIcon} alt='Instagram_Icon' />
                        </div>
                    </a>
                    <a href='www.google.com'>
                        <div style={changeBorderColor ? {border: '1px solid #EBEBEB'} : {} && changeMarginLeft ? {marginLeft: '0px'} : {}} className={classes.footerSocialMedia}>
                            <img src={LinkedinIcon} alt='Linkedin_Icon' />
                        </div>
                    </a>
        </Fragment>
  )
}

export default SocialMediaItems;