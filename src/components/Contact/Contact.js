import { Fragment } from 'react';
import ContactFormSection from './ContactFormSection/ContactFormSection';
import ContactHelpSection from './ContactHelpSection/ContactHelpSection';
import FAQSection from './FAQSection/FAQSection';
import GoogleMapSection from './GoogleMapSection/GoogleMapSection';

function Contact() {
  return (
    <Fragment>
      <ContactHelpSection />
      <GoogleMapSection />
      <ContactFormSection />
      <FAQSection />
    </Fragment>
  )
}

export default Contact;