import classes from './CustomLeftLargeArrow.module.css';

import CustomLargeArrowImg from '../../../assets/Path 16724.svg';

function CustomLeftLargeArrow ({onClick}) {
    
    return (
    <>
        <div className={classes.customLeftLargeArrowBody}>
            <div className={classes.customLeftLargeArrowBodySub}>
            </div>
            <img onClick={() => onClick()} src={CustomLargeArrowImg} alt='CustomLargeArrowImg' />
        </div>
    </>
    );
}

export default CustomLeftLargeArrow;