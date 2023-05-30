import { ReactSVG } from "react-svg";
import classes from './TeammatesCard.module.css';

import ForwardArrow from '../../../assets/Group 34.svg';
import ProfilPicture from '../../../assets/profilpic.jpeg';
import LinkedinIcon from '../../../assets/linkedin.svg';

function TeammatesCard() {
  return (
    <div className={`col ${classes.teammatesCardWrapper}`}>
    <div className='col'>
    <a className={classes.teammatesSectionCardBody} href='www.yahoo.com'>
        <div className={classes.teammatesSectionCard}>
            <div>
                <img className={classes.teammatesSectionCardProfilPicture} src={ProfilPicture} alt='Profil_Picture' />
            </div>
            <div>
                <header className={classes.teammatesSectionCardName} >
                    Bilge Bilir
                </header>
                <header className={classes.teammatesSectionCardTitle}>
                    Sales Manager
                </header>
            </div>
            <div className={classes.teammatesSectionCardInfo}>
                <div className={classes.teammatesSectionCardInfoLinkedinBody}>
                    <a href='www.google.com'>
                        <div className={classes.teammatesSectionCardLinkedin}>
                            <img src={LinkedinIcon} alt='Linkedin_Icon' />
                        </div>
                    </a>
                    <div className={classes.teammatesSectionCardShortName}>
                        /b.bilir
                    </div>
                </div>
            <div className={classes.teammatesSectionForwardArrowWrapper}>
                <ReactSVG className={classes.teammatesSectionForwardArrow} src={ForwardArrow} />
            </div>
        </div>
        </div>
    </a>
    </div>
    <div className='col'>
    <a className={classes.teammatesSectionCardBody} href='www.yahoo.com'>
        <div className={classes.teammatesSectionCard}>
            <div>
                <img className={classes.teammatesSectionCardProfilPicture} src={ProfilPicture} alt='Profil_Picture' />
            </div>
            <div>
                <header className={classes.teammatesSectionCardName} >
                    Bilge Bilir
                </header>
                <header className={classes.teammatesSectionCardTitle}>
                    Sales Manager
                </header>
            </div>
            <div className={classes.teammatesSectionCardInfo}>
                <div className={classes.teammatesSectionCardInfoLinkedinBody}>
                    <a href='www.google.com'>
                        <div className={classes.teammatesSectionCardLinkedin}>
                            <img src={LinkedinIcon} alt='Linkedin_Icon' />
                        </div>
                    </a>
                    <div className={classes.teammatesSectionCardShortName}>
                        /b.bilir
                    </div>
                </div>
            <div className={classes.teammatesSectionForwardArrowWrapper}>
                <ReactSVG className={classes.teammatesSectionForwardArrow} src={ForwardArrow} />
            </div>
        </div>
        </div>
    </a>
    </div>
    </div>
  )
}

export default TeammatesCard;