import { useState } from 'react';
import classes from './BenefitsAndPerksCard.module.css';

import CheckerImg from '../../../assets/inspiration.svg';
import BenefitsAndPerksCardBackImg from '../../../assets/Path 16725-2.svg';

function BenefitsAndPerksCard() {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='container position-relative'>
            <img className={classes.benefitsAndPerksCardBackImg} src={BenefitsAndPerksCardBackImg} alt='BenefitsAndPerksCardBackImg' />
            <div className={`row position-relative ${classes.benefitsAndPerksCardBody}`}>
                <div className='col-sm-12 col-md-12 col-lg-6 pb-3'>
                    <div className={isVisible ? classes.benefitsAndPerksCardToggle : ''}>
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardBodySub}>
                        <div className='d-flex align-items-center'>
                            <div className={classes.benefitsAndPerkCardRec}>
                                <img src={CheckerImg} alt='Checker_Image' />
                            </div>
                            <header className={classes.benefitsAndPerksCardHeader}>
                                Competitive Salary
                            </header>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button type='button' className={!isVisible ? classes.benefitsAndPerkCardButton : classes.benefitsAndPerkCardButtonX} />
                        </div> 
                    </div>
                    {isVisible &&
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardParag}>
                        As a passionate and committed team, our creativity reflects on every single aspect of our work, providing the best solutions for you.
                    </div>}
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 pb-3'>
                    <div className={isVisible ? classes.benefitsAndPerksCardToggle : ''}>
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardBodySub}>
                        <div className='d-flex align-items-center'>
                            <div className={classes.benefitsAndPerkCardRec}>
                                <img src={CheckerImg} alt='Checker_Image' />
                            </div>
                            <header className={classes.benefitsAndPerksCardHeader}>
                                Competitive Salary
                            </header>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button type='button' className={!isVisible ? classes.benefitsAndPerkCardButton : classes.benefitsAndPerkCardButtonX} />
                        </div> 
                    </div>
                    {isVisible &&
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardParag}>
                        As a passionate and committed team, our creativity reflects on every single aspect of our work, providing the best solutions for you.
                    </div>}
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 pb-3'>
                    <div className={isVisible ? classes.benefitsAndPerksCardToggle : ''}>
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardBodySub}>
                        <div className='d-flex align-items-center'>
                            <div className={classes.benefitsAndPerkCardRec}>
                                <img src={CheckerImg} alt='Checker_Image' />
                            </div>
                            <header className={classes.benefitsAndPerksCardHeader}>
                                Company Equity
                            </header>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button type='button' className={!isVisible ? classes.benefitsAndPerkCardButton : classes.benefitsAndPerkCardButtonX} />
                        </div> 
                    </div>
                    {isVisible &&
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardParag}>
                        As a passionate and committed team, our creativity reflects on every single aspect of our work, providing the best solutions for you.
                    </div>}
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 pb-3'>
                    <div className={isVisible ? classes.benefitsAndPerksCardToggle : ''}>
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardBodySub}>
                        <div className='d-flex align-items-center'>
                            <div className={classes.benefitsAndPerkCardRec}>
                                <img src={CheckerImg} alt='Checker_Image' />
                            </div>
                            <header className={classes.benefitsAndPerksCardHeader}>
                                Company Equity
                            </header>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button type='button' className={!isVisible ? classes.benefitsAndPerkCardButton : classes.benefitsAndPerkCardButtonX} />
                        </div> 
                    </div>
                    {isVisible &&
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardParag}>
                        As a passionate and committed team, our creativity reflects on every single aspect of our work, providing the best solutions for you.
                    </div>}
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <div className={isVisible ? classes.benefitsAndPerksCardToggle : ''}>
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardBodySub}>
                        <div className='d-flex align-items-center'>
                            <div className={classes.benefitsAndPerkCardRec}>
                                <img src={CheckerImg} alt='Checker_Image' />
                            </div>
                            <header className={classes.benefitsAndPerksCardHeader}>
                                Fertility Benefits
                            </header>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button type='button' className={!isVisible ? classes.benefitsAndPerkCardButton : classes.benefitsAndPerkCardButtonX} />
                        </div> 
                    </div>
                    {isVisible &&
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardParag}>
                        As a passionate and committed team, our creativity reflects on every single aspect of our work, providing the best solutions for you.
                    </div>}
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <div className={isVisible ? classes.benefitsAndPerksCardToggle : ''}>
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardBodySub}>
                        <div className='d-flex align-items-center'>
                            <div className={classes.benefitsAndPerkCardRec}>
                                <img src={CheckerImg} alt='Checker_Image' />
                            </div>
                            <header className={classes.benefitsAndPerksCardHeader}>
                                Fertility Benefits
                            </header>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button type='button' className={!isVisible ? classes.benefitsAndPerkCardButton : classes.benefitsAndPerkCardButtonX} />
                        </div> 
                    </div>
                    {isVisible &&
                    <div onClick={() => setIsVisible(!isVisible)} className={classes.benefitsAndPerksCardParag}>
                        As a passionate and committed team, our creativity reflects on every single aspect of our work, providing the best solutions for you.
                    </div>}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BenefitsAndPerksCard;