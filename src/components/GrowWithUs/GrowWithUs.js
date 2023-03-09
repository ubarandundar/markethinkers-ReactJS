// import React, { useState } from 'react';

import classes from './GrowWithUs.module.css';
import GrowWithUsImg from '../../assets/100001.png';

function GrowWithUs (props) {
    // const [isVisible, setIsVisible] = useState(false);

    // function clickHandler () {
    //     setIsVisible(true);
    // };

    return (
        <div className={classes.GrowWithUsSectionBody}>

            <div className={classes.GrowWithUsCardDefault}>
                <div className={classes.GrowWithUsCardDefaultWrapper}>
                    <p className={classes.GrowWithUsParagDefault}>
                    do you want to grow with us?
                    </p>
                </div>
                <div className={classes.GrowWithUsCardDefaultWrapperOther}>
                    <input className={classes.GrowWithUsInputDefault} type='text' placeholder='Your Website URL' />      
                </div>
            </div> 

            <div className={classes.GrowWithUsCardActive}>

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
                    <div className='col-sm-12'>
                        <input className={classes.GrowWithUsInputDefault} type='text' placeholder='Your Website URL' />
                    </div>
                    <div className='col-sm-12 d-flex'>
                        <div className='col-sm-6'>
                            <input className={classes.GrowWithUsInputName} type='text' placeholder='Full Name' />
                        </div>
                        <div className='col-sm-6'>
                            <input className={classes.GrowWithUsInputEmail} type='email' placeholder='Your Email' />
                        </div>
                    </div>
                    <div className='col-sm-12 d-flex'>
                        <div className='col-sm-6'>
                            <input className={classes.GrowWithUsInputName} type='text' placeholder='Full Name' />
                        </div>
                        <div className='col-sm-6'>  
                            <input className={classes.GrowWithUsInputYourPhone} type='text' placeholder='Your Phone' />
                        </div>  
                    </div>
                    <textarea className={classes.GrowWithUsTextArea}></textarea>        
                </div>
            </div>   
            </div>

         </div>




/* <div className={classes.GrowWithUsSectionBody}>

<div className={classes.GrowWithUsCardDefault}>
    <div className='col-sm-4'>
    <p className={classes.GrowWithUsParagDefault}>
        do you want to grow with us?
    </p>
    </div>
    <div className='col-sm-8'>
    <input className={classes.GrowWithUsInputDefault} type='text' placeholder='Your Website URL' />      
    </div>
</div> 

<div className={classes.GrowWithUsCardActive}>

<div className={classes.GrowWithUsCardActiveFirstRow}>
    <div className='col-sm-4'>
    <p className={classes.GrowWithUsParagDefault}>
        do you want to grow with us?
    </p>
    </div>
    <div className='col-sm-8'>
    <input className={classes.GrowWithUsInputDefault} type='text' placeholder='Your Website URL' />      
    </div>
</div> 

    <div className={classes.GrowWithUsCardActiveSecondRow}>
        <div className='col-sm-4'>
                <p className={classes.GrowWithUsParagActive}>
                You can send us your questions and requests
                <br />
                about the services we offer as Markethinkers SEO
                <br /> 
                and Content Agency via this form.
                </p>
        </div>
        <div className='col-sm-4'>
                <input className={classes.GrowWithUsInputName} type='text' placeholder='Full Name' />
        </div>
        <div className='col-sm-4'>
                <input className={classes.GrowWithUsInputEmail} type='email' placeholder='Your Email' />  
        </div>
        
    </div>

    <div className={classes.GrowWithUsCardActiveThirdRow}>
        <div className='col-sm-4'>
            <img src={GrowWithUsImg} alt='GrowWithU_Image' />
        </div>

        <div className='col-sm-8'>
            <div className='row'>
                <div className='col-sm-4'>
                <input className={classes.GrowWithUsInputName} type='text' placeholder='Full Name' />
                </div>
                <div className='col-sm-4'>
                <input className={classes.GrowWithUsInputYourPhone} type='text' placeholder='Your Phone' />  
                </div>
            <div className='row'>
            <div className='col-sm-8'>
                <textarea className={classes.GrowWithUsTextArea}></textarea>
                </div>
            </div> 
            </div>
        </div>
    </div>
</div>

</div> */

    );
}

export default GrowWithUs;