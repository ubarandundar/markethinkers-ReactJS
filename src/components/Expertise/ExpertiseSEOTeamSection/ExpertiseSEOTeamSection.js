import ExpertiseSEOTeamCards from './ExpertiseSEOTeamCards';
import ExpertiseSEOTeamCardsInfo from './ExpertiseSEOTeamCardsInfo';
import classes from './ExpertiseSEOTeamSection.module.css';

function ExpertiseSEOTeamSection() {
  return (
    <>
        <div className='container-fluid'>
            <header className={classes.expertiseSEOTeamSectionHeader}>
                Here's how our SEO team can
                <br />
                help you to drive growth...
            </header>
        </div>
        <ExpertiseSEOTeamCards />
        <ExpertiseSEOTeamCardsInfo />
    </>
  )
}

export default ExpertiseSEOTeamSection;