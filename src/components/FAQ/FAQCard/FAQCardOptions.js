import { useState } from 'react';

import classes from './FAQCardOptions.module.css';

function FAQCardOptions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const contentHandler = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  return (
    <div className='container'>
      <div className={'row'}>
        <div className={classes.FAQCardOptionsBodyWrapper}>
          <div className={classes.FAQCardOptionsBody}>
            <button onClick={() => contentHandler(0)} type="button" className={currentIndex === 0 ? classes.FAQCardOptionsButtonsActive: classes.FAQCardOptionsButtons}>All</button>
            <button onClick={() => contentHandler(1)} type="button" className={currentIndex === 1 ? classes.FAQCardOptionsButtonsActive: classes.FAQCardOptionsButtons}>Google</button>
            <button onClick={() => contentHandler(2)}type="button" className={currentIndex === 2 ? classes.FAQCardOptionsButtonsActive: classes.FAQCardOptionsButtons}>Other Services</button>
            <button onClick={() => contentHandler(3)} type="button" className={currentIndex === 3 ? classes.FAQCardOptionsButtonsActive: classes.FAQCardOptionsButtons}>Pricing</button>
            <button onClick={() => contentHandler(4)} type="button" className={currentIndex === 4 ? classes.FAQCardOptionsButtonsActive: classes.FAQCardOptionsButtons}>Reporting</button>
            <button onClick={() => contentHandler(5)} type="button" className={currentIndex === 5 ? classes.FAQCardOptionsButtonsActive: classes.FAQCardOptionsButtons}>SEO</button>
            <input className={classes.FAQCardOptionsInput} type="search" id="site-search" name="q" placeholder='You can search here...' />
          </div>
          <div>
            <input className={classes.FAQCardOptionsInputForMobile} type="search" id="site-search" name="q" placeholder='You can search here...' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQCardOptions;