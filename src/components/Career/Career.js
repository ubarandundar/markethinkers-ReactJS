import BenefitsAndPerksSection from "./BenefitsAndPerksSection/BenefitsAndPerksSection";
import CareerCarousel from "./CareerCarousel/CareerCarousel";
import JoinAndApplySection from "./JoinAndApplySection/JoinAndApplySection";
import PositionYouCanWorkSection from "./PositionYouCanWorkSection/PositionYouCanWorkSection";

function Career() {
  return (
    <>
        <JoinAndApplySection />
        <CareerCarousel />
        <BenefitsAndPerksSection />
        <PositionYouCanWorkSection />
    </>
  )
}

export default Career;