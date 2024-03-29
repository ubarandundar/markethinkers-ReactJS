import classes from './JoinAndApplySection.module.css';

import JoinAndApplySectionBackMiddleImg from '../../../assets/Path 16768-5.svg';
import JoinAndApplySectionBackLeftImg from '../../../assets/Path 16728-1.png';

function JoinAndApplySection() {
  return (
    <div className='container'>
        <img className={classes.joinAndApplySectionBackMiddleImg} src={JoinAndApplySectionBackMiddleImg} alt='JoinAndApplySectionBackMiddle_Image' />
        <img className={classes.joinAndApplySectionBackLeftImg} src={JoinAndApplySectionBackLeftImg} alt='JoinAndApplySectionBackLeft_Image' />
        <div className={classes.joinAndApplySectionLink}>
          <a href='www.google.com'>
            Homepage
          </a>
          <div className={classes.redDot}></div>
          <a href='www.google.com'>
            Career
          </a>
        </div>
        <div className='d-flex flex-column position-relative'>
            <header className={classes.joinAndApplySectionHeader}>
                career
            </header>
            <header className={classes.joinAndApplySectionHeaderSub}>
                Are you ready to become a
                <br />
                Markethinker?
            </header>
            <span className={classes.joinAndApplySectionParag}>
                 With a product designed to fuel creativity and make meetings fun, working at
                 <br /><span> </span> 
                 Markethinkers is as good as you think — maybe even better.
            </span>
            <button className={classes.joinAndApplySectionJoinButton} type='button'>
                Join Us
            </button>
        </div>
        <div className={classes.joinSectionCardWrapper}>
            <div className={classes.joinSectionWhiteCard}>
                <header className={classes.joinSectionCardHeader}>
                    Search Experience Optimization (SEO) Team
                </header>
                <span className={classes.joinSectionCardParag}>
                    Whether you're new to SEO or an experienced and senior SEO expert, the Markethinkers team has a place for you.
                </span>
            </div>
            <div className={classes.joinSectionOrangeCardForMobile}>
                <header className={classes.joinSectionOrangeCardHeaderForMobile}>
                    Content Team That Makes a Difference
                </header>
                <span className={classes.joinSectionOrangeCardParagForMobile}>
                    Do you want to create value for brands by using the power of words? Then you can join our team as an SEO-compatible content writer, content editor or content manager.
                </span>
            </div>
            <div className={classes.joinSectionWhiteCardOther}>
                <header className={classes.joinSectionCardHeader}>
                    Digital Marketing Guru Team
                </header>
                <span className={classes.joinSectionCardParag}>
                    You can apply for various positions in our team, such as Digital Marketing Expert, Social Media Manager, and Brand Consultant, which enables Markethinkers to contact more brands and offer value to more people.
                </span>
            </div>
        </div>
        <div className='d-flex position-relative justify-content-center'>
            <div className={classes.joinSectionOrangeCard}>
                <header className={classes.joinSectionOrangeCardHeader}>
                    Content Team That Makes a Difference
                </header>
                <span className={classes.joinSectionOrangeCardParag}>
                    Do you want to create value for brands by using the power of words? Then you can join our team as an SEO-compatible content writer, content editor or content manager.
                </span>
            </div>
        </div>
        <div className={`row ${classes.applySectionWrapper}`}>
            <div className={`col-sm-12 col-md-6 col-lg-6 ${classes.applySectionBodyLeft}`}>
                <header className={classes.applySectionHeader}>
                    Imagination is
                    <br /><span> </span>
                    mandatory.
                </header>
                <button className={classes.applySectionButton} type='button'>
                    Apply Now
                </button>
            </div>
            <div className={`col-sm-12 col-md-6 col-lg-6 ${classes.applySectionBodyRight}`}>
                <span className={classes.applySectionParagFirst}>
                    We practice what we preach, and it's why our remote team has been thriving for more than a decade. Using Markethinkers, we collaborate seamlessly from all over the world, which lets us hire the best people, no matter where they are. ‍ 
                </span>
                <span className={classes.applySectionParagSecond}>
                    Every day, we work together in a product that’s designed to cultivate creativity, empathy, and open-mindedness. And Markethinkers is committed to building a team where people of all races, genders, and orientations feel seen, heard, and valued. We strive to be the most equitable employer out there, so we insist on using hiring processes that reduce bias, internal resources that promote visibility, and ongoing evaluations that help us constantly do better.
                </span>
            </div>
        </div>
    </div>
  )
}

export default JoinAndApplySection;