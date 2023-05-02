import { ReactSVG } from 'react-svg';
import classes from './CustomLeftArrowForStory.module.css';

import CustomLeftArrowImg from '../../../assets/Path 16724.svg';

function CustomLeftArrowForStory ({onClick}) {
    
    return (
    <div className={classes.CustomLeftArrowForStoryBody}>
        <ReactSVG onClick={() => onClick()} className={classes.customLeftArrowImageForStory} src={CustomLeftArrowImg} alt='CustomLeftArrow_Image' />
    </div>
    );
}

export default CustomLeftArrowForStory;