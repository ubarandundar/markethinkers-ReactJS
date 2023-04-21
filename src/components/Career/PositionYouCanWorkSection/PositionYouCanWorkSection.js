import FAQCardOptions from '../../FAQ/FAQCard/FAQCardOptions';
import PositionYouCanWorkCardSelections from './PositionYouCanWorkCardSelections';
import classes from './PositionYouCanWorkSection.module.css';

function PositionYouCanWorkSection() {
  return (
    <div className={`container ${classes.positionYouCanWorkSectionWrapper}`}>
      <header className={classes.positionYouCanWorkSectionHeader}>
        positions you can work
      </header>
      <FAQCardOptions />
      <PositionYouCanWorkCardSelections />
    </div>
  )
}

export default PositionYouCanWorkSection;