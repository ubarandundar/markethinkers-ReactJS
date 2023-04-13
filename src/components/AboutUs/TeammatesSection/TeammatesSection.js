import classes from './TeammatesSection.module.css';

import TeammatesCard from "./TeammatesCard";

function TeammatesSection() {
  return (
    <div className={'container-fluid'}>
        <header className={classes.teammatesSectionHeader}>
            Our Teammates
        </header>
        <div>
            <div className='container'>
                <div className='row'>
                    <TeammatesCard />
                    <TeammatesCard />
                    <TeammatesCard />
                    <TeammatesCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeammatesSection;