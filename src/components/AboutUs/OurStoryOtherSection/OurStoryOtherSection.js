import AboutUsSection from '../../../components/Home/AboutSection/AboutSection';
import OurPartnersSection from '../../Home/OurPartnersSection/OurPartnersSection';
import GrowWithUs from '../../Home/GrowWithUs/GrowWithUs';

import classes from './OurStoryOtherSection.module.css';
import OurStoryOtherSectionBackImg from '../../../assets/Path 16847.svg';

function OurStoryOtherSection() {
  return (
    <>
        <AboutUsSection />
        <OurPartnersSection />
        <div className='position-relative'>
            <img className={classes.ourStoryOtherSectionBackImg} src={OurStoryOtherSectionBackImg} alt='OurStoryOtherSectionBackImg' />
            <GrowWithUs changeMarginBottom={true} changesForAboutUs={true} />
        </div>
    </>
  )
}

export default OurStoryOtherSection;