import React, { useState } from 'react';

import classes from './GrowWithUs.module.css';
import GrowWithUsImg from '../../assets/100001.png';

function GrowWithUs (props) {
    const [isVisible, setIsVisible] = useState(false);

    const ExpandClickHandler = () => { 
        setIsVisible(true);
    };

    const formContinueHandler = (event) => {
        event.preventDefault();
        setEnteredWebsiteTouched(false);
        console.log(enteredWebsite);
    }

    const [enteredWebsite, setEnteredWebsite] = useState('');
    const [enteredWebsiteTouched, setEnteredWebsiteTouched] = useState(false);

    const enteredWebsiteIsValid = enteredWebsite.includes('http://');
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
    
    return (
    <div className='container'>
        <div className={classes.GrowWithUsSectionBody}>
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
                        <button className={classes.continueButton} onClick={ExpandClickHandler} type='submit' disabled={!websiteIsValid}>continue</button>      
                    </div>
                 </div>
                 {isVisible && <div className={'row'}>
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
                                    <input className={classes.GrowWithUsInputName} type='text' placeholder='Full Name' minLength="1" maxLength="50" />
                                </div>
                                <div className='col-sm-6'>
                                    <input className={classes.GrowWithUsInputEmail} type='email' placeholder='Your E-mail' minLength="1" maxLength="50" />
                                </div>
                            </div>
                            <div className='col-sm-12 d-flex mb-4'>
                                <div className='col-sm-6 position-relative'>
                                    <select className={classes.GrowWithUsSelectOption} name="choice">
                                        <option value="first" selected>Service You are Interested in...</option>
                                        <option value="second">Second Value</option>
                                        <option value="third">Third Value</option>
                                     </select>
                                </div>
                                <div className='col-sm-6'>  
                                    <input className={classes.GrowWithUsInputYourPhone} type='text' placeholder='Your Phone' minLength="1" maxLength="50" />
                                </div>  
                            </div>
                            <div className='col-sm-12 mb-4 position-relative'> 
                                <textarea className={classes.GrowWithUsTextArea} placeholder='Your Message' minLength="1" maxLength="260" />
                                <button className={classes.sendButton} type='submit'>send</button>  
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
                                </label>
                            </div>
                    </div>   
                        </div>
                    </div>
                 </div>}
                </div>
            </form>
         </div>
    </div>
    );
}

export default GrowWithUs;