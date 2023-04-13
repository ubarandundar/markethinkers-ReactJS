import React, { useState } from 'react';

import classes from './ContactFormSection.module.css';
import EnvelopeImg from '../../../assets/email_marketing.png';
import ContactFormSectionBackImg from '../../../assets/Path 16846.png';

function ContactFormSection (props) {

    const ContactFormData = [
        {   
            belongsTo: 'Support',
            firstContent: 'Support: Whether you have a question about Markethinkers, a feature',
            secondContent: 'request, or anything else, our team is ready to help!',
        },
        {   
            belongsTo: 'Sales',
            firstContent: 'Sales: Whether you have a question about Markethinkers, a feature',
            secondContent: 'request, or anything else, our team is ready to help!',
        },
        {   
            belongsTo: 'Think for Edu',
            firstContent: 'Think for Edu: Whether you have a question about Markethinkers, a feature',
            secondContent: 'request, or anything else, our team is ready to help!',
        },
        {   
            belongsTo: 'Cons Net',
            firstContent: 'Cons Net: Whether you have a question about Markethinkers, a feature',
            secondContent: 'request, or anything else, our team is ready to help!',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredCompanyName, setEnteredCompanyName] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const contentHandler = (currentIndex) => {
        setCurrentIndex(currentIndex);
    };

    const formSendingHandler = () => {
        console.log(enteredName);
        console.log(enteredEmail);
        console.log(enteredCompanyName);
        console.log(enteredPhone);
        console.log(enteredMessage);
    }

    const formContinueHandler = (event) => {
        event.preventDefault();
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const companyNameInputChangeHandler = (event) => {
        setEnteredCompanyName(event.target.value);
    };

    const phoneInputChangeHandler = (event) => {
        setEnteredPhone(event.target.value);
    };
    
    const messageInputChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    };

    return (
    <div className={'container'}>
        <img className={classes.contactFormSectionBackImg} src={ContactFormSectionBackImg} alt='contactHelpBack_Image' />
        <div className={classes.contactFormSectionBody}>
            <div className={'container'}>
                    <div className={'row'}>
                        <div className={classes.contactFormSectionDep}>
                            <button onClick={() => contentHandler(0)} type="button" className={currentIndex === 0 ? classes.contactFormSectionButtonsActive: classes.contactFormSectionButtons}>Support</button>
                            <button onClick={() => contentHandler(1)} type="button" className={currentIndex === 1 ? classes.contactFormSectionButtonsActive: classes.contactFormSectionButtons}>Sales</button>
                            <button onClick={() => contentHandler(2)}type="button" className={currentIndex === 2 ? classes.contactFormSectionButtonsActive: classes.contactFormSectionButtons}>Thnikers for Education</button>
                            <button onClick={() => contentHandler(3)} type="button" className={currentIndex === 3 ? classes.contactFormSectionButtonsActive: classes.contactFormSectionButtons}>Consultant Network</button>
                        </div>
                    </div>
            </div>
            <form className={classes.contactFormSectionCard} onSubmit={formContinueHandler}>
                <div className={'container'}>
                <div className={'row d-flex align-items-center'}>
                    <div className={'col-4'}>
                    </div>
                    <div className={'col-8'}>
                    {ContactFormData[currentIndex] && <div className={classes.contactFormSectionParag}>
                        {ContactFormData[currentIndex].firstContent}
                        <br />
                        {ContactFormData[currentIndex].secondContent}
                        </div>}    
                    </div>
                 </div>
                    <div className={'row'}>
                    <div className={'col-4'}>
                        <img className={classes.contactFormSectionImage} src={EnvelopeImg} alt='Envelope_Image' />
                    </div>
                    <div className={'col-8'}>
                        <div className={'row'}>
                            <div className={'col-sm-12 d-flex mb-4 mt-4'}>
                                <div className={'col-sm-6'}>
                                    <input onChange={nameInputChangeHandler} value={enteredName} className={classes.contactFormSectionInputName} type='text' placeholder='Full Name' minLength="1" maxLength="50" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input onChange={emailInputChangeHandler} value={enteredEmail} className={classes.contactFormSectionInputEmail} type='email' placeholder='Your E-mail' minLength="1" maxLength="50" />
                                </div>
                            </div>
                            <div className={'col-sm-12 d-flex mb-4'}>
                                <div className={'col-sm-6'}>
                                    <input onChange={companyNameInputChangeHandler} value={enteredCompanyName} className={classes.contactFormSectionInputCompanyName} type='text' placeholder='Company Name' minLength="1" maxLength="50" />
                                </div>
                                <div className={'col-sm-6'}>  
                                    <input onChange={phoneInputChangeHandler} value={enteredPhone} className={classes.contactFormSectionInputPhone} type='text' placeholder='Your Phone' minLength="1" maxLength="50" />
                                </div>  
                            </div>
                            <div className={'col-sm-12 mb-4 position-relative'}> 
                                <textarea onChange={messageInputChangeHandler} value={enteredMessage}className={classes.contactFormSectionTextArea} placeholder='Your Message' minLength="1" maxLength="260" />
                                <button onClick={formSendingHandler} className={classes.sendButton} type='submit'>send</button>  
                            </div>
                            <div className={'col-sm-12 mb-4'}>
                                <div className={'d-flex align-items-center'}>
                                    <input className={classes.contactFormSectionCheckbox} type="checkbox" id="grow" name="scales" />
                                    <label className={classes.contactFormSectionCheckboxLabel} htmlFor="scales">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </label>
                                </div>
                                <div className={'d-flex align-items-center'}>
                                    <input className={classes.contactFormSectionCheckbox} type="checkbox" id="grow" name="scales" />
                                    <label className={classes.contactFormSectionCheckboxLabel} htmlFor="scales">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua sed do eiusmod.
                                    </label>
                            </div>
                    </div>   
                        </div>
                    </div>
                    </div>
                </div>
            </form>
         </div>
    </div>
    );
}

export default ContactFormSection;