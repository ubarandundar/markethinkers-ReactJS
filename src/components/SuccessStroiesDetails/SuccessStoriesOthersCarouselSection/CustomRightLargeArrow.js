import classes from './CustomRightLargeArrow.module.css';

import CustomLargeArrowImg from '../../../assets/Path 16724.svg';

function CustomRightLargeArrow ({onClick}) {
    
    return (
    <>
        <div className={classes.customRightLargeArrowBody}>
            <div className={classes.customRightLargeArrowBodySub}>
            </div>
            <img onClick={() => onClick()} src={CustomLargeArrowImg} alt='CustomLargeArrowImg' />
        </div>
    </>
    );
}

export default CustomRightLargeArrow;