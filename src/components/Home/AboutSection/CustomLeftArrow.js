import classes from './CustomLeftArrow.module.css';

import CustomLeftArrowImg from '../../../assets/Path 16724.svg';
import { Fragment } from 'react';

function CustomLeftArrow ({onClick}) {
    
    return (
    <Fragment>

                <img onClick={() => onClick()} className={classes.customLeftArrowImg} src={CustomLeftArrowImg} alt='CustomLeftArrow_Image' />
         
    </Fragment>
    );
}

export default CustomLeftArrow;