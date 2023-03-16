import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import classes from './Graphics.module.css';

function Graphics (props) {
    return (
      <div className='container'>
        <div className={classes.graphicsBody}>
              <Carousel
              showArrows={false}
              autoPlay={true}
              interval={12000}
              stopOnHover={false}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
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
                </div>

                <div className={classes.graphicsBodySub}>
                    <h1>EMPTY PAGE</h1>
                </div>
            </Carousel>
        </div>
      </div>
    );
}

export default Graphics;