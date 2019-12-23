import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="menu-progress"></div>
                <div className="ui secondary menu">
                    <div className="ui container">
                        <Link to="/" className="item"><strong>Daniel Lee</strong></Link>
                        <div className="right menu">
                            <Link to="/about" className="item">About</Link>
                            <Link to="/projects" className="item">Projects</Link>
                            <Link to="/contact" className="item">Contact</Link>
                            <span className="item">dan.dh.lee@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;