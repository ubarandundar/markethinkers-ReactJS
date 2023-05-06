import classes from './CustomRightLargeArrow.module.css';

import CustomLargeArrowImg from '../../../assets/Path 16724.svg';

function CustomRightLargeArrow ({onClick, changesForExpertise, changesForTeammates, changesForHome}) {
    
    return (
    <>
        <div style={changesForExpertise ? {height:'687px'} : {} && changesForTeammates ? {height:'1090px'} : {}} className={changesForHome ? classes.changesForHomeCSS : classes.customRightLargeArrowBody}>
            <div style={changesForExpertise ? {height:'603px' , width: '225px'} : {} && changesForTeammates ? {height:'968px' , width: '225px'} : {} && changesForHome ? {height:'790px' , width: '265px'} : {}} className={classes.customRightLargeArrowBodySub}>
                {changesForHome && <div className={classes.customRightLargeArrowBodySubSub}>
                </div>}
            </div>
            <img onClick={() => onClick()} src={CustomLargeArrowImg} alt='CustomLargeArrowImg' />
        </div>
    </>
    );
}

export default CustomRightLargeArrow;