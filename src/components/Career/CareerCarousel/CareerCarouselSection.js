import CareerCarousel from './CareerCarousel';
import classes from './CareerCarouselSection.module.css';

function CareerCarouselSection() {
  return (
    <div className={`container-fluid ${classes.careerCarouselSectionWrapper}`}>
        <header className={classes.careerCarouselSectionHeader}>
            why we love it here
        </header>
        <CareerCarousel />
    </div>
  )
}

export default CareerCarouselSection;