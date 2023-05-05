import { ReactSVG } from 'react-svg';
import classes from './CustomLeftArrowForStory.module.css';

import CustomLeftArrowImg from '../../../assets/Path 16724.svg';

function CustomLeftArrowForStory ({onClick}) {
    
    return (
    <button className={classes.customLeftArrowForStoryBody}>
        <ReactSVG onClick={() => onClick()} className={classes.customLeftArrowImageForStory} src={CustomLeftArrowImg} alt='CustomLeftArrow_Image' />
    </button>
    );
}

export default CustomLeftArrowForStory;