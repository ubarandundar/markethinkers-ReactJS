import classes from './LoremSection.module.css';

import LoremSectionBackImg from '../../../assets/Path 16843.png';

function LoremSection() {
  return (
    <div className='container position-relative'>
        <img className={classes.loremSectionBackImg} src={LoremSectionBackImg} alt='LoremSectionBackImg' />
        <div className='row position-relative'>
            <div className='d-flex flex-column'>
                <header className={classes.loremSectionHeader}>
                    Lorem Ipsum Dolor
                </header>
                <span className={classes.loremSectionParag}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </span>
            </div>
        </div>
        <div className='row'>
            <div className='d-flex flex-column'>
                <div className={classes.loremCard}>
                    <header className={classes.loremCardHeader}>
                        Lorem ipsum dolor sit amet, consectetur adi
                    </header>
                    <span className={classes.loremCardParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                </div>
                <div className={classes.loremOtherCard}>
                    <header className={classes.loremOtherCardHeader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                    </header>
                    <span className={classes.loremOtherCardParag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoremSection