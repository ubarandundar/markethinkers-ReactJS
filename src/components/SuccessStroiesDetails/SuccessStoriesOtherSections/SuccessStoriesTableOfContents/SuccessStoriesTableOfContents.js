import { ReactSVG } from "react-svg";
import classes from './SuccessStoriesTableOfContents.module.css';

import ForwardArrow from '../../../../assets/Group 34.svg';
import ForwardArrowGray from '../../../../assets/Group 34-gray.svg';

function SuccessStoriesTableOfContents() {
  return (
    <div className={classes.successStoriesTableOfContentsBody}>
        <div className='row'>
            <div className='col-5'></div>
            <div className='col-7'>
                <header className={classes.successStoriesTableOfContentsTitle}>
                    table of contents
                </header>
                <hr />
                <div className={classes.successStoriesTableOfContentsBoldArea}>
                    <div className={classes.successStoriesTableOfContentsBoldContent}>
                        Lorem ipsum dolor sit amet ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrow} src={ForwardArrow} alt='Forward_Arrow' />
                </div>
                <hr />
                <div className={classes.successStoriesTableOfContentsBoldArea}>
                    <div className={classes.successStoriesTableOfContentsBoldContent}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrow} src={ForwardArrow} alt='Forward_Arrow' />
                </div>
                <hr />
                <div className={classes.successStoriesTableOfContentsLightLargeArea}>
                    <div className={classes.successStoriesTableOfContentsLightLargeContent}>
                        Lorem ipsum dolor sit amet ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrowGray} src={ForwardArrowGray} alt='Forward_ArrowGray' />
                </div>
                <div className={classes.successStoriesTableOfContentsLightSmallArea}>
                    <div className={classes.successStoriesTableOfContentsLightSmallContent}>
                        Lorem ipsum dolor sit amet ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrowGray} src={ForwardArrowGray} alt='Forward_ArrowGray' />
                </div>
                <div className={classes.successStoriesTableOfContentsLightSmallArea}>
                    <div className={classes.successStoriesTableOfContentsLightSmallContent}>
                        Lorem ipsum dolor sit amet ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrowGray} src={ForwardArrowGray} alt='Forward_ArrowGray' />
                </div>
                <hr />
                <div className={classes.successStoriesTableOfContentsBoldArea}>
                    <div className={classes.successStoriesTableOfContentsBoldContent}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrow} src={ForwardArrow} alt='Forward_Arrow' />
                </div>
                <hr />
                <div className={classes.successStoriesTableOfContentsBoldArea}>
                    <div className={classes.successStoriesTableOfContentsBoldContent}>
                        Lorem ipsum dolor sit amet ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrow} src={ForwardArrow} alt='Forward_Arrow' />
                </div>
                <div style={{marginTop: '20px'}} className={classes.successStoriesTableOfContentsLightLargeArea}>
                    <div className={classes.successStoriesTableOfContentsLightLargeContent}>
                        Lorem ipsum dolor sit amet ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrowGray} src={ForwardArrowGray} alt='Forward_ArrowGray' />
                </div>
                <hr />
                    <div className={classes.successStoriesTableOfContentsBoldArea}>
                    <div className={classes.successStoriesTableOfContentsBoldContent}>
                        Lorem ipsum dolor sit amet ?
                    </div>
                    <ReactSVG className={classes.successStoriesTableOfContentsArrow} src={ForwardArrow} alt='Forward_Arrow' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessStoriesTableOfContents;