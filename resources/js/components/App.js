import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';

export default class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="ui center aligned container" style={{marginTop: '3em'}}>
                    <h1 className="ui header">Hi, My name is <span style={{color: 'dodgerblue'}}>Daniel Lee</span></h1>
                    <p>I'm a full stack web developer</p>
                </div>
            </div>
        );
    }
}
