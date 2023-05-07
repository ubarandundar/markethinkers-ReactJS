import classes from './ExpertiseCaseStudies.module.css';
import SuccessStoryCard from '../../SuccessStories/SuccessStroyCard/SuccessStoryCard';
import ExpertiseCaseStudiesBackImg from '../../../assets/Path 36611.png';

function ExpertiseCaseStudies() {
  return (
    <div className='container position-relative'>
        <img className={`img-fluid ${classes.expertiseCaseStudiesBackImg}`} src={ExpertiseCaseStudiesBackImg} alt='ExpertiseCaseStudiesBackImg' />
        <header className={classes.expertiseCaseStudiesHeader}>
            seo clients
        </header>
        <header className={classes.expertiseCaseStudiesHeaderSub}>
            Case Studies
        </header>
        <div className='row position-relative'>
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeColForCase={true} changeDistanceLogo={true} />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={false} changeDistance={true} changeColForCase={true} changeMarginForCase={true} changeDistanceLogo={true} />
        </div>
    </div>
  )
}

export default ExpertiseCaseStudies;