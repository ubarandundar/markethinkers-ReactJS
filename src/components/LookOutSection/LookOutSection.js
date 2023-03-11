import classes from './LookOutSection.module.css';
import GCAImage from '../../assets/GCA-logo-light-background.png';
import UKCAImage from '../../assets/UKCA-Logo.png';
import UKDGAImage from '../../assets/UKDGAwards-Logo-Dark-Background.png';
import MENAImage from '../../assets/MENA-New-Logo-Lockup.png';
import GSAImage from '../../assets/GSA-New-Logo-Lockup-Diginius.png';
import { Fragment } from 'react';

function LookOuSection (props) {
    return (
        <Fragment>
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
                    all in one team, for your needs We prepare your website SEO content in
                    <br />
                    accordance with SEO best practices, which is not only an important
                    <br />
                    part of SEO but also of your brand image—both for search engines and users.
                    </p>
                </div>
            </div>

        <div className={classes.referancesBody}>
            <hr className={classes.referancesBodyHr} />
            <div className={classes.referancesBodySub}>
                <div className={classes.referances}>
                    <img src={GCAImage} alt='Global_Content_Awards' />
                </div>
                <div className={classes.referances}>
                    <img src={UKCAImage} alt='Global_Content_Awards' />
                </div>
                <div className={classes.referances}>
                    <img src={UKDGAImage} alt='Global_Content_Awards' />
                </div>
                <div className={classes.referances}>
                    <img src={MENAImage} alt='Global_Content_Awards' />
                </div>
                <div className={classes.referances}>
                    <img src={GSAImage} alt='Global_Content_Awards' />
                </div>
            </div>
        </div>
    </div>
        </Fragment>
    );
}

export default LookOuSection;