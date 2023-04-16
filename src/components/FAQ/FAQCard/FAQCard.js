import classes from './FAQCard.module.css';

import FAQCardOptions from "./FAQCardOptions";
import FAQCardSelections from "./FAQCardSelections";

function FAQCard() {
  return (
    <div className={`container ${classes.FAQCardWrapper}`}>
        <FAQCardOptions />
        <FAQCardSelections />
    </div>
  )
}

export default FAQCard;