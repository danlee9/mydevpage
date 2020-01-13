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
                    <div>
                        <img rel="preload" className="ui fluid image" src="/img/texteditor3.png" style={{filter: 'blur(2px)'}} />
                    </div>
                    <h1 className="header">About Me</h1>
                    <p>Huge sports fan, especially basketball. Love my LA teams. Also have a broad interest in a wide variety of things such as movies, music, pop culture, politics, psychology, economics, etc. Just an avid learner and curious about the world in general. I like having my brain feel stimulated!</p>
                    {/* <div className="ui grid">
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
                    </div> */}
                    <p><a href="https://google.com" target="_blank"><i className="large file pdf icon"></i> Resume</a></p>
                    <p><a href="https://www.linkedin.com/in/danlee90/" target="_blank"><i className="large linkedin icon"></i> LinkedIn</a></p>
                    <p><a href="https://github.com/danlee9" target="_blank"><i className="large github alternate icon"></i> Github</a></p>
                    <p>Skills: <i className="large orange html5 icon"></i> <i className="large orange css3 alternate icon"></i> <i className="large yellow js icon"></i> <i className="large green node icon"></i> <i className="large blue react icon"></i> <i className="large violet php icon"></i> <i className="large orange inverted laravel icon"></i> <i className="large blue docker icon"></i> <i className="large blue digital ocean icon"></i></p>
                    <Link to="/projects">Projects</Link>
                </div>
            </Transition>
        );
    }
}

export default About;