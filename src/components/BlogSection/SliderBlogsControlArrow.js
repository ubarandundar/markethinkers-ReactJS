import classes from './SliderBlogsControlArrow.module.css';

import SliderEffectBodyArrow from '../../assets/Path 16724.svg';

function SliderBlogControlArrow (props) {
    return (
            <div className={classes.sliderEffectBody}>
                    <div className={classes.sliderEffectBodySub}>
                        <div className={classes.sliderEffectBodySubOne}></div>
                        <div className={classes.sliderEffectBodySubTwo}></div>
                    </div>
                        <button type='button'>
                            <img src={SliderEffectBodyArrow} alt='sliderEffectBodyArrow' /> 
                        </button>
            </div>
    );
}

export default SliderBlogControlArrow;