import { Fragment } from 'react';
import MissionVisionSection from './MissionVisionSection/MissionVisionSection';
import OurStorySection from './OurStorySection/OurStorySection';
import HowWeDoItSection from './HowWeDoItSection/HowWeDoItSection';
import TeammatesSection from './TeammatesSection/TeammatesSection';
import X from './TeammatesSection/X';
import AboutUsSection from './AboutSection/AboutUsSection';
import OurPartnersSection from "../Home/OurPartnersSection/OurPartnersSection";
import GrowWithUs from "../Home/GrowWithUs/GrowWithUs";


function AboutUs() {
  return (
    <Fragment>
        <MissionVisionSection />
        {/* <TeammatesSection /> */}
        <X />
        <HowWeDoItSection />
        <OurStorySection />
        <AboutUsSection />
        <OurPartnersSection />
        <GrowWithUs />
    </Fragment>
  )
}

export default AboutUs;