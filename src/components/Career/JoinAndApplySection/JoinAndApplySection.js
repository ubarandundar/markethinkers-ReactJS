import classes from './JoinAndApplySection.module.css';

import JoinAndApplySectionBackMiddleImg from '../../../assets/Path 16768@2x.png';

function JoinAndApplySection() {
  return (
    <div className='container'>
        <img className={classes.joinAndApplySectionBackMiddleImg} src={JoinAndApplySectionBackMiddleImg} alt='JoinAndApplySectionBackMiddle_Image' />
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
                 <br />
                 Markethinkers is as good as you think — maybe even better.
            </span>
            <button className={classes.joinAndApplySectionJoinButton} type='button'>
                Join Us
            </button>
        </div>
        <div className='d-flex position-relative justify-content-between'>
            <div className={classes.joinSectionWhiteCard}>
                <header className={classes.joinSectionCardHeader}>
                    Search Experience Optimization (SEO) Team
                </header>
                <span className={classes.joinSectionCardParag}>
                    Whether you're new to SEO or an experienced and senior SEO expert, the Markethinkers team has a place for you.
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
    </div>
  )
}

export default JoinAndApplySection;