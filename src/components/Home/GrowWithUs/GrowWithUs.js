import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './GrowWithUs.module.css';
import GrowWithUsImg from '../../../assets/100001.png';

function GrowWithUs ({changeMarginBottom}) {
    const [isVisible, setIsVisible] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const [enteredWebsite, setEnteredWebsite] = useState('');
    const [enteredWebsiteTouched, setEnteredWebsiteTouched] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const nodeRef = useRef(null);

    const expandClickHandler = () => {
        setIsVisible(true);
        setShowTransition(true);
    };

    const formSendingHandler = () => {
        console.log(enteredWebsite);
        console.log(enteredName);
        console.log(enteredEmail);
        console.log(selectedOption);
        console.log(enteredPhone);
        console.log(enteredMessage);
    }

    const formContinueHandler = (event) => {
        event.preventDefault();
        setEnteredWebsiteTouched(false);
    }

    const enteredWebsiteIsValid = enteredWebsite.includes('http://') || enteredWebsite.includes('https://');
    const enteredWebsiteIsInvalid = !enteredWebsiteIsValid && enteredWebsiteTouched;

    let websiteIsValid = false;

    if (enteredWebsiteIsValid) {
      websiteIsValid = true;
    }

    const websiteInputChangeHandler = (event) => {
        setEnteredWebsite(event.target.value);
      };

    const websiteInputBlurHandler = (event) => {
        setEnteredWebsiteTouched(true);
    };

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const selectOptionChangeHandler = (event) => {
        setSelectedOption(event.target.value);
    };

    const phoneInputChangeHandler = (event) => {
        setEnteredPhone(event.target.value);
    };
    
    const messageInputChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    };

    return (
    <div className='container'>
        <div style={changeMarginBottom ? {height: 'auto'} : {}} className={classes.GrowWithUsSectionBody}>
            <form className={isVisible ? classes.GrowWithUsCardToggle : classes.GrowWithUsCard} onSubmit={formContinueHandler}>
                <div className={'container'}>
                <div className={'row d-flex align-items-center'}>
                    <div className={'col-4'}>
                        <p className={classes.GrowWithUsParagDefault}>
                        do you want to grow with us?
                        </p>
                    </div>
                    <div className={'col-8 position-relative'}>
                        <input onChange={websiteInputChangeHandler} onBlur={websiteInputBlurHandler} value={enteredWebsite} className={enteredWebsiteIsInvalid ? classes.GrowWithUsInputDefaultInvalid :classes.GrowWithUsInputDefault} type='text' placeholder='Your Website URL' minLength="1" maxLength="50" />
                        <button className={classes.continueButton} onClick={expandClickHandler} type='submit' disabled={!websiteIsValid}>continue</button>      
                    </div>
                 </div>
                <CSSTransition nodeRef={nodeRef} in={showTransition} timeout={1500} classNames={'formTransition'}>
                    <div className={isVisible ? 'row' : 'row d-none'} ref={nodeRef}>
                    <div className={'col-4'}>
                        <p className={classes.GrowWithUsParagActive}>
                            You can send us your questions and requests
                            about the services we offer as Markethinkers SEO 
                            and Content Agency via this form.
                        </p>
                        <img className={classes.GrowWithUsImage} src={GrowWithUsImg} alt='GrowWithUs_Image' />
                    </div>
                    <div className={'col-8'}>
                        <div className={'row'}>
                            <div className='col-sm-12 d-flex mb-4 mt-4'>
                                <div className='col-sm-6'>
                                    <input onChange={nameInputChangeHandler} value={enteredName} className={classes.GrowWithUsInputName} type='text' placeholder='Full Name' minLength="1" maxLength="50" />
                                </div>
                                <div className='col-sm-6'>
                                    <input onChange={emailInputChangeHandler} value={enteredEmail} className={classes.GrowWithUsInputEmail} type='email' placeholder='Your E-mail' minLength="1" maxLength="50" />
                                </div>
                            </div>
                            <div className='col-sm-12 d-flex mb-4'>
                                <div className='col-sm-6 position-relative'>
                                    <select onChange={selectOptionChangeHandler} value={selectedOption} className={classes.GrowWithUsSelectOption} name="choice">
                                        <option defaultValue="default">Service You are Interested in...</option>
                                        <option value="second">Second Value</option>
                                        <option value="third">Third Value</option>
                                     </select>
                                </div>
                                <div className='col-sm-6'>  
                                    <input onChange={phoneInputChangeHandler} value={enteredPhone} className={classes.GrowWithUsInputYourPhone} type='text' placeholder='Your Phone' minLength="1" maxLength="50" />
                                </div>  
                            </div>
                            <div className='col-sm-12 mb-4 position-relative'> 
                                <textarea onChange={messageInputChangeHandler} value={enteredMessage}className={classes.GrowWithUsTextArea} placeholder='Your Message' minLength="1" maxLength="260" />
                                <button onClick={formSendingHandler} className={classes.sendButton} type='submit'>send</button>  
                            </div>
                            <div className='col-sm-12 mb-4'>
                                <div className={'d-flex align-items-center'}>
                                    <input className={classes.GrowWithUsCheckbox} type="checkbox" id="grow" name="scales" />
                                    <label className={classes.GrowWithUsCheckboxLabel} htmlFor="scales">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                    </label>
                                </div>
                                <div className={'d-flex align-items-center'}>
                                    <input className={classes.GrowWithUsCheckbox} type="checkbox" id="grow" name="scales" />
                                    <label className={classes.GrowWithUsCheckboxLabel} htmlFor="scales">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua sed do eiusmod.
                                </label>
                            </div>
                    </div>   
                        </div>
                    </div>
                    </div>
                </CSSTransition>
                </div>
            </form>
         </div>
    </div>
    );
}

export default GrowWithUs;