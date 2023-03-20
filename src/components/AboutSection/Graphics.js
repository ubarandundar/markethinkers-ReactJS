import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import classes from './Graphics.module.css';
import GraphicSampleImg from '../../assets/graphic-sample.png';

function Graphics ({onClickHandler, isSelected, index, label}) {
    return (
      <div className='container'>
        <div className={classes.graphicsBody}>
              <Carousel
              showArrows={false}
              autoPlay={true}
              interval={4000}
              stopOnHover={false}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
              transitionTime='1000'
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = {
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  borderRadius: '6px',
                  opacity: '0.5',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                  boxShadow: 'none',
                  background: 'white',
                  marginRight: '6px',
                  cursor: 'pointer'
                };
                const style = isSelected
                  ? { ...defStyle, 
                    width: '24px',
                    opacity: '1',
                    background: 'white'
                  }: { ...defStyle };
                return (
                  <span
                    style={style}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                  >
                    {/* {"cust " + index} */}
                  </span>
                );
              }}
              >
                <div className={classes.graphicsBodySub}>
                  <div className={classes.graphicsBodySubFirstRow}>
                    <span className={classes.graphicsBodySubNum}>+ %113,31</span>
                    <header className={classes.graphicsBodySubHeader}>organik trafik</header>
                  </div>
                  <div className={classes.graphicsBodySubSecondRow}>
                    <span className={classes.graphicsBodySubNum}>+ %328,98</span>
                    <header className={classes.graphicsBodySubHeader}>organik gelir</header>
                  </div>
                  <div className={classes.graphicsBodySubThirdRow}>
                    <div className={classes.graphicsBodySubThirdRowFirstColumn}>
                      <span className={classes.graphicsBodySubNumSub}>+ %47,98</span>
                      <header className={classes.graphicsBodySubHeader}>dönüşüm</header>
                    </div>
                    <div className={classes.graphicsBodySubThirdRowSecondColumn}>
                      <span className={classes.graphicsBodySubNumSub}>+ %1708,08</span>
                      <header className={classes.graphicsBodySubHeader}>ROI</header>
                    </div>
                  </div>
                  <div className={classes.graphicsBodySubFourthRow}>
                    <img className={classes.graphicSampleImg} src={GraphicSampleImg} alt='GraphicSample_Image' />
                  </div>
                </div>
                
                <div className={classes.graphicsBodySub}>
                  <div className={classes.graphicsBodySubFirstRow}>
                    <span className={classes.graphicsBodySubNum}>+ %108,56</span>
                    <header className={classes.graphicsBodySubHeader}>organik trafik</header>
                  </div>
                  <div className={classes.graphicsBodySubSecondRow}>
                    <span className={classes.graphicsBodySubNum}>+ %299,48</span>
                    <header className={classes.graphicsBodySubHeader}>organik gelir</header>
                  </div>
                  <div className={classes.graphicsBodySubThirdRow}>
                    <div className={classes.graphicsBodySubThirdRowFirstColumn}>
                      <span className={classes.graphicsBodySubNumSub}>+ %53,65</span>
                      <header className={classes.graphicsBodySubHeader}>dönüşüm</header>
                    </div>
                    <div className={classes.graphicsBodySubThirdRowSecondColumn}>
                      <span className={classes.graphicsBodySubNumSub}>+ %1649,14</span>
                      <header className={classes.graphicsBodySubHeader}>ROI</header>
                    </div>
                  </div>
                  <div className={classes.graphicsBodySubFourthRow}>
                    <img className={classes.graphicSampleImg} src={GraphicSampleImg} alt='GraphicSample_Image' />
                  </div>
                </div>

                <div className={classes.graphicsBodySub}>
                  <div className={classes.graphicsBodySubFirstRow}>
                    <span className={classes.graphicsBodySubNum}>+ %113,31</span>
                    <header className={classes.graphicsBodySubHeader}>organik trafik</header>
                  </div>
                  <div className={classes.graphicsBodySubSecondRow}>
                    <span className={classes.graphicsBodySubNum}>+ %328,98</span>
                    <header className={classes.graphicsBodySubHeader}>organik gelir</header>
                  </div>
                  <div className={classes.graphicsBodySubThirdRow}>
                    <div className={classes.graphicsBodySubThirdRowFirstColumn}>
                      <span className={classes.graphicsBodySubNumSub}>+ %47,98</span>
                      <header className={classes.graphicsBodySubHeader}>dönüşüm</header>
                    </div>
                    <div className={classes.graphicsBodySubThirdRowSecondColumn}>
                      <span className={classes.graphicsBodySubNumSub}>+ %1708,08</span>
                      <header className={classes.graphicsBodySubHeader}>ROI</header>
                    </div>
                  </div>
                  <div className={classes.graphicsBodySubFourthRow}>
                    <img className={classes.graphicSampleImg} src={GraphicSampleImg} alt='GraphicSample_Image' />
                  </div>
                </div>
            </Carousel>
        </div>
      </div>
    );
}

export default Graphics;