import classes from './ExpertiseSubServicesCards.module.css';

import ExpertiseSubServicesCardsTeknikSEOImage from '../../../assets/Group 41579.svg';
import ExpertiseSubServicesCardsUluslararasiSEOImage from '../../../assets/Group 150.svg';
import ExpertiseSubServicesCardsSiteiciSEOImage from '../../../assets/Group 198.svg';
import ExpertiseSubServicesCardsSitedisiSEOImage from '../../../assets/Group 4439.svg';

function ExpertiseSubServicesCards() {
  return (
    <div className='container'>
      <div className='d-flex flex-row'>
        <a href='www.google.com' className={classes.expertiseSubServicesCardsBody}>
            <img className='img-fluid' src={ExpertiseSubServicesCardsTeknikSEOImage} alt='ExpertiseSubServicesCardsTeknikSEO_Image' />
            <header className={classes.expertiseSubServicesCardsHeader}>
                Teknik SEO
            </header>
            <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
            </span>
        </a>
        <a href='www.google.com' className={classes.expertiseSubServicesCardsBody}>
            <img className='img-fluid' src={ExpertiseSubServicesCardsUluslararasiSEOImage} alt='ExpertiseSubServicesCardsUluslararasiSEO_Image' />
            <header className={classes.expertiseSubServicesCardsHeader}>
              Uluslararası SEO
            </header>
            <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
            </span>
        </a>
        <a href='www.google.com' className={classes.expertiseSubServicesCardsBody}>
            <img className='img-fluid' src={ExpertiseSubServicesCardsSiteiciSEOImage} alt='ExpertiseSubServicesCardsSiteiciSEO_Image' />
            <header className={classes.expertiseSubServicesCardsHeader}>
              Site İçi SEO
            </header>
            <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
            </span>
        </a>
        <a href='www.google.com' className={classes.expertiseSubServicesCardsBody}>
            <img className='img-fluid' src={ExpertiseSubServicesCardsSitedisiSEOImage} alt='ExpertiseSubServicesCardsSitedisiSEO_Image' />
            <header className={classes.expertiseSubServicesCardsHeader}>
              Site Dışı SEO
            </header>
            <span className={classes.expertiseSubServicesCardsParag}>
                We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.
            </span>
        </a>
      </div>
    </div>
  )
}

export default ExpertiseSubServicesCards