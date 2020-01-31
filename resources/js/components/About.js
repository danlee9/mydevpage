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
                    <div className="ui grid">
                        <div className="row">
                            <div className="thirteen wide column">
                                <p>I'm a graduate of The University of Chicago who thought he was heading towards the world of finance, but ended up falling into the world of web development instead. I feel incredibly fortunate have gone on this detour as I now can't imagine doing anything else. I love the challenges involved and really enjoy solving the different problems that come from programming like a puzzle. When I'm not staring at my text editor, I'm usually reading up on current events (news junkie), or watching a game, usually basketball, since I'm a huge sports fan (love all my LA teams). I also have a broad interest in a wide variety of things such as movies, music, pop culture, politics, psychology, economics, etc. Just an avid learner and curious about the world in general. I like having my brain feel stimulated! For more info check out the links to the side or go to my <Link to="/projects">projects</Link> page.</p>
                            </div>
                            <div className="three wide column">
                                <p><a href="/pdf/resume.pdf" target="_blank"><i className="large file pdf icon"></i> Resume</a></p>
                                <p><a href="https://www.linkedin.com/in/danlee90/" target="_blank"><i className="large linkedin icon"></i> LinkedIn</a></p>
                                <p><a href="https://github.com/danlee9" target="_blank"><i className="large github alternate icon"></i> Github</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="ui grid">
                        {/* <div className="row">
                            <div className="sixteen wide column">
                                <h3 className="header">Skills</h3>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="sixteen wide column">
                                <p>
                                    <strong>Skills: </strong>
                                    <span data-tooltip="HTML5" data-inverted=""><i className="big orange html5 icon"></i></span> 
                                    <span data-tooltip="CSS3" data-inverted=""><i className="big orange css3 alternate icon"></i></span> 
                                    <span data-tooltip="JavaScript" data-inverted=""><i className="big yellow js icon"></i></span> 
                                    <span data-tooltip="Node.js" data-inverted=""><i className="big green node icon"></i></span> 
                                    <span data-tooltip="React" data-inverted=""><i className="big blue react icon"></i></span> 
                                    <span data-tooltip="PHP" data-inverted=""><i className="big violet php icon"></i></span> 
                                    <span data-tooltip="Laravel" data-inverted=""><i className="big orange inverted laravel icon"></i></span> 
                                    <span data-tooltip="Docker" data-inverted=""><i className="big blue docker icon"></i></span> 
                                    <span data-tooltip="Digital Ocean" data-inverted=""><i className="big blue digital ocean icon"></i></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        );
    }
}

/*<p>I'm a graduate of The University of Chicago who thought he was heading towards the world of finance, but ended up falling into the world of web development instead. Feel very fortunate to have gone on this detour as I can't imagine doing anything else now. I love the challenges involved and really enjoy solving the different puzzle-like problems that come from programming. When I'm not staring at my text editor, I'm usually reading up on current events as a news junkie, or watching a game since I'm a huge sports fan (Love my LA teams), especially basketball. I also have a broad interest in a wide variety of things such as movies, music, pop culture, politics, psychology, economics, etc. Just an avid learner and curious about the world in general. I like having my brain feel stimulated! For more info check out the links to the side or go to my <Link to="/projects">projects</Link> page.</p> */

export default About;