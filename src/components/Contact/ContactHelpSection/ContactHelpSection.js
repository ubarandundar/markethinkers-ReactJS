import React from 'react';
import classes from './ContactHelpSection.module.css';
import contactHelpSectionBackImg from '../../../assets/Path 16768.png';
import contactHelpSectionImg from '../../../assets/7744137.png';

function ContactHelpSection () {
  return (
        <div className='container'>
            <div className={classes.contactHelpSectionLink}>
                <a href='www.google.com'>
                    Homepage
                </a>
                <div className={classes.redDot}></div>
                <a href='www.google.com'>
                    Contact
                </a>
            </div>
            <div className={classes.contactHelpSection}>
                <img className={classes.contactHelpSectionBackImg} src={contactHelpSectionBackImg} alt='contactHelpBack_Image' />
                <header className={classes.contactHelpSectionHeader}>
                    contact
                </header>
                <header className={classes.contactHelpSectionSubHeader}>
                    Hi, how can help you?
                </header>
                <p className={classes.contactHelpSectionParag}>
                    Choose a category below to get started.
                </p>
            </div>
            <div>
                <div className={'row d-flex justify-content-center'}>
                    <div className={'col-sm-6'}>
                        <img className={`img-fluid ${classes.contactHelpSectionImg}`} src={contactHelpSectionImg} alt='contactHelp_Image' />
                    </div>
                    <div className={'col-sm-6 d-flex justify-content-center flex-column align-items-center'}>
                        <div className={classes.contactHelpSectionBottomSideHeader}>
                        Lorem ipsum dolor sit
                        </div>
                        <p className={classes.contactHelpSectionBottomSideParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactHelpSection;