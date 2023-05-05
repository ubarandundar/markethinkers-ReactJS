import classes from './ExpertiseCaseStudies.module.css';
import SuccessStoryCard from '../../SuccessStories/SuccessStroyCard/SuccessStoryCard';

function ExpertiseCaseStudies() {
  return (
    <div className='container'>
        <header className={classes.expertiseCaseStudiesHeader}>
            seo clients
        </header>
        <header className={classes.expertiseCaseStudiesHeaderSub}>
            Case Studies
        </header>
        <div className='row'>
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={true} changeDistance={true} changeColForCase={true} changeDistanceLogo={true} />
            <SuccessStoryCard changeLogo={true} changeRate={true} changeBackgroundColor={false} changeDistance={true} changeColForCase={true} changeMarginForCase={true} changeDistanceLogo={true} />
        </div>
    </div>
  )
}

export default ExpertiseCaseStudies;