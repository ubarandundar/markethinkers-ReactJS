import Draggable from 'react-draggable';
import classes from './JsonLdCard.module.css';

import JsonLdCardMoveImage from '../../../assets/move.png';
import JsonLdCardXImage from '../../../assets/Group 239-1.png';

const SchemaDefaultValue = 
    '<script type="application/ld+json">' + '\r\n' + 
    '{' + '\r\n' + 
    '    "@context": "https://schema.org",' + '\r\n' + 
    '    "@type": "FAQPage",' + '\r\n' + 
    '    "mainEntity": []' + '\r\n' + 
    '}' + '\r\n' + 
    '</script><!-- This Json-ld FAQ Schema code generated by' + '\r\n' + 
    'markethinkers.com -->';

function JsonLdCard() {
  return (
    <div className='row'>
        <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        // onStart={handleStart}
        // onDrag={handleDrag}
        // onStop={handleStop}
        >
        <div className='col-5'>
            <header className={classes.jsonLdCardQuestionHeader}>
                FAQ's
            </header>
            <div className={classes.jsonLdCardQuestionCardBody}>
                <div className={classes.jsonLdCardXImageBody}>
                    <img className={classes.jsonLdCardXImage} src={JsonLdCardXImage} alt='JsonLdCardXImage' />
                </div>
                <div>
                    <img className={classes.jsonLdCardMoveImage} src={JsonLdCardMoveImage} alt='JsonLdCardMoveImage' />
                </div>
                <div className={classes.jsonLdCardInputBody}>
                    <input className={classes.jsonLdCardInputQuestion} type='text' placeholder='Question 1' />
                    <input className={classes.jsonLdCardInputAnswer} type='text' placeholder='Answer 1' />
                </div>
                <button type='button'>
                    Add New Question & Answer
                </button>
            </div>
        </div>
        </Draggable>
        <div className='col-7'>
            <div className={classes.jsonLdCodeCardBody}>
                <div className='d-flex flex-row justify-content-between'>
                    <header>
                        JSON-LD FAQ Schema Code
                    </header>
                    <div className={classes.jsonLdSwitchArea}>
                        <label className={classes.jsonLdSwitch}>
                            <input className={classes.jsonLdSwitchInput} id='spaces' type='checkbox' />
                            <span className={classes.slider}></span>
                        </label>
                        <label>
                            Minify
                        </label>
                    </div>
                </div>
                <hr />
                <textarea defaultValue={SchemaDefaultValue}>
                </textarea>
                <hr />
                <button className={classes.copyFAQSchemaButton} type='button'>
                    Copy FAQ Schema
                </button>
                <button className={classes.testWithSDTTButton} type='button'>
                    Test with SDTT
                </button>
                <button className={classes.transfromToTMFButton} type='button'>
                    Transform to TMF
                </button>
            </div>
        </div>
    </div>
  )
}

export default JsonLdCard;