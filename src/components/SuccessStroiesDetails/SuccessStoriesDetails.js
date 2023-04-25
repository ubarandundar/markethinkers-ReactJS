import React from 'react'
import SuccessStoriesAwards from './SuccessStoriesAwards/SuccessStoriesAwards';
import SuccessStoriesIntro from './SuccessStoriesIntro/SuccessStoriesIntro';
import SuccessStoriesOtherSections from './SuccessStoriesOtherSections/SuccessStoriesOtherSections';

function SuccessStoriesDetails() {
  return (
    <>
        <SuccessStoriesIntro />
        <SuccessStoriesAwards />
        <SuccessStoriesOtherSections />
    </>
  )
}

export default SuccessStoriesDetails;