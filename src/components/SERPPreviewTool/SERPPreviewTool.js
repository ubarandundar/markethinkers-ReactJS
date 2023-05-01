import WordCounterOtherSections from "../WordCounter/WordCounterOtherSections/WordCounterOtherSections";
import SERPPreviewToolCard from "./SERPPreviewToolCard/SERPPreviewToolCard";
import SERPPreviewToolIntro from "./SERPPreviewToolIntro/SERPPreviewToolIntro";
import WhatIsSERPPreviewToolSection from "./WhatIsSERPPreviewToolSection/WhatIsSERPPreviewToolSection";

function SERPPreviewTool() {
  return (
    <div className="container">
        <SERPPreviewToolIntro />
        <SERPPreviewToolCard />
        <WhatIsSERPPreviewToolSection />
        <WordCounterOtherSections />
    </div>
  )
}

export default SERPPreviewTool;