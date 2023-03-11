import classes from './CustomRightArrow.module.css';

import CustomRightArrowImg from '../../assets/Path 16724.svg';
import { Fragment } from 'react';

function CustomRightArrow ({ onClick}) {
    return (
        <Fragment>
            <button onClick={() => onClick()} className={classes.CustomRightArrowButton} type='button'>
                <img className={classes.customRightArrowImg} src={CustomRightArrowImg} alt='CustomLeftArrow_Image' />
            </button>
        </Fragment>
    );
}

export default CustomRightArrow;