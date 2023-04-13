import classes from './HowWeDoItSection.module.css';

import HowWeDoItImage from '../../../assets/Mask Group 18.png';
import CreativeApproachImage from '../../../assets/inspiration.png';
import TechnicalKnowledgeImage from '../../../assets/g4155.png';
import DedicatedServiceImage from '../../../assets/Union 6.png';
import HowWeDoItSectionBackLeftImg from '../../../assets/Path 16725.png';
import HowWeDoItSectionBackRightImg from '../../../assets/Path 16848.png';

function HowWeDoItSection() {
  return (
    <div className='container'>
        <img className={classes.howWeDoItSectionBackLeftImg} src={HowWeDoItSectionBackLeftImg} alt='HowWeDoItSectionBackLeft_Image' />
        <img className={classes.howWeDoItSectionBackRightImg} src={HowWeDoItSectionBackRightImg} alt='HowWeDoItSectionBackRight_Image' />
        <div className='row'>
            <div className='col-sm-6'></div>
            <div className='col-sm-6'>
                <header className={classes.howWeDoItSectionHeader}>
                    how we do it
                </header>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-6'>
                <img className='img-fluid' src={HowWeDoItImage} alt='HowWeDoIt_Image' />
            </div>
            <div className='col-sm-6'>
                <header className={classes.howWeDoItSectionHeaderSub}>
                Get literary visible
                <br />
                all in search platforms
                </header>
                <div className={classes.howWeDoItSectionSmallCards}>
                    <div className={classes.howWeDoItSectionBody}>
                        <div className={classes.howWeDoItSectionCardRec}>
                            <img src={CreativeApproachImage} alt='CreativeApproach_Image' />
                        </div>
                        <div>
                        <header className={classes.howWeDoItSectionSmallHeaders}>Creative Approach</header>
                        <p className={classes.howWeDoItSectionParag}>
                        As a passionate and committed team, our creativity reflects on every single aspect of our work, providing the best solutions for you.
                        </p>
                        </div>
                    </div>
                    <div className={classes.howWeDoItSectionBody}>
                        <div className={classes.howWeDoItSectionCardRec}>
                            <img src={TechnicalKnowledgeImage} alt='TechnicalKnowledge_Image' />
                        </div>
                        <div>
                        <header className={classes.howWeDoItSectionSmallHeaders}>Technical Knowledge and Experience</header>
                        <p className={classes.howWeDoItSectionParag}>
                        With our experienced team well-versed in technical knowledge required in SEO and copywriting, we evaluate our work to the finest detail and offer effective solutions even for your most challenging issues.
                        </p>
                        </div>
                    </div>
                    <div className={classes.howWeDoItSectionBody}>
                        <div className={classes.howWeDoItSectionCardRec}>
                            <img src={DedicatedServiceImage} alt='DedicatedService_Image' />
                        </div>
                        <div>
                        <header className={classes.howWeDoItSectionSmallHeaders}>Dedicated Service</header>
                        <p className={classes.howWeDoItSectionParag}>
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

export default HowWeDoItSection;