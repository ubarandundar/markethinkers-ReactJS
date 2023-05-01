import classes from './JsonLdIntro.module.css';

function JsonLdIntro() {
  return (
    <>
        <header className={classes.jsonLdIntroHeader}>
            json-ld FAQ schema generator
        </header>
        <header className={classes.jsonLdIntroHeaderSub}>
            You can easily prepare questions and
            <br />
            answers.
        </header>
    </>
  )
}
export default JsonLdIntro;