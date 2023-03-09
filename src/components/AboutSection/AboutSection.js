import { Fragment } from "react";
import AboutUs from "./AboutUs";
import Graphics from "./Graphics";
import Blog from "./Blog";

function AboutSection (props) {
    return (
        <Fragment>
            <AboutUs />
            <Graphics />
            <Blog />
        </Fragment>
    );
}

export default AboutSection;