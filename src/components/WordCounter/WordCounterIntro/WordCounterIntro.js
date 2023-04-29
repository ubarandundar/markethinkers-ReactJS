import classes from './WordCounterIntro.module.css';

function WordCounterIntro() {
  return (
    <>
        <header className={classes.wordCounterHeader}>
            Word Counter
        </header>
        <header className={classes.wordCounterHeaderSub}>
            You can now prepare your texts
            <br />
            professionally!
        </header>
    </>
  )
}

export default WordCounterIntro;