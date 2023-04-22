import { useState, useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";
import classes from './ExpertiseApplySection.module.css';

function ExpertiseApplySection() {
    //  const expertiseData = [
    //     {   
    //         belongsTo: 'Support',
    //         firstContent: 'Support: Whether you have a question about Markethinkers, a feature',
    //         secondContent: 'request, or anything else, our team is ready to help!',
    //     },
    // ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef();

    const { events } = useDraggable(ref);

    const contentHandler = (currentIndex) => {
        setCurrentIndex(currentIndex);
    };

  return (
        <div className="container flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide" {...events} ref={ref}>
            <div className={classes.expertiseApplySectionDep}>
                <button onClick={() => contentHandler(0)} type="button" className={`flex-none w-52 h-32 bg-red-200 ${currentIndex === 0 ? classes.expertiseApplySectionButtonsActive: classes.expertiseApplySectionButtons}`}>
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
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-6 d-flex flex-column'>
                    <header className={classes.expertiseApplySectionHeader}>
                        Seo Danışmanlığı
                    </header>
                    <header className={classes.expertiseApplySectionHeaderSub}>
                        Kapsamlı ve Profesyonel
                    </header>
                    <hedaer className={classes.expertiseApplySectionHeaderSubLarge}>
                        SEO Danışmanlık Hizmeti
                    </hedaer>
                    <span className={classes.expertiseApplySectionParag}>
                        SEO danışmanlığı; profesyonel, sürdürülebilir ve kullanıcı odaklı olmalıdır. Kullanıcıyı odağına almayan bir SEO çalışması, kalıcı ve başarılı olamayacağı gibi markaya da zarar verebilir.
                    </span>
                    <button className={classes.expertiseApplySectionButton} type='button'>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
  )
}

export default ExpertiseApplySection;