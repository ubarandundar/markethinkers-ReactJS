import FAQCardOptions from '../../FAQ/FAQCard/FAQCardOptions';
import PositionYouCanWorkCardSelections from './PositionYouCanWorkCardSelections';
import classes from './PositionYouCanWorkSection.module.css';

import PositionYouCanWorkSectionRightImg from '../../../assets/Path 16725-3.svg';
import PositionYouCanWorkSectionLeftImg from '../../../assets/Path 16725-4.svg';

function PositionYouCanWorkSection() {
  return (
    <div className={`container ${classes.positionYouCanWorkSectionWrapper}`}>
      <img className={classes.positionYouCanWorkSectionRightImg} src={PositionYouCanWorkSectionRightImg} alt='PositionYouCanWorkSectionRightImg' />
      <img className={classes.positionYouCanWorkSectionLeftImg} src={PositionYouCanWorkSectionLeftImg} alt='PositionYouCanWorkSectionLeftImg' />
      <header className={classes.positionYouCanWorkSectionHeader}>
        positions you can work
      </header>
      <FAQCardOptions />
      <PositionYouCanWorkCardSelections />
    </div>
  )
}

export default PositionYouCanWorkSection;