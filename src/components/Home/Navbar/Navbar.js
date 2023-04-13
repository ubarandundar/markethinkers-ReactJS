import LanguageBar from "./LanguageBar";
import MainBar from "./MainBar";

import classes from './Navbar.module.css';

function Navbar (props) {
    return (
        <div className="container-fluid">
            <div className={classes.navbar}>
                <MainBar />
                <LanguageBar />
            </div>
        </div>
    );
}

export default Navbar;