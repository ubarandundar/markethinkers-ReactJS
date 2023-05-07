import classes from './WhyYouShouldChooseUsSection.module.css';

import WhyYouShouldChooseUsSectionImage from '../../../assets/5.png';
import CreativeApproachImage from '../../../assets/inspiration.png';
import TechnicalKnowledgeImage from '../../../assets/g4155.png';
import DedicatedServiceImage from '../../../assets/Union 6.png';
import WhyYouShouldChooseUsSectionBackLeftImg from '../../../assets/Path 16762-1.png';
import WhyYouShouldChooseUsSectionBackRightImg from '../../../assets/Path 36608.png';

function WhyYouShouldChooseUsSection() {
  return (
    <div className={`container ${classes.whyYouShouldChooseUsSectionWrapper}`}>
        <img className={classes.whyYouShouldChooseUsSectionBackLeftImg} src={WhyYouShouldChooseUsSectionBackLeftImg} alt='WhyYouShouldChooseUsSectionBackLeftImg' />
        <img className={classes.whyYouShouldChooseUsSectionBackRightImg} src={WhyYouShouldChooseUsSectionBackRightImg} alt='WhyYouShouldChooseUsSectionBackRightImg' />
        <div className='row'>
            <div className='col-sm-6'></div>
            <div className='col-sm-6'>
                <header className={classes.whyYouShouldChooseUsSectionHeader}>
                    why you should choose us
                </header>
            </div>
        </div>
        <div className='row'>
            <div className={`col-sm-6 ${classes.whyYouShouldChooseUsSectionImageWrapper}`}>
                <img className='img-fluid' src={WhyYouShouldChooseUsSectionImage} alt='WhyYouShouldChooseUsSection_Image' />
            </div>
            <div className={`col-sm-6 ${classes.whyYouShouldChooseUsSectionRightSide}`}>
                <header className={classes.whyYouShouldChooseUsSectionHeaderSub}>
                Get literary visible
                <br />
                all in search platforms
                </header>
                <div className={classes.whyYouShouldChooseUsSectionSmallCards}>
                    <div className={classes.whyYouShouldChooseUsSectionBody}>
                        <div className={classes.whyYouShouldChooseUsSectionCardRec}>
                            <img src={CreativeApproachImage} alt='CreativeApproach_Image' />
                        </div>
                        <div>
                        <header className={classes.whyYouShouldChooseUsSectionSmallHeaders}>Creative Approach</header>
                        <p className={classes.whyYouShouldChooseUsSectionParag}>
                        As a passionate and committed team, our creativity reflects on every single aspect of our work, providing the best solutions for you.
                        </p>
                        </div>
                    </div>
                    <div className={classes.whyYouShouldChooseUsSectionBody}>
                        <div className={classes.whyYouShouldChooseUsSectionCardRec}>
                            <img src={TechnicalKnowledgeImage} alt='TechnicalKnowledge_Image' />
                        </div>
                        <div>
                        <header className={classes.whyYouShouldChooseUsSectionSmallHeaders}>Technical Knowledge and Experience</header>
                        <p className={classes.whyYouShouldChooseUsSectionParag}>
                        With our experienced team well-versed in technical knowledge required in SEO and copywriting, we evaluate our work to the finest detail and offer effective solutions even for your most challenging issues.
                        </p>
                        </div>
                    </div>
                    <div className={classes.whyYouShouldChooseUsSectionBody}>
                        <div className={classes.whyYouShouldChooseUsSectionCardRec}>
                            <img src={DedicatedServiceImage} alt='DedicatedService_Image' />
                        </div>
                        <div>
                        <header className={classes.whyYouShouldChooseUsSectionSmallHeaders}>Dedicated Service</header>
                        <p className={classes.whyYouShouldChooseUsSectionParag}>
                        Regardless of what the brand or request is, we consider all brands we work with as an in-house team and embrace their business. With this mutual understanding, we do not offer black-hat methods or any approach we do not approve of.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyYouShouldChooseUsSection;