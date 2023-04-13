import { Fragment } from 'react';
import MissionVisionSection from './MissionVisionSection/MissionVisionSection';
import OurStorySection from './OurStorySection/OurStorySection';
import HowWeDoItSection from './TeammatesSection/HowWeDoItSection';
import TeammatesSection from './TeammatesSection/TeammatesSection';
import X from './TeammatesSection/X';

function AboutUs() {
  return (
    <Fragment>
        <MissionVisionSection />
        {/* <TeammatesSection /> */}
        <X />
        <HowWeDoItSection />
        <OurStorySection />
    </Fragment>
  )
}

export default AboutUs;