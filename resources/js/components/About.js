import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="ui text container">
            <h1 className="header">About Me</h1>
            <p>Huge sports fan, especially basketball. Love my LA teams. Also have a broad interest in a wide variety of things such as movies, music, pop culture, politics, psychology, economics, etc. Just an avid learner and curious about the world in general. I like having my brain feel stimulated!  </p>
            <p>Resume</p>
            <Link to="/contact">Contact Me</Link>
        </div>
    );
}

export default About;