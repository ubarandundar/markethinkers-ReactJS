import { Fragment } from 'react';
import MissionVisionSection from './MissionVisionSection/MissionVisionSection';
import OurStorySection from './OurStorySection/OurStorySection';
import HowWeDoItSection from './HowWeDoItSection/HowWeDoItSection';
import AboutUsSection from './AboutSection/AboutUsSection';
import OurPartnersSection from "../Home/OurPartnersSection/OurPartnersSection";
import GrowWithUs from "../Home/GrowWithUs/GrowWithUs";
import TeammatesCarousel from './TeammatesSection/TeammatesCarousel';


function AboutUs() {
  return (
    <Fragment>
        <MissionVisionSection />
        <TeammatesCarousel />
        <HowWeDoItSection />
        <OurStorySection />
        <AboutUsSection />
        <OurPartnersSection />
        <GrowWithUs />
    </Fragment>
  )
}

export default AboutUs;