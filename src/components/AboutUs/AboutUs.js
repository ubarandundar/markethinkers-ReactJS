import { Fragment } from 'react';
import MissionVisionSection from './MissionVisionSection/MissionVisionSection';
import OurStorySection from './OurStorySection/OurStorySection';
import HowWeDoItSection from './HowWeDoItSection/HowWeDoItSection';
import TeammatesCarousel from './TeammatesSection/TeammatesCarousel';
import OurStoryOtherSection from './OurStoryOtherSection/OurStoryOtherSection';


function AboutUs() {
  return (
    <Fragment>
        <MissionVisionSection />
        <TeammatesCarousel />
        <HowWeDoItSection />
        <OurStorySection />
        <OurStoryOtherSection />
    </Fragment>
  )
}

export default AboutUs;