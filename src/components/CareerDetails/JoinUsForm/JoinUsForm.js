import React, { useState } from 'react';
import classes from './JoinUsForm.module.css';

import EnvelopeImg from '../../../assets/email_marketing.png';

function JoinUsForm() {
    const [enteredName, setEnteredName] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredportfolioURL, setEnteredPortfolioURL] = useState('');
    const [enteredCV, setEnteredCV] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const formSendingHandler = () => {
        console.log(enteredName);
        console.log(enteredPhone);
        console.log(enteredEmail);
        console.log(enteredportfolioURL);
        console.log(enteredCV);
        console.log(enteredMessage);
    }

    const formContinueHandler = (event) => {
        event.preventDefault();
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const phoneInputChangeHandler = (event) => {
        setEnteredPhone(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const portfolioURLInputChangeHandler = (event) => {
        setEnteredPortfolioURL(event.target.value);
    };

    const CVInputChangeHandler = (event) => {
        setEnteredCV(event.target.value);
    };
    
    const messageInputChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    };

  return (
    <div className='container'>
        <header className={classes.joinUsFormHeader}>
            join us
        </header>
        <form className={classes.joinUsFormBody} onSubmit={formContinueHandler}>
                <div className={'container'}>
                    <div className={'row'}>
                    <div className={'col-4'}>
                        <img className={`img-fluid ${classes.contactFormSectionImage}`} src={EnvelopeImg} alt='Envelope_Image' />
                    </div>
                    <div className={'col-8'}>
                        <div className={'row'}>
                            <div className={'col-sm-12 d-flex mb-4 mt-4'}>
                                <input onChange={nameInputChangeHandler} value={enteredName} className={classes.contactFormSectionInputName} type='text' placeholder='Full Name' minLength="1" maxLength="50" />
                            </div>
                            <div className={'col-sm-12 d-flex mb-4'}>
                                <div className={'col-sm-6'}>
                                    <input onChange={phoneInputChangeHandler} value={enteredPhone} className={classes.contactFormSectionInputName} type='text' placeholder='Your Phone' minLength="1" maxLength="50" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input onChange={emailInputChangeHandler} value={enteredEmail} className={classes.contactFormSectionInputEmail} type='email' placeholder='Your E-mail' minLength="1" maxLength="50" />
                                </div>
                            </div>
                            <div className={'col-sm-12 d-flex mb-4'}>
                                <div className={'col-sm-6'}>
                                    <input onChange={portfolioURLInputChangeHandler} value={enteredportfolioURL} className={classes.contactFormSectionInputCompanyName} type='text' placeholder='Portfolio URL' minLength="1" maxLength="50" />
                                </div>
                                <div className={'col-sm-6'}>  
                                    <input onChange={CVInputChangeHandler} value={enteredCV} className={classes.contactFormSectionInputPhone} type='text' placeholder='Add Your CV' minLength="1" maxLength="50" />
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
  )
}

export default JoinUsForm;