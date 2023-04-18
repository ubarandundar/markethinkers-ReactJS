import { useState } from 'react';
import classes from './SuccessStoriesDragBar.module.css';

function SuccessStoriesDragBar() {
    const [currentIndex, setCurrentIndex] = useState(0);
      
    const contentHandler = (currentIndex) => {
      setCurrentIndex(currentIndex);
    };

    return (
        <div className='container position-relative'>
          <div className={'row'}>
            <div className={classes.successStoriesDragBarBody}>
                <button onClick={() => contentHandler(0)} type="button" className={currentIndex === 0 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>All</button>
                <button onClick={() => contentHandler(1)} type="button" className={currentIndex === 1 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>Google</button>
                <button onClick={() => contentHandler(2)}type="button" className={currentIndex === 2 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>Other Services</button>
                <button onClick={() => contentHandler(3)} type="button" className={currentIndex === 3 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>Pricing</button>
                <button onClick={() => contentHandler(4)} type="button" className={currentIndex === 4 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>Reporting</button>
                <button onClick={() => contentHandler(5)} type="button" className={currentIndex === 5 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>SEO</button>
                <button onClick={() => contentHandler(5)} type="button" className={currentIndex === 6 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>SEO</button>
                <button onClick={() => contentHandler(5)} type="button" className={currentIndex === 7 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>SEO</button>
                <button onClick={() => contentHandler(5)} type="button" className={currentIndex === 8 ? classes.successStoriesDragBarButtonsActive: classes.successStoriesDragBarButtons}>Other Services</button>
            </div>
          </div>
        </div>
  )
}

export default SuccessStoriesDragBar;