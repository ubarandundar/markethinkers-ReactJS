import FAQCard from '../../FAQ/FAQCard/FAQCard';
import GrowWithUs from '../../Home/GrowWithUs/GrowWithUs';
import classes from './WordCounterOtherSections.module.css';

function WordCounterOtherSections() {
  return (
    <>
        <header className={classes.wordCounterOtherSectionsHeader}>
            frequently asked question
        </header>
        <FAQCard />
        <GrowWithUs changeMarginBottom={true} />
    </>
  )
}

export default WordCounterOtherSections;