import React, { useState } from 'react';

import classes from './GrowWithUs.module.css';
import GrowWithUsImg from '../../assets/100001.png';

function GrowWithUs (props) {
    const [isVisible, setIsVisible] = useState(false);

    const ExpandClickHandler = () => { 
        setIsVisible(true);
    };

    const confirmHandler = (event) => {
        event.preventDefault();
    }

    return (
    <div className='container'>
        <div className={classes.GrowWithUsSectionBody}>

            <div className={classes.GrowWithUsCardDefault}>
                <div className={classes.GrowWithUsCardDefaultWrapper}>
                    <p className={classes.GrowWithUsParagDefault}>
                    do you want to grow with us?
                    </p>
                </div>
                <div className={classes.GrowWithUsCardDefaultWrapperOther}>
                    <input className={classes.GrowWithUsInputDefault} type='text' placeholder='Your Website URL' />
                    <button className={classes.continueButton} onClick={ExpandClickHandler} type='submit'>continue</button>      
                </div>
            </div>

            {isVisible && <form className={classes.GrowWithUsCardActive} onSubmit={confirmHandler}>

            <div className={classes.GrowWithUsCardActiveFirstRow}>
                <div className={classes.GrowWithUsCardActiveWrapper}>
                    <p className={classes.GrowWithUsParagDefault}>
                    do you want to grow with us?
                    </p>
                    <p className={classes.GrowWithUsParagActive}>
                            You can send us your questions and requests
                            <br />
                            about the services we offer as Markethinkers SEO
                            <br /> 
                            and Content Agency via this form.
                    </p>
                    <img src={GrowWithUsImg} alt='GrowWithU_Image' />
                </div>
                <div className={classes.GrowWithUsCardActiveWrapperOther}>
                    <div className='col-sm-12 mb-4 position-relative'>
                        <input className={classes.GrowWithUsInputDefault} type='text' placeholder='Your Website URL' />
                        <button className={classes.continueButton} type='submit'>continue</button>  
                    </div>
                    <div className='col-sm-12 d-flex mb-4'>
                        <div className='col-sm-6'>
                            <input className={classes.GrowWithUsInputName} type='text' placeholder='Full Name' />
                        </div>
                        <div className='col-sm-6'>
                            <input className={classes.GrowWithUsInputEmail} type='email' placeholder='Your E-mail' />
                        </div>
                    </div>
                    <div className='col-sm-12 d-flex mb-4'>
                        <div className='col-sm-6'>
                            <select className={classes.GrowWithUsSelectOption} name="choice">
                                <option value="first" selected>Service You are Interested in...</option>
                                <option value="second">Second Value</option>
                                <option value="third">Third Value</option>
                            </select>
                        </div>
                        <div className='col-sm-6'>  
                            <input className={classes.GrowWithUsInputYourPhone} type='text' placeholder='Your Phone' />
                        </div>  
                    </div>
                    <div className='col-sm-12 mb-4 position-relative'> 
                        <textarea className={classes.GrowWithUsTextArea} placeholder='Your Message' />
                        <button className={classes.sendButton} type='submit'>send</button>  
                    </div>
                    <div className='col-sm-12 mb-4'>
                        <div>
                            <input className={classes.GrowWithUsCheckbox} type="checkbox" id="grow" name="scales" />
                            <label className={classes.GrowWithUsCheckboxLabel} htmlFor="scales">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </label>
                        </div>
                        <div>
                            <input className={classes.GrowWithUsCheckbox} type="checkbox" id="grow" name="scales" />
                            <label className={classes.GrowWithUsCheckboxLabel} htmlFor="scales">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua sed do eiusmod tempor.
                            </label>
                        </div>
                    </div>        
                </div>
            </div>   
            </form>}
         </div>
    </div>
    );
}

export default GrowWithUs;