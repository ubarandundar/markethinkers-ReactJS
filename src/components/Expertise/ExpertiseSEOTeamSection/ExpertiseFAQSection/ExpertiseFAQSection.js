import FAQCard from '../../../FAQ/FAQCard/FAQCard';
import GrowWithUs from '../../../Home/GrowWithUs/GrowWithUs';
import classes from './ExpertiseFAQSection.module.css';

function ExpertiseFAQSection() {
  return (
    <div className='container'>
        <header className={classes.expertiseFAQSectionHeader}>
            frequently asked question
        </header>
        <FAQCard />
        <GrowWithUs />
    </div>
  )
}

export default ExpertiseFAQSection