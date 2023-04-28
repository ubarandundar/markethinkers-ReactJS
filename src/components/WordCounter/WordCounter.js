import classes from './WordCounter.module.css';
import WordCounterCard from './WordCounterCard/WordCounterCard';

function WordCounter() {
  return (
    <div className='container'>
        <header className={classes.wordCounterHeader}>
            Word Counter
        </header>
        <header className={classes.wordCounterHeaderSub}>
            You can now prepare your texts
            <br />
            professionally!
        </header>
        <WordCounterCard />
    </div>
  )
}

export default WordCounter;