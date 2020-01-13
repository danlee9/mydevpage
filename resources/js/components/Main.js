import React from 'react';
import { Link } from "react-router-dom";
import { Transition } from "semantic-ui-react";
import './Main.css';
import { setAsyncTimeout } from "../utilities";

class Main extends React.Component {
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
            <div className="ui center aligned container" style={{height: '60vh'}}>
                <div className="ui middle aligned grid" style={{height: 'inherit'}}>
                    <div className="sixteen wide column">
                        <Transition visible={this.state.loaded} animation='scale' duration={500}>
                            <div>
                                <h1 className="ui header">
                                    <img rel="preload" className="ui medium circular image" src="/img/profile-sm.jpg" style={{height: '150px', width: '150px'}}/>
                                </h1>
                                <h1 className="ui header" style={{fontSize: '40px', marginBottom: 0}}>Hi, my name's <span style={{color: 'dodgerblue'}}>Daniel Lee</span></h1>
                                <h3 style={{fontSize: '30px', marginTop: 0}}>I'm a full stack web developer</h3>
                                <Link to="/about">
                                    <div className="projects-link">
                                        <strong>About Me <i className="chevron right icon"></i></strong>
                                    </div>
                                </Link>
                            </div>
                        </Transition>
                    </div>
                </div>
                {/* <h1 className="ui header"><img className="ui circular image" src="https://via.placeholder.com/250x250"></img></h1>
                <h1 className="ui header">Hi, my name's <span style={{color: 'dodgerblue'}}>Daniel Lee</span></h1>
                <p>I'm a full stack web developer</p>
                <Link to="/about">Learn more</Link> */}
            </div>
        );
    }
}

export default Main;