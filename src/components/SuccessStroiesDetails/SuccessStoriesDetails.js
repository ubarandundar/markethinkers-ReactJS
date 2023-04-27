import React from 'react'
import GrowWithUs from '../Home/GrowWithUs/GrowWithUs';
import SuccessStoriesAwards from './SuccessStoriesAwards/SuccessStoriesAwards';
import SuccessStoriesIntro from './SuccessStoriesIntro/SuccessStoriesIntro';
import SuccessStoriesOthersCarouselSection from './SuccessStoriesOthersCarouselSection/SuccessStoriesOthersCarouselSection';
import SuccessStoriesOtherSections from './SuccessStoriesOtherSections/SuccessStoriesOtherSections';

function SuccessStoriesDetails() {
  return (
    <>
        <SuccessStoriesIntro />
        <SuccessStoriesAwards />
        <SuccessStoriesOtherSections />
        <GrowWithUs changeMarginBottom={true} />
        <SuccessStoriesOthersCarouselSection />
    </>
  )
}

export default SuccessStoriesDetails;