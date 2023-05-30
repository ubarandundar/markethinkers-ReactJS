import BenefitsAndPerksCard from './BenefitsAndPerksCard';
import classes from './BenefitsAndPerksSection.module.css';

function BenefitsAndPerksSection() {
  return (
    <div className='container'>
      <div className='row'>
        <div className="d-sm-none d-md-block col-md-2"></div>
        <div className='col-sm-12 col-md-12 col-lg-8 position-relative'>
          <header className={classes.benefitsAndPerksSectionHeader}>
            benefits & perks
          </header>
          <div className={classes.benefitsAndPerksSectionParag}>
            We want you to be happy and healthy both in and outside of working hours, no matter where in the world you are. That’s why we offer flexible, competitive benefits for you and your family — and why we cater our offerings by country.
          </div>
        </div>
        <div className="d-sm-none d-md-block col-md-2"></div>
      </div>
      <BenefitsAndPerksCard />
    </div>
  )
}

export default BenefitsAndPerksSection;