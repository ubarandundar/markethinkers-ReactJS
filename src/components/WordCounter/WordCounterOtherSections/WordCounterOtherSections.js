import FAQCard from '../../FAQ/FAQCard/FAQCard';
import GrowWithUs from '../../Home/GrowWithUs/GrowWithUs';
import classes from './WordCounterOtherSections.module.css';

import WordCounterOtherSectionsBackLeftFirstImg from '../../../assets/Path 36634.svg';
import WordCounterOtherSectionsBackLeftSecondImg from '../../../assets/Path 36631.svg';
import WordCounterOtherSectionsBackRightImg from '../../../assets/Path 36632.svg';

function WordCounterOtherSections() {
  return (
    <div className='position-relative'>  
        <img className={`img-fluid ${classes.wordCounterOtherSectionsBackLeftFirstImg}`} src={WordCounterOtherSectionsBackLeftFirstImg} alt='WordCounterOtherSectionsBackLeftFirstImg' />
        <img className={`img-fluid ${classes.wordCounterOtherSectionsBackLeftSecondImg}`} src={WordCounterOtherSectionsBackLeftSecondImg} alt='WordCounterOtherSectionsBackLeftSecondImg' />
        <img className={`img-fluid ${classes.wordCounterOtherSectionsBackRightImg}`} src={WordCounterOtherSectionsBackRightImg} alt='WordCounterOtherSectionsBackRightImg' />
        <header className={classes.wordCounterOtherSectionsHeader}>
            frequently asked question
        </header>
        <FAQCard removeBackImages={true} />
        <GrowWithUs changeMarginBottom={true} />
    </div>
  )
}

export default WordCounterOtherSections;