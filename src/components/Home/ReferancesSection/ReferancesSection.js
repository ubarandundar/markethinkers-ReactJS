import { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
import classes from './ReferancesSection.module.css';
import GCAImage from '../../../assets/GCA-logo-light-background.png';
import UKCAImage from '../../../assets/UKCA-Logo.png';
import UKDGAImage from '../../../assets/UKDGAwards-Logo-Dark-Background.png';
import MENAImage from '../../../assets/MENA-New-Logo-Lockup.png';
import GSAImage from '../../../assets/GSA-New-Logo-Lockup-Diginius.png';

function ReferancesSection (props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    
    const awardsMobile = 
            <ScrollContainer
              className="scroll-container"
              vertical={false}
              horizontal={true}
              >
            { <div className={`d-flex flex-row ${classes.referancesWrapperForMobile}`}>
            <div className={classes.referances}>
                    <img src={GCAImage} alt='GCA_Image' />
                </div>
                <div className={classes.referances}>
                    <img src={UKCAImage} alt='UKCA_Image' />
                </div>
                <div className={classes.referances}>
                    <img src={UKDGAImage} alt='UKDGA_Image' />
                </div>
                <div className={classes.referances}>
                    <img src={MENAImage} alt='MENA_Image' />
                </div>
                <div className={classes.referances}>
                    <img src={GSAImage} alt='GSA_Image' />
                </div>
              </div>}
              </ScrollContainer>

    const awardsDesktop = 
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className={classes.referances}>
                    <img className='img-fluid' src={GCAImage} alt='GCA_Image' />
                </div>
                <div className={classes.referances}>
                    <img className='img-fluid' src={UKCAImage} alt='UKCA_Image' />
                </div>
                <div className={classes.referances}>
                    <img className='img-fluid' src={UKDGAImage} alt='UKDGA_Image' />
                </div>
                <div className={classes.referances}>
                    <img className='img-fluid' src={MENAImage} alt='MENA_Image' />
                </div>
                <div className={classes.referances}>
                    <img className='img-fluid' src={GSAImage} alt='GSA_Image' />
                </div>
            </div>

    const awardsForMobile = windowWidth <= 991 ? awardsMobile : '';
    const awardsForDesktop = windowWidth > 992 ? awardsDesktop : '';

    return (
        <div className='container'>
        <div className={classes.lookOutBody}>
            <div className={classes.lookOutBodySub}>
                <div className={classes.leftSide}>
                    <header className={classes.lookOutSectionHeader}>
                    <span className={classes.lookOut}>Look Out</span>
                    <br />
                    <span className={classes.beyond}>Beyond Limits</span>
                    </header>
                </div>

                <div className={classes.rightSide}>
                    <header className={classes.allIn}>all in one team, for your needs</header>
                    <p className={classes.allInSub}>
                    We prepare your website SEO content inaccordance with SEO best practices, which is not only an important part of SEO but also of your brand image—both for search engines and users. 
                    </p>
                </div>
            </div>

        <div className={classes.referancesBody}>
            <hr className={classes.referancesBodyHr} />
            <div className={classes.referancesBodySub}>
                {awardsForDesktop}
                {awardsForMobile}
            </div>
        </div>
    </div>
        </div>
    );
}

export default ReferancesSection;