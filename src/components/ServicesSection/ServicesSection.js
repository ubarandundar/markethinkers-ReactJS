import classes from './ServicesSection.module.css';

import ForwardArrow from '../../assets/Group 34.svg';
import ServicesIconImg from '../../assets/Group 198.svg';

function ServicesSection (props) {
    return (
    <div className='container'>
        <div className={classes.ServicesSectionBody}>
            <div className={classes.ServicesSectionLeftSide}>
                <div className={classes.ServicesSectionLeftSideWrapper}>
                    <header className={classes.ServiceSectionLeftSideHeader}>Professional Seo Services</header>
                    <p className={classes.ServiceSectionLeftSideParag}>
                    Our Services That
                    <br />
                    Will Digitally Grow
                    <br />
                    Your Brand</p>
                    <p className={classes.ServiceSectionLeftSideParagSub}>
                    Reduce Costs, Increase Efficiency
                    <br />    
                    in a Secure Infrastructure!</p>
                    <a href='www.google.com'>
                        <img src={ForwardArrow} alt='Forward_Arrow' />
                    </a>
                </div>
            </div>
            <div className={classes.ServicesSectionRightSide}>
                    <div className={classes.ServiceSectionCardTop}>
                        <div>
                            <ul className={classes.ServiceSectionCardTopFirstRow}>
                                <li>
                                <button type="button" className={classes.ServicesButtons}>SEO Copywriting
                                </button>
                                </li>
                                <li>
                                <button type="button" className={classes.ServicesButtons}>SEO Consulting
                                </button>
                                </li>
                                <li>
                                    <a href='https://wwww.google.com'>
                                        <button type="button" className={classes.ServicesButtons}>ASO Marketing
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className={classes.ServiceSectionCardTopSecondRow}>
                            <li>
                                <button type="button" className={classes.ServicesButtons}>Performance Marketing
                                </button>
                                </li>
                                <li>
                                <button type="button" className={classes.ServicesButtons}>Digital PR
                                </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.ServiceSectionCardBottom}>
                        <div>
                            <div className={classes.ServicesIcons}>
                                <img src={ServicesIconImg} alt='Services_Icon' />
                                <a href='www.google.com'>
                                    <img src={ForwardArrow} alt='Forward_Arrow' />
                                </a>
                            </div>
                        </div>
                        <header className={classes.ServiceSectionCardBottomHeader}>SEO Copywriting</header>
                        <p className={classes.ServiceSectionCardBottomParag}>We are ready to grow your business digitally with our expertise and experienced team in SEO services and copywriting.</p>
                    </div>
            </div>    
        </div>
    </div>
    );
}

export default ServicesSection;