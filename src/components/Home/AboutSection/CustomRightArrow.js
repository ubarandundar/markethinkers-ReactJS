import classes from './CustomRightArrow.module.css';

import CustomRightArrowImg from '../../../assets/Path 16724.svg';
import { Fragment } from 'react';

function CustomRightArrow ({ onClick}) {
    return (
        <Fragment>
      
                <img onClick={() => onClick()} className={classes.customRightArrowImg} src={CustomRightArrowImg} alt='CustomLeftArrow_Image' />
    
        </Fragment>
    );
}

export default CustomRightArrow;