import { useState, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import classes from './ExpertiseApplySection.module.css';

import ExpertiseApplySectionApplyImg from '../../../assets/Design.png';
import ExpertiseApplySectionBackImg from '../../../assets/Path 16728-2.png';

function ExpertiseApplySection() {
     const expertiseData = [
        {   
            section: 'Seo Danışmanlığı',
            header: 'Kapsamlı ve Profesyonel',
            headerOther: 'SEO Danışmanlık Hizmeti',
            content: 'SEO danışmanlığı; profesyonel, sürdürülebilir ve kullanıcı odaklı olmalıdır. Kullanıcıyı odağına almayan bir SEO çalışması, kalıcı ve başarılı olamayacağı gibi markaya da zarar verebilir.'
        },
        {   
            section: 'Seo Danışmanlığı (SEOCopy)',
            header: 'Kapsamlı ve Profesyonel',
            headerOther: 'SEO Danışmanlık Hizmeti',
            content: 'SEO danışmanlığı; profesyonel, sürdürülebilir ve kullanıcı odaklı olmalıdır. Kullanıcıyı odağına almayan bir SEO çalışması, kalıcı ve başarılı olamayacağı gibi markaya da zarar verebilir.'
        },
        {   
            section: 'Seo Danışmanlığı (ContMark)',
            header: 'Kapsamlı ve Profesyonel',
            headerOther: 'SEO Danışmanlık Hizmeti',
            content: 'SEO danışmanlığı; profesyonel, sürdürülebilir ve kullanıcı odaklı olmalıdır. Kullanıcıyı odağına almayan bir SEO çalışması, kalıcı ve başarılı olamayacağı gibi markaya da zarar verebilir.'
        },
        {   
            section: 'Seo Danışmanlığı (DigiPR)',
            header: 'Kapsamlı ve Profesyonel',
            headerOther: 'SEO Danışmanlık Hizmeti',
            content: 'SEO danışmanlığı; profesyonel, sürdürülebilir ve kullanıcı odaklı olmalıdır. Kullanıcıyı odağına almayan bir SEO çalışması, kalıcı ve başarılı olamayacağı gibi markaya da zarar verebilir.'
        },
        {   
            section: 'Seo Danışmanlığı (DigiAd)',
            header: 'Kapsamlı ve Profesyonel',
            headerOther: 'SEO Danışmanlık Hizmeti',
            content: 'SEO danışmanlığı; profesyonel, sürdürülebilir ve kullanıcı odaklı olmalıdır. Kullanıcıyı odağına almayan bir SEO çalışması, kalıcı ve başarılı olamayacağı gibi markaya da zarar verebilir.'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const contentHandler = (currentIndex) => {
        setCurrentIndex(currentIndex);
    };

  return (
        <div className="container position-relative">
            <div className={classes.expertiseApplySectionLink}>
                <a href='www.google.com'>
                    Homepage
                </a>
                <div className={classes.redDot}></div>
                <a href='www.google.com'>
                    Success Stories
                </a>
                <div className={classes.redDot}></div>
                <br />
                <a href='www.google.com'>
                    Professional SEO Consulting
                </a>
            </div>
            <img className={classes.expertiseApplySectionBackImg} src={ExpertiseApplySectionBackImg} alt='ExpertiseApplySectionBack_Image' />
            <div className={classes.expertiseApplySectionDep}>
            <ScrollContainer
              className="scroll-container"
              vertical={false}
              horizontal={true}
              >
                {<div className='d-flex flex-row'>
                    <button onClick={() => contentHandler(0)} type="button" className={currentIndex === 0 ? classes.expertiseApplySectionButtonsActive: classes.expertiseApplySectionButtons}>
                    Professional SEO Consulting
                </button>
                <button onClick={() => contentHandler(1)} type="button" className={currentIndex === 1 ? classes.expertiseApplySectionButtonsActive: classes.expertiseApplySectionButtons}>
                    SEO Copywriting
                </button>
                <button onClick={() => contentHandler(2)}type="button" className={currentIndex === 2 ? classes.expertiseApplySectionButtonsActive: classes.expertiseApplySectionButtons}>
                    Content Marketing
                </button>
                <button onClick={() => contentHandler(3)} type="button" className={currentIndex === 3 ? classes.expertiseApplySectionButtonsActive: classes.expertiseApplySectionButtons}>
                    Digital PR – Link Building Services
                </button>
                <button onClick={() => contentHandler(4)} type="button" className={currentIndex === 4 ? classes.expertiseApplySectionButtonsActive: classes.expertiseApplySectionButtons}>
                    Digital Advertising Services
                </button>
                </div>}
                </ScrollContainer>
            </div>
            <div style={{zIndex: '3'}} className='row position-relative'>
                <div className='col-sm-12 col-md-12 col-lg-6 d-flex flex-column'>
                    <header className={classes.expertiseApplySectionHeader}>
                        {expertiseData[currentIndex].section}
                    </header>
                    <header className={classes.expertiseApplySectionHeaderSub}>
                        {expertiseData[currentIndex].header}
                    </header>
                    <hedaer className={classes.expertiseApplySectionHeaderSubLarge}>
                        {expertiseData[currentIndex].headerOther}
                    </hedaer>
                    <span className={classes.expertiseApplySectionParag}>
                        {expertiseData[currentIndex].content}
                    </span>
                    <button className={classes.expertiseApplySectionButton} type='button'>
                        Apply Now
                    </button>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <img className={`img-fluid ${classes.expertiseApplySectionApplyImg}`} src={ExpertiseApplySectionApplyImg} alt='ExpertiseApplySectionApply_Image' />
                </div>
            </div>
        </div>
  )
}

export default ExpertiseApplySection;