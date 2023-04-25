import ExpertiseApplySection from "./ExpertiseApplySection/ExpertiseApplySection";
import ExpertiseCaseStudies from "./ExpertiseCaseStudies/ExpertiseCaseStudies";
import ExpertiseClientsSection from "./ExpertiseClientsSection/ExpertiseClientsSection";
import ExpertiseMultiBrand from "./ExpertiseMultiBrands/ExpertiseMultiBrands";
import ExpertiseFAQSection from "./ExpertiseSEOTeamSection/ExpertiseFAQSection/ExpertiseFAQSection";
import ExpertiseSEOTeamSection from "./ExpertiseSEOTeamSection/ExpertiseSEOTeamSection";
import ExpertiseSubServicesSection from "./ExpertiseSubServicesSection/ExpertiseSubServicesSection";
import WhatIsSEOSection from "./WhatIsSEOSection/WhatIsSEOSection";
import WhyYouShouldChooseUsSection from "./WhyYouShouldChooseUsSection/WhyYouShouldChooseUsSection";


function Expertise() {
  return (
    <>
      <ExpertiseApplySection />
      <ExpertiseMultiBrand />
      <WhatIsSEOSection />
      <ExpertiseSubServicesSection />
      <WhyYouShouldChooseUsSection />
      <ExpertiseSEOTeamSection />
      <ExpertiseClientsSection />
      <ExpertiseCaseStudies />
      <ExpertiseFAQSection />
    </>
  )
}

export default Expertise;