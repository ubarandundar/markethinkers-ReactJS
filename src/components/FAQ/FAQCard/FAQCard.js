import classes from './FAQCard.module.css';

import FAQCardOptions from "./FAQCardOptions";
import FAQCardSelections from "./FAQCardSelections";
import FAQCardRightImg from '../../../assets/Path 16821-2.svg';
import FAQCardLeftImg from '../../../assets/Path 16820-2.svg';

function FAQCard({removeBackImages}) {
  return (
    <div className={`container position-relative ${classes.FAQCardWrapper}`}>
        <img style={removeBackImages ? {opacity: '0'} : {}} className={`img-fluid ${classes.FAQCardRightImg}`} src={FAQCardRightImg} alt='FAQCardRightImg' />
        <img style={removeBackImages ? {opacity: '0'} : {}} className={`img-fluid ${classes.FAQCardLeftImg}`} src={FAQCardLeftImg} alt='FAQCardLeftImg' />
        <FAQCardOptions />
        <FAQCardSelections />
    </div>
  )
}

export default FAQCard;