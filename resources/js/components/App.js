import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import './App.css';
import Menu from './Menu';
import Main from './Main';
import About from './About';
import Projects from './Projects';

import { spring, AnimatedSwitch } from 'react-router-transition';

const Contact = () => <div className="ui text container">Contact</div>;

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}
  
  // wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 200,
        damping: 20,
    });
}
  
  // child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

export default class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route render={({location}) => (
                        <div>
                            <Menu location={location} />
                            {/* <Switch>
                                <Route path="/" exact component={Main} />
                                <Route path="/about" exact component={About} />
                                <Route path="/projects" exact component={Projects} />
                                <Route path="/contact" exact component={Contact} />
                            </Switch> */}
                            <AnimatedSwitch
                            atEnter={bounceTransition.atEnter}
                            atLeave={bounceTransition.atLeave}
                            atActive={bounceTransition.atActive}
                            mapStyles={mapStyles}
                            className="route-wrapper">
                                <Route path="/" exact component={Main} />
                                <Route path="/about" exact component={About} />
                                <Route path="/projects" exact component={Projects} />
                                <Route path="/contact" exact component={Contact} />
                            </AnimatedSwitch>
                        </div>
                    )}/>
                </Router>
            </div>
        );
    }
}
