import classes from './CareerDetailsSection.module.css';
import BenefitsAndPerksSection from '../../Career/BenefitsAndPerksSection/BenefitsAndPerksSection';
import CareerDetailsSectionBackMiddleImg from '../../../assets/Path 16768-2.svg';

function CareerDetailsSection() {
  return (
    <div className='container'>
        <img className={classes.careerDetailsSectionBackMiddleImg} src={CareerDetailsSectionBackMiddleImg} alt='JoinAndApplySectionBackMiddle_Image' />
        <div className='d-flex flex-column position-relative'>
            <header className={classes.careerDetailsSectionHeader}>
                career
            </header>
            <header className={classes.careerDetailsSectionHeaderSub}>
                Lorem ipsum dolor sit amet
            </header>
            <span className={classes.careerDetailsSectionParag}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                <br />
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </span>
        </div>
        <div className={`row ${classes.careerDetailsSectionCardWrapper}`}>
            <div className='d-flex flex-column'>
            <div className={classes.careerDetailsSectionLeftCard}>
                <header className={classes.careerDetailsSectionLeftCardHeader}>
                    Here’s what you'll do
                </header>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Consectetur adipiscing elit, sed do tempor incididunt aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                </ul>
            </div>
            <div className={classes.careerDetailsSectionRightCard}>
                <header className={classes.careerDetailsSectionRightCardHeader}>
                    Desired skills and experiences
                </header>
                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Consectetur adipiscing elit, sed do tempor incididunt aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Consectetur adipiscing elit, sed do tempor incididunt aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                </ul>
            </div>
            </div>
        </div>
        <BenefitsAndPerksSection />
    </div>
  )
}

export default CareerDetailsSection;