import classes from './LookOutSection.module.css';
// import GCAImage from '../../assets/GCA-logo-light-background.png';
import { Fragment } from 'react';

function LookOuSection (props) {
    return (
        <Fragment>
        <div className={classes.lookOutBody}>
            <div className={classes.leftSide}>
                <header className={classes.lookOutSectionHeader}>
                    <span className={classes.lookOut}>Look Out</span>
                    <br />
                    <span className={classes.beyond}>Beyond Limits</span>
                </header>
            </div>
            <div className={classes.rightSide}>
                <header className={classes.allIn}>all in one team, for your needs</header>
                <p className={classes.allInSub}>all in one team, for your needs We prepare your website SEO content in accordance with SEO best practices, which is not only an important part of SEO but also of your brand image—both for search engines and users.</p>
            </div>
        </div>
        <div>
                {/* <img src={GCAImage} alt='Global_Content_Awards' /> */}
        </div>
        </Fragment>
    );
}

export default LookOuSection;