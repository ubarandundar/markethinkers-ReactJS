import classes from './WordCounterCard.module.css';

function WordCounterCard() {
  return (
    <div className={classes.wordCounterBody}>
        <div style={{marginBottom: '30px'}} className='d-flex flex-row justify-content-between'>
            <header className={classes.wordCounterBodyHeader}>
                Word Counter
            </header>
            <div className={classes.wordCounterSwitchArea}>
                <label className={classes.wordCounterSwitch}>
                    <input className={classes.wordCounterSwitchInput} id='spaces' type='checkbox' />
                    <span className={classes.slider}></span>
                </label>
                <label htmlFor='spaces' name='spaces' min="0" max="10" step='1' className={classes.wordCounterSwitchHeader}>
                    Spaces Included
                </label>
            </div>
        </div>
        <div className='row'>
            <div className='col-5'>
                <div className={classes.focusKeywordBody}>
                    <label htmlFor='focus-keyword'>
                        Focus Keyword:
                    </label>
                    <input id='focus-keyword' name='focus-keyword' type='text' placeholder='Enter the keyword you will focus on.' />
                </div>
            </div>
            <div className='col-7'>
                <div className={classes.relevantKeywordsBody}>
                    <label htmlFor='relevant-keyword'>
                        Relevant Keywords:
                    </label>
                    <input id='relevant-keyword' name='relevant-keyword' type='text' placeholder='Please write the relevant keywords separated by commas.' />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                <textarea className={classes.wordCounterTextarea} name="textarea" minlength="10" maxlength="20">
                    Type or paste your content here.
                </textarea>
            </div>
        </div>
        <hr />
        <div className={classes.wordCounterAnalysisBody}>
            <header>
                Analysis Results
            </header>
            <div style={{marginBottom: '20px'}} className='row'>
                <div className='col-6'>
                    <div className={classes.wordCounterAnalysisBodySub}>
                        <header>
                            Character Count :
                        </header>
                        <div>
                            -
                        </div>
                    </div>    
                </div>
                <div className='col-6'>
                    <div className={classes.wordCounterAnalysisBodySub}>
                        <header>
                            Focus Keywod Mentioned :
                        </header>
                        <div>
                            - times in the content.
                        </div>
                    </div>    
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <div className={classes.wordCounterAnalysisBodySub}>
                        <header>
                            Word Count :
                        </header>
                        <div>
                            -
                        </div>
                    </div>    
                </div>
                <div className='col-6'>
                    <div className={classes.wordCounterAnalysisBodySub}>
                        <header>
                            Keyword Density :
                        </header>
                        <div>
                            -
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WordCounterCard