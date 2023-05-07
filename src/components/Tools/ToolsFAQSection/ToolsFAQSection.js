import ExpertiseFAQSection from '../../Expertise/ExpertiseSEOTeamSection/ExpertiseFAQSection/ExpertiseFAQSection';
import classes from './ToolsFAQSection.module.css';

function ToolsFAQSection() {
  return (
    <div className={classes.toolsFAQSectionWrapper}>
        <ExpertiseFAQSection changesforTool={true} />
    </div>
  )
}

export default ToolsFAQSection;