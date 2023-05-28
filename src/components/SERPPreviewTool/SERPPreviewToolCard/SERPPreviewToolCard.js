import classes from './SERPPreviewToolCard.module.css';
import './SERPPreviewToolCard.css';

import GoogleImage from '../../../assets/google.png';
import SERPPreviewToolCardBackImg from '../../../assets/Path 16728-2.svg';

function SERPPreviewToolCard() {
  return (
    <>
    <div className='row position-relative'>
        <img className={`img-fluid ${classes.SERPPreviewToolCardBackImg}`} src={SERPPreviewToolCardBackImg} alt='SERPPreviewToolCardBackImg' />
        <div className={`col-md-8 col-lg-8 position-relative ${classes.desktopViewBody} `}>
                <div className={classes.desktopViewBodyTop}>
                    <img className='img-fluid' src={GoogleImage} alt='GoogleImage' />
                    <div className={classes.desktopViewSearchBar}>
                        Desktop View
                    </div>
                    <div className={classes.desktopViewSearchInfo}></div>
                </div>
                <div className={classes.desktopViewBodyBottom}>
                    <div className='d-flex flex-row'>
                        <div className={classes.desktopViewBodyBottomTopBarFirst}></div>
                        <div className={classes.desktopViewBodyBottomTopBarSecond}></div>
                        <div className={classes.desktopViewBodyBottomTopBarThird}></div>
                        <div className={classes.desktopViewBodyBottomTopBarFourth}></div>
                    </div>
                    <div className={classes.desktopViewBodyBottomLine}></div>
                    <div className='d-flex flex-column'>
                        <header className={classes.desktopViewHeader}>
                            Your Awesome SEO Title Here
                        </header>
                        <span className={classes.desktopViewURL}>
                            https://markethinkers.com
                        </span>
                        <span className={classes.desktopViewDescription}>
                            Type a description that informs users about your page, includes keywords and encourages clicks
                        </span>
                    </div>
                    <div className={classes.desktopViewBarFirst}></div>
                    <div className={classes.desktopViewBarSecond}></div>
                    <div className={classes.desktopViewBarThird}></div>
                    <div className={classes.desktopViewBarFourth}></div>
                </div>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4 position-relative'>
                <div className={classes.mobileViewBodyTop}>
                    <img className='img-fluid' src={GoogleImage} alt='GoogleImage' />
                    <div className={classes.mobileViewSearchBar}>
                        Mobile View
                    </div>
                    <div className={classes.mobileViewSearchInfo}></div>
                </div>
                <div className={classes.mobileViewBodyBottom}>
                    <div className='d-flex flex-row'>
                        <div className={classes.mobileViewBodyBottomTopBarFirst}></div>
                        <div className={classes.mobileViewBodyBottomTopBarSecond}></div>
                        <div className={classes.mobileViewBodyBottomTopBarThird}></div>
                        <div className={classes.mobileViewBodyBottomTopBarFourth}></div>
                    </div>
                    <div className={classes.mobileViewBodyGray}>
                        <div className={classes.mobileViewBodyBottomLine}></div>
                        <div className={classes.mobileViewWhiteWrapper}>
                        <header className={classes.mobileViewHeader}>
                            Your Awesome SEO Title Here
                        </header>
                        <span className={classes.mobileViewURL}>
                            https://markethinkers.com
                        </span>
                        <span className={classes.mobileViewDescription}>
                            Type a description that informs users about your page, includes keywords and encourages clicks
                        </span>
                        </div>
                        <div className={classes.mobileViewWhiteWrapper}>
                            <div className={classes.mobileViewBarFirst}></div>
                            <div className={classes.mobileViewBarSecond}></div>
                            <div className={classes.mobileViewBarThird}></div>
                            <div className={classes.mobileViewBarFourth}></div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div className={classes.SERPInputArea}>
        <div className='row'>
            <div className='col-sm-12 col-md-8 col-lg-8'>
                <header>
                    Title
                </header>
                <textarea placeholder='Your Awesome SEO Title Here' />
            </div>
            <div className='col-sm-12 col-md-4 col-lg-4 d-flex flex-row'>
                <div className='d-flex flex-column'>
                    <header className={classes.SERPDesktopCounterHeader}>
                        Desktop
                    </header>
                    <div className={classes.SERPDesktopCounter}>
                        <div className={classes.SERPMobileCounterPx}>
                            0 / 600 Pixels
                        </div>
                        <div>
                            0 / 78 Character
                        </div>
                    </div>
                    <span className={classes.SERPDesktopCounterError}>
                        Error Message
                    </span>
                </div>
                <div className='d-flex flex-column'>
                    <header className={classes.SERPMobileCounterHeader}>
                        Mobile
                    </header>
                    <div className={classes.SERPMobileCounter}>
                        <div className={classes.SERPMobileCounterPx}>
                            0 / 600 Pixels
                        </div>
                        <div>
                            0 / 78 Character
                        </div>
                    </div>
                    <span className={classes.SERPMobileCounterError}>
                        Error Message
                    </span>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-md-8 col-lg-8'>
                <header>
                    Meta Description
                </header>
                <textarea placeholder='Your Awesome Type a description that informs users about your page, includes keywords and encourages clicks' />
            </div>
            <div className='col-sm-12 col-md-4 col-lg-4 d-flex flex-row'>
                <div className='d-flex flex-column'>
                    <header className={classes.SERPDesktopCounterHeader}>
                        Desktop
                    </header>
                    <div className={classes.SERPDesktopCounter}>
                        <div className={classes.SERPMobileCounterPx}>
                            0 / 1750 Pixels
                        </div>
                        <div>
                            0 / 155 Character
                        </div>
                    </div>
                    <span className={classes.SERPDesktopCounterError}>
                        Error Message
                    </span>
                </div>
                <div className='d-flex flex-column'>
                    <header className={classes.SERPMobileCounterHeader}>
                        Mobile
                    </header>
                    <div className={classes.SERPMobileCounter}>
                        <div className={classes.SERPMobileCounterPx}>
                            0 / 680 Pixels
                        </div>
                        <div>
                            0 / 120 Character
                        </div>
                    </div>
                    <span className={classes.SERPMobileCounterError}>
                        Error Message
                    </span>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6 d-flex flex-column'>
                <header>
                    URL
                </header>
                <input className={classes.SERPInputURL} type='url' placeholder='https://markethinkers.com' />
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 d-flex flex-column'>
                <header>
                    Bold Keywords
                </header>
                <input className={classes.SERPInputBold} type='url' placeholder='Type separated by commas.' />
            </div>
        </div>
        <div className='row'>
            <div className={classes.SERPOptions}>
                <div id='custom-radio-button' className={classes.SERPOptionsBody}>
                    <input id='standart-view' type='radio' />
                    <span class="checkmark"></span>
                    <label className={classes.SERPLabels} htmlFor='standart-view'>Standart View</label>
                </div>
                <div style={{marginLeft: '40px'}} className={classes.SERPOptionsBody}>
                    <input id='visual-view' type='radio' />
                    <label className={classes.SERPLabels} htmlFor='visual-view'>Visual Containing View</label>
                </div>
                <div style={{marginLeft: '40px'}} className={classes.SERPOptionsBody}>
                    <input id='video-view' type='radio' />
                    <label className={classes.SERPLabels} htmlFor='video-view'>Video Containing View</label>
                </div>
            </div>
            <div className={classes.SERPOtherOptions}>
                <div className={classes.SERPOtherOptionsBody}>
                    <input className={classes.SERPOtherOptionsCheckbox} id='add-date' type='checkbox' />
                    <label className={classes.SERPLabelsOther} htmlFor='add-date'>Add Date <span>(Affects the length of the meta description.)</span></label>
                </div>
                <div style={{marginLeft: '40px'}} className={classes.SERPOtherOptionsBody}>
                    <input className={classes.SERPOtherOptionsCheckbox} id='product-schema' type='checkbox' />
                    <label className={classes.SERPLabelsOther} htmlFor='product-schema'>Product Schema</label>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SERPPreviewToolCard;