import classes from './MissionVisionSection.module.css';

import MissionVisionSectionBackImg from '../../../assets/Path 16768@2x.png';

function MissionVisionSection() {
  return (
    <div className={'container'}>
        <div className={classes.missionVisionSectionHeaderAboutUsBody}>
            <img className={classes.missionVisionSectionBackImg} src={MissionVisionSectionBackImg} alt='missionVisionSectionBack_Image' />
            <header className={classes.missionVisionSectionHeader}>
                about us
            </header>
            <header className={classes.missionVisionSectionHeaderSub}>
                Be Where the World Goes with
                <br />
                Markethinkers
            </header>
            <p className={classes.missionVisionSectionParag}>
                As Markethinkers, we know very well that marketing is both a science and an art.
                <br />
                In whatever we do, we offer the best for your brand with our professional team
                <br />
                by combining our creativity and technical knowledge.
            </p>
        </div>
        <div className={'d-flex flex-column'}>
            <div className={classes.missionCard}>
                <header className={classes.missionCardHeader}>
                    Our Mission
                </header>
                <span className={classes.missionCardParag}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.
                </span>
            </div>
            <div className={classes.visionCard}>
                <header className={classes.visionCardHeader}>
                    Our Vision
                </header>
                <span className={classes.visionCardParag}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.
                </span>
            </div>
        </div>
    </div>
  )
}

export default MissionVisionSection;