import FAQCard from '../../../FAQ/FAQCard/FAQCard';
import GrowWithUs from '../../../Home/GrowWithUs/GrowWithUs';
import classes from './ExpertiseFAQSection.module.css';

import ExpertiseFAQSectionBackRightImg from '../../../../assets/Path 36612.png';
import ExpertiseFAQSectionBackLeftImg from '../../../../assets/Path 36613.png';

function ExpertiseFAQSection({changesforTool}) {
  return (
    <div className='container position-relative'>
          <img className={`img-fluid ${changesforTool ? classes.changesforTool : classes.expertiseFAQSectionBackRightImg}`} src={ExpertiseFAQSectionBackRightImg} alt='ExpertiseFAQSectionBackRightImg' />
          <img className={`img-fluid ${classes.expertiseFAQSectionBackLeftImg}`} src={ExpertiseFAQSectionBackLeftImg} alt='ExpertiseFAQSectionBackLeftImg' />
        <header className={classes.expertiseFAQSectionHeader}>
            frequently asked question
        </header>
        <FAQCard removeBackImages={true} />
        <GrowWithUs changeMarginBottom={true} />
    </div>
  )
}

export default ExpertiseFAQSection