import AboutUs from "./AboutUs";
import Graphics from "./Graphics";
import Blog from "./Blog";

import classes from './AboutSection.module.css';
import AboutSectionRightImg from '../../assets/Path 16726.svg';
import AboutSectionLeftImg from '../../assets/Path 16726-2.svg';
import { BlogContextProvider } from "../../store/BlogContextProvider";

function AboutSection(props) {
    return (
        <BlogContextProvider>
            <div className="container-fluid">
                <div className={classes.blogBody}>
                    <img className={classes.AboutSectionRightImg} src={AboutSectionRightImg} alt='AboutSection_RightImage' />
                    <img className={classes.AboutSectionLeftImg} src={AboutSectionLeftImg} alt='AboutSection_LeftImage' />
                    <AboutUs />
                    <Graphics />
                    <Blog />
                </div>
            </div>
        </BlogContextProvider>
    );
}

export default AboutSection;