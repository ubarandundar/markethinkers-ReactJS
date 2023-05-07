import classes from './ContactFAQSection.module.css';
import FAQSectionBackUpImg from '../../../assets/Path 16821.svg';
import FAQSectionBackDownImg from '../../../assets/Path 16820.svg';
import FAQCardSelections from '../../FAQ/FAQCard/FAQCardSelections';

function ContactFAQSection() {

  return (
    <div className={`container ${classes.contactFormSectionWrapper}`}>
        <div className={classes.contactFAQSectionTextArea}>
            <header className={classes.contactFAQSectionHeader}>
                FAQ
            </header>
            <p className={classes.contactFAQSectionParag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            <br />
            labore et dolore magna aliqua. Varius morbi enim nunc faucibus.
            </p>
        </div>
        <div>
            <img className={classes.FAQSectionBackUpImg} src={FAQSectionBackUpImg} alt='FAQSectionBackUp_Image' />
            <img className={classes.FAQSectionBackDownImg} src={FAQSectionBackDownImg} alt='FAQSectionBackDown_Image' />
            <FAQCardSelections changeBorderRadius={true} />
        </div>
    </div>
  )
}

export default ContactFAQSection;