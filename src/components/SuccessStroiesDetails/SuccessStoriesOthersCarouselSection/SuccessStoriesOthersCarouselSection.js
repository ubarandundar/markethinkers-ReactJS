import SuccessStoriesOthersCarousel from './SuccessStoriesOthersCarousel';
import classes from './SuccessStoriesOthersCarouselSection.module.css';

function SuccessStoriesOthersCarouselSection() {
  return (
    <>
        <div className='container'>
            <header className={classes.successStoriesOthersCarouselSectionHeader}>
                others
            </header>
        </div>
        <SuccessStoriesOthersCarousel />
    </>
  )
}

export default SuccessStoriesOthersCarouselSection;