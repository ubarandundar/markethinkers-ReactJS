import FAQCard from '../../FAQ/FAQCard/FAQCard';
import GrowWithUs from '../../Home/GrowWithUs/GrowWithUs';
import classes from './JsonLdOtherSections.module.css';

import JsonLdOtherSectionsBackLeftFirstImg from '../../../assets/Path 36634.svg';
import JsonLdOtherSectionsBackLeftSecondImg from '../../../assets/Path 36631.svg';
import JsonLdOtherSectionsBackRightImg from '../../../assets/Path 36632.svg';

function JsonLdOtherSections() {
  return (
    <div className='position-relative'>
        <img className={`img-fluid ${classes.jsonLdOtherSectionsBackLeftFirstImg}`} src={JsonLdOtherSectionsBackLeftFirstImg} alt='JsonLdOtherSectionsBackLeftFirstImg' />
        <img className={`img-fluid ${classes.jsonLdOtherSectionsBackLeftSecondImg}`} src={JsonLdOtherSectionsBackLeftSecondImg} alt='JsonLdOtherSectionsBackLeftSecondImg' />
        <img className={`img-fluid ${classes.jsonLdOtherSectionsBackRightImg}`} src={JsonLdOtherSectionsBackRightImg} alt='JsonLdOtherSectionsBackRightImg' />
        <GrowWithUs changeMarginBottom={true} />
        <header className={classes.JsonLdOtherSectionsHeader}>
            frequently asked question
        </header>
        <FAQCard />
    </div>
  )
}

export default JsonLdOtherSections;