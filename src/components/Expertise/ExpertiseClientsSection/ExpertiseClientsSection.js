import ExpertiseClientsCarousel from './ExpertiseClientsCarousel';
import classes from './ExpertiseClientsSection.module.css';

function ExpertiseClientsSection() {
  return (
    <div className='container-fluid'>
        <header className={classes.expertiseClientsSectionHeader}>
            our clients
        </header>
        <header className={classes.expertiseClientsSectionHeaderSub}>
            Thoughts About Us
        </header>
        <ExpertiseClientsCarousel />
    </div>
  )
}

export default ExpertiseClientsSection