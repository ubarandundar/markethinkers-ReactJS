import AboutUs from "./AboutUs";
import Graphics from "./Graphics";
import Blog from "./Blog";

import classes from './AboutSection.module.css';

function AboutSection (props) {
    return (
        <div className={classes.blogBody}>
            <AboutUs />
            <Graphics />
            <Blog />
        </div>
    );
}

export default AboutSection;