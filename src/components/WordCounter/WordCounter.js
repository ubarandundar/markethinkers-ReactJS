import WhatIsWordCounterSection from './WhatIsWordCounterSection/WhatIsWordCounterSection';
import WordCounterCard from './WordCounterCard/WordCounterCard';
import WordCounterIntro from './WordCounterIntro/WordCounterIntro';
import WordCounterOtherSections from './WordCounterOtherSections/WordCounterOtherSections';

function WordCounter() {
  return (
    <div className='container'>
        <WordCounterIntro />
        <WordCounterCard />
        <WhatIsWordCounterSection />
        <WordCounterOtherSections />
    </div>
  )
}

export default WordCounter;