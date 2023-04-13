import classes from './ReferancesSection.module.css';
import GCAImage from '../../../assets/GCA-logo-light-background.png';
import UKCAImage from '../../../assets/UKCA-Logo.png';
import UKDGAImage from '../../../assets/UKDGAwards-Logo-Dark-Background.png';
import MENAImage from '../../../assets/MENA-New-Logo-Lockup.png';
import GSAImage from '../../../assets/GSA-New-Logo-Lockup-Diginius.png';

function ReferancesSection (props) {
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
            </div>
        </div>
    </div>
        </div>
    );
}

export default ReferancesSection;