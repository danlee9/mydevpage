import React from 'react';
import { Link } from "react-router-dom";
import './Main.css';

const Main = () => {
    return (
        <div className="ui center aligned container" style={{height: '60vh'}}>
            <div className="ui middle aligned grid" style={{height: 'inherit'}}>
                <div className="sixteen wide column">
                    <h1 className="ui header">
                        <img className="ui medium circular image" src="https://via.placeholder.com/250x250" style={{height: '150px', width: '150px'}}/>
                    </h1>
                    <h1 className="ui header" style={{fontSize: '40px', marginBottom: 0}}>Hi, my name's <span style={{color: 'dodgerblue'}}>Daniel Lee</span></h1>
                    <h3 style={{fontSize: '30px', marginTop: 0}}>I'm a full stack web developer</h3>
                    {/* <div className="projects-link">
                        <Link to="/projects"><strong>View My Work</strong></Link>
                    </div> */}
                    
                        <Link to="/projects">
                            <div className="projects-link">
                                <strong>View My Work</strong>
                            </div>
                        </Link>
                    
                </div>
            </div>
            {/* <h1 className="ui header"><img className="ui circular image" src="https://via.placeholder.com/250x250"></img></h1>
            <h1 className="ui header">Hi, my name's <span style={{color: 'dodgerblue'}}>Daniel Lee</span></h1>
            <p>I'm a full stack web developer</p>
            <Link to="/about">Learn more</Link> */}
        </div>
    );
}

export default Main;