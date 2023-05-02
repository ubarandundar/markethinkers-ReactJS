import classes from './CustomLeftLargeArrow.module.css';

import CustomLargeArrowImg from '../../../assets/Path 16724.svg';

function CustomLeftLargeArrow ({onClick, changesForExpertise}) {
    
    return (
    <>
        <div style={changesForExpertise ? {height:'687px'} : {}} className={classes.customLeftLargeArrowBody}>
            <div style={changesForExpertise ? {height:'603px' , width: '225px'} : {}} className={classes.customLeftLargeArrowBodySub}>
            </div>
            <img onClick={() => onClick()} src={CustomLargeArrowImg} alt='CustomLargeArrowImg' />
        </div>
    </>
    );
}

export default CustomLeftLargeArrow;