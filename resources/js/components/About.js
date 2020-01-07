import React from 'react';
import { Link } from "react-router-dom";
import { Transition } from "semantic-ui-react";
import { setAsyncTimeout } from "../utilities";

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        };
    } 

    componentDidMount() {
        if (!this.state.loaded) {
            setAsyncTimeout(() => {
                this.setState({
                    loaded: true
                });
            }, 100);
        }
    }

    render() {
        return (
            <Transition visible={this.state.loaded} animation='fly left' duration={500}>
                <div className="ui text container">
                    <h1 className="header">About Me</h1>
                    <p>Huge sports fan, especially basketball. Love my LA teams. Also have a broad interest in a wide variety of things such as movies, music, pop culture, politics, psychology, economics, etc. Just an avid learner and curious about the world in general. I like having my brain feel stimulated!  </p>
                    <div className="ui grid">
                        <div className="row">
                            <div className="two wide column">
                                <a href="https://www.linkedin.com/in/danlee90/"><i className="linkedin icon"></i> LinkedIn</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="two wide colum">
                                <a href="https://github.com/danlee9"><i className="github alternate icon"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <p>Resume</p>
                    <p>LinkedIn</p>
                    <p>Github</p>
                    <p>Skills</p>
                    <p>Experience</p>
                    <p>Education</p>
                    <Link to="/projects">Projects</Link>
                </div>
            </Transition>
        );
    }
}

export default About;