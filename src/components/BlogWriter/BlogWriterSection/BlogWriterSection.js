import classes from './BlogWriterSection.module.css';

import ProfilPicture from '../../../assets/profilpic.jpeg';
import LinkedinIcon from '../../../assets/linkedin.svg';

function BlogWriterSection() {
  return (
    <div className='container'>
        <div className={classes.blogWriterSectionLink}>
                <a href='www.google.com'>
                    Homepage
                </a>
                <div className={classes.redDot}></div>
                <a href='www.google.com'>
                    About Us
                </a>
                <div className={classes.redDot}></div>
                <a href='www.google.com'>
                    Bilge Bilir
                </a>
        </div>
        <div className={`row ${classes.blogWriterSectionCardBody}`}>
            <div className='col-4 position-relative'>
                <img className={classes.blogWriterSectionCardBodyProfilPicture} src={ProfilPicture} alt='Profil_Picture' />
            </div>
            <div className='col-4'>
                <header className={classes.blogWriterSectionCardNameSurname}>
                    Bilge Bilir
                </header>
                <header className={classes.blogWriterSectionCardTitle}>
                    Sales Manager
                </header>
                <div className='d-flex flex-row'>
                    <div className='d-flex pe-3'>
                    <a href='www.google.com'>
                        <div className={classes.blogWriterSectionCardLinkedin}>
                            <img src={LinkedinIcon} alt='Linkedin_Icon' />
                        </div>
                    </a>
                    <div className={classes.blogWriterSectionCardShortName}>
                        /b.bilir
                    </div>
                    </div>
                    <div className='d-flex pe-3'>
                    <a href='www.google.com'>
                        <div className={classes.blogWriterSectionCardLinkedin}>
                            <img src={LinkedinIcon} alt='Linkedin_Icon' />
                        </div>
                    </a>
                    <div className={classes.blogWriterSectionCardShortName}>
                        /b.bilir
                    </div>
                    </div>
                    <div className='d-flex'>
                    <a href='www.google.com'>
                        <div className={classes.blogWriterSectionCardLinkedin}>
                            <img src={LinkedinIcon} alt='Linkedin_Icon' />
                        </div>
                    </a>
                    <div className={classes.blogWriterSectionCardShortName}>
                        /b.bilir
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <header className={classes.blogWriterSectionCardInfo}>
                    Info:
                </header>
                <span className={classes.blogWriterSectionCardExplanation}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus. Felis bibendum ut tristique. Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                </span>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <header className={classes.blogWriterSectionHeader}>
                    lorem
                </header>
                <span className={classes.blogWriterSectionExplanation}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus. Felis bibendum ut tristique.
                </span>
            </div>
            <div className='col-6'>
                <header className={classes.blogWriterSectionHeader}>
                    lorem
                </header>
                <span className={classes.blogWriterSectionExplanation}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus. Felis bibendum ut tristique.
                </span>
            </div>
        </div>
    </div>
  )
}

export default BlogWriterSection;