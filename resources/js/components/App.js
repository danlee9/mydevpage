import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import './App.css';
import Menu from './Menu';
import Main from './Main';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

import { spring, AnimatedSwitch } from 'react-router-transition';
import { TransitionGroup, CSSTransition } from "react-transition-group";

// const profile = require('../../../public/img/profile-sm.jpg');
// const texteditor = require('../../../public/img/texteditor3.png');
// const ibet = require('../../../public/img/ibet3.png');
// const fca = require('../../../public/img/fca.png');
// const yark = require('../../../public/img/yark.png');

// we need to map the `scale` prop we define below
// to the transform style property
// function mapStyles(styles) {
//     return {
//         opacity: styles.opacity,
//         transform: `scale(${styles.scale})`,
//     };
// }
  
//   // wrap the `spring` helper to use a bouncy config
// function bounce(val) {
//     return spring(val, {
//         stiffness: 170,
//         damping: 20,
//     });
// }
  
  // child matches will...
// const bounceTransition = {
//     // start in a transparent, upscaled state
//     atEnter: {
//         opacity: 0,
//         scale: 1.2,
//     },
//     // leave in a transparent, downscaled state
//     atLeave: {
//         opacity: bounce(0),
//         scale: bounce(0.4),
//     },
//     // and rest at an opaque, normally-scaled state
//     atActive: {
//         opacity: bounce(1),
//         scale: bounce(1),
//     },
// };

// const bounceTransition = {
//     atEnter: {
//         opacity: 0
//     },
//     // leave in a transparent, downscaled state
//     atLeave: {
//         opacity: 0
//     },
//     // and rest at an opaque, normally-scaled state
//     atActive: {
//         opacity: 1
//     },
// };

export default class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Router history={history}>
                    <Route render={({location}) => (
                        <div>
                            <Menu location={location} />
                            <TransitionGroup className="transition-group">  
                                <CSSTransition key={location.key} timeout={300} classNames='fade'>
                                    <div className="route-section">
                                        <Switch location={location}>                                            
                                            <Route path="/" exact component={Main} />
                                            <Route path="/about" exact component={About} />
                                            <Route path="/projects" exact component={Projects} />
                                            <Route path="/contact" exact component={Contact} />
                                        </Switch>
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                            {/* <Switch>
                                <Route path="/" exact component={Main} />
                                <Route path="/about" exact component={About} />
                                <Route path="/projects" exact component={Projects} />
                                <Route path="/contact" exact component={Contact} />
                            </Switch> */}
                            {/* <AnimatedSwitch
                            atEnter={bounceTransition.atEnter}
                            atLeave={bounceTransition.atLeave}
                            atActive={bounceTransition.atActive}
                            mapStyles={mapStyles}
                            className="route-wrapper">
                                <Route path="/" exact component={Main} />
                                <Route path="/about" exact component={About} />
                                <Route path="/projects" exact component={Projects} />
                                <Route path="/contact" exact component={Contact} />
                            </AnimatedSwitch> */}
                        </div>
                    )}/>
                </Router>
                <div id="preload">
                    {/* <img src={profile} alt=""/>
                    <img src={texteditor} alt=""/>
                    <img src={ibet} alt=""/>
                    <img src={fca} alt=""/>
                    <img src={yark} alt=""/> */}
                    <img src="/img/profile-sm.jpg" alt=""/>
                    <img src="/img/texteditor3.png" alt=""/>
                    <img src="/img/ibet3.png" alt=""/>
                    <img src="/img/fca.png" alt=""/>
                    <img src="/img/yark.png" alt=""/>
                </div>
            </div>
        );
    }
}
