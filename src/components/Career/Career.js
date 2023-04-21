import BenefitsAndPerksSection from "./BenefitsAndPerksSection/BenefitsAndPerksSection";
import CareerCarouselSection from "./CareerCarousel/CareerCarouselSection";
import JoinAndApplySection from "./JoinAndApplySection/JoinAndApplySection";
import PositionYouCanWorkSection from "./PositionYouCanWorkSection/PositionYouCanWorkSection";

function Career() {
  return (
    <>
        <JoinAndApplySection />
        <CareerCarouselSection />
        <BenefitsAndPerksSection />
        <PositionYouCanWorkSection />
    </>
  )
}

export default Career;