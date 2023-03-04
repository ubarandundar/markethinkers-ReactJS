import LanguageBar from "./LanguageBar";
import MainBar from "./MainBar";

import classes from './Navbar.module.css';

function Navbar (props) {
    return (
        <div className={classes.navbar}>
            <MainBar />
            <LanguageBar />
        </div>
    );
}

export default Navbar;