import { useState } from 'react';
import classes from './FAQSection.module.css';
import PinkForwardArrow from '../../../assets/Group 34-pink.svg';
import FAQSectionBackUpImg from '../../../assets/Path 16821.png';
import FAQSectionBackDownImg from '../../../assets/Path 16820.png';

function FAQSection() {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={'container'}>
        <div className={classes.FAQSectionTextArea}>
            <header className={classes.FAQSectionHeader}>
                FAQ
            </header>
            <p className={classes.FAQSectionParag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            <br />
            labore et dolore magna aliqua. Varius morbi enim nunc faucibus.
            </p>
        </div>
        <div>
            <img className={classes.FAQSectionBackUpImg} src={FAQSectionBackUpImg} alt='FAQSectionBackUp_Image' />
            <img className={classes.FAQSectionBackDownImg} src={FAQSectionBackDownImg} alt='FAQSectionBackDown_Image' />
            <div className={classes.FAQSectionCard}>
                <div className={'d-flex flex-row justify-content-between pb-3' + classes.FAQSectionCardSub}>
                    <div className={'pb-3'}>
                        <header className={classes.FAQSectionCardHeader}>
                            Should I prefer SEO or PPC consultancy first?
                        </header>
                        <span className={classes.FAQSectionCardParag}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                        </span>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <button onClick={() => setIsVisible(!isVisible)} type='button' className={!isVisible ? classes.FAQSectionCardButton : classes.FAQSectionCardButtonX} /> 
                    </div>
                </div>
                {isVisible && <div className={'row'}>
                    <div className={classes.FAQSectionCardSubToggle}>
                        <p className={classes.FAQSectionCardSubToggleParag}>
                        The answer to this question may vary depending on your target audience, your sector, your position in the sector, your KPIs and your budget. While the SEO work you do on your website will provide more long-term success and higher ROI (Return On Investment), with SEM work you can show only as much success as you pay. Our opinion will be to provide support with SEM activities periodically according to the needs of your site, instead of choosing between SEO and SEM works. For example, it is very important that you continue the AdWords work for words that contain your brand searches. As an example; Let’s target the words that you pay a lot of money in SEM but also turn into good conversions also in SEO, so that we can shift the budget we will save in the long term to different groups of words, which will enable us to establish a more effective campaign.
                        </p>
                        <span className={classes.FAQSectionCardSubToggleQue}>
                        Did you find this answer useful?
                        </span>
                        <div className={'d-flex flex-row'}>
                            <button type='button' className={classes.FAQSectionCardSubToggleButtonFirst} /> 
                            <button type='button' className={classes.FAQSectionCardSubToggleButtonSecond} /> 
                            <button type='button' className={classes.FAQSectionCardSubToggleButtonThird} /> 
                        </div>
                        <div className={classes.FAQSectionCardSubToggleCond}>
                            <span className={classes.FAQSectionCardSubToggleIf}>
                                If you don't find it enough,
                            </span>
                            <a href='www.google.com' className={classes.FAQSectionCardSubToggleA}>
                                contact us.
                                <img className={classes.FAQSectionCardSubToggleArrow} src={PinkForwardArrow} alt='PinkForwardArrow_Image' />
                            </a>
                        </div>    
                    </div>
                </div>}
                <hr />
                <div className={'d-flex flex-row justify-content-between pb-3'}>
                    <div>
                        <header className={classes.FAQSectionCardHeader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </header>
                        <span className={classes.FAQSectionCardParag}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                        </span>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <button type='button' className={classes.FAQSectionCardButton} /> 
                    </div>
                </div>
                <hr />
                <div className={'d-flex flex-row justify-content-between pb-3'}>
                    <div>
                        <header className={classes.FAQSectionCardHeader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </header>
                        <span className={classes.FAQSectionCardParag}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                        </span>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <button type='button' className={classes.FAQSectionCardButton} /> 
                    </div>
                </div>
                <hr />
                <div className={'d-flex flex-row justify-content-between pb-3'}>
                    <div>
                        <header className={classes.FAQSectionCardHeader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </header>
                        <span className={classes.FAQSectionCardParag}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                        </span>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <button type='button' className={classes.FAQSectionCardButton} /> 
                    </div>
                </div>
                <hr />
                <div className={'d-flex flex-row justify-content-between'}>
                    <div>
                        <header className={classes.FAQSectionCardHeader}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                        </header>
                        <span className={classes.FAQSectionCardParag}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                        </span>
                    </div>
                    <div className={'d-flex align-items-center'}>
                        <button type='button' className={classes.FAQSectionCardButton} /> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQSection;