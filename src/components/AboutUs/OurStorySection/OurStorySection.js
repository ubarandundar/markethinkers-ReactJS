import classes from './OurStorySection.module.css';

function OurStorySection() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6'>
                <div className='d-flex flex-column'>
                    <header className={classes.OurStorySectionLeftSideHeader}>
                        our story
                    </header>
                    <header className={classes.OurStorySectionLeftSideHeaderSub}>
                        Our Value-Creating Journey
                    </header>
                    <span className={classes.OurStorySectionLeftSideParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices.
                    </span>
                </div>
            </div>
            <div className='col-sm-6'>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStorySection;