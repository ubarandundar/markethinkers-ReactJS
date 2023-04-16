import { Fragment } from 'react';
import ContactFormSection from './ContactFormSection/ContactFormSection';
import ContactHelpSection from './ContactHelpSection/ContactHelpSection';
import ContactFAQSection from './ContactFAQSection/ContactFAQSection';
import GoogleMapSection from './GoogleMapSection/GoogleMapSection';

function Contact() {
  return (
    <Fragment>
      <ContactHelpSection />
      <GoogleMapSection />
      <ContactFormSection />
      <ContactFAQSection />
    </Fragment>
  )
}

export default Contact;