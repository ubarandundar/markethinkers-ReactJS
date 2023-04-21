import classes from './CareerCarouselCard.module.css';

import ProfilPicture from '../../../assets/profilpic.jpeg';

function CareerCarouselCard() {
  return (
    <a href='www.google.com' className={classes.careerCarouselCardBody}>
        <div className={classes.careerCarouselCardBodySub}>
          <div>
            <img className={classes.careerCarouselCardProfilPicture} src={ProfilPicture} alt='Profil_Picture' />
          </div>
          <div className={classes.careerCarouselCardInfoBody}>
            <header className={classes.careerCarouselCardHeader}>
              Bilge Bilir
            </header>
            <header className={classes.careerCarouselCardTitle}>
              Lorem Ipsum Dolor Sit
            </header>
          </div>
        </div>
        <div className={classes.careerCarouselCardParag}>
          Working at Markethinker has been a truly exciting and energizing experience. There is a real entrepreneurial culture being fostered here and it shows in the big waves we're making in the collaboration space!
        </div>
    </a>
  )
}

export default CareerCarouselCard;