import classes from './CustomLeftArrow.module.css';

import CustomLeftArrowImg from '../../assets/Path 16724.svg';
import { Fragment } from 'react';

function CustomLeftArrow ({onClick}) {
    
    return (
    <Fragment>
        <button onClick={() => onClick()} className={classes.customLeftArrowButton} type='button'>
                <img className={classes.customLeftArrowImg} src={CustomLeftArrowImg} alt='CustomLeftArrow_Image' />
            </button>
    </Fragment>
    );
}

export default CustomLeftArrow;