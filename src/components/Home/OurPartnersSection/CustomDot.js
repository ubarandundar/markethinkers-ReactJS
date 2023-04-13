import classes from './CustomDot.module.css';

import { Fragment } from 'react';

function CustomDot ({onClick, active}) {
    
    return (
    <Fragment>
        <button onClick={() => onClick()} className={active ? classes.customDot : classes.customDotInactive} type='button' />
    </Fragment>
    );
}

export default CustomDot;