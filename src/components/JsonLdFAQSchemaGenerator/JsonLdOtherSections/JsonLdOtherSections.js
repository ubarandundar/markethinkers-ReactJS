import FAQCard from '../../FAQ/FAQCard/FAQCard';
import GrowWithUs from '../../Home/GrowWithUs/GrowWithUs';
import classes from './JsonLdOtherSections.module.css';

function JsonLdOtherSections() {
  return (
    <>
        <GrowWithUs changeMarginBottom={true} />
        <header className={classes.JsonLdOtherSectionsHeader}>
            frequently asked question
        </header>
        <FAQCard />
    </>
  )
}

export default JsonLdOtherSections;