import classes from './CustomRightLargeArrow.module.css';

import CustomLargeArrowImg from '../../../assets/Path 16724.svg';

function CustomRightLargeArrow ({onClick, changesForExpertise, changesForTeammates}) {
    
    return (
    <>
        <div style={changesForExpertise ? {height:'687px'} : {} && changesForTeammates ? {height:'1090px'} : {}} className={classes.customRightLargeArrowBody}>
            <div style={changesForExpertise ? {height:'603px' , width: '225px'} : {} && changesForTeammates ? {height:'968px' , width: '225px'} : {}} className={classes.customRightLargeArrowBodySub}>
            </div>
            <img onClick={() => onClick()} src={CustomLargeArrowImg} alt='CustomLargeArrowImg' />
        </div>
    </>
    );
}

export default CustomRightLargeArrow;