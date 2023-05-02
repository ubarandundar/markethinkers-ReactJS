import { ReactSVG } from 'react-svg';
import classes from './CustomRightArrowForStory.module.css';

import CustomRightArrowImg from '../../../assets/Path 16724.svg';

function CustomRightArrowForStory ({onClick}) {
    return (
    <div className={classes.CustomRightArrowForStoryBody}>
        <ReactSVG onClick={() => onClick()} className={classes.customRightArrowImageForStory} src={CustomRightArrowImg} alt='CustomLeftArrow_Image' />
    </div>
    );
}

export default CustomRightArrowForStory;