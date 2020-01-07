import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //  style={{borderTop: '1.5px solid dodgerblue'}}
        const path = this.props.location.pathname;
        return (
            <div className="menu-container">
                <div className="menu-progress"></div>
                <div className="ui secondary menu">
                    <div className="ui container">
                        <span className={path == '/' ? 'link active' : 'link'}>
                            <Link to="/" className="item"><strong>Daniel Lee</strong></Link>
                        </span>
                        <div className="right menu">
                            <span className={path == '/about' ? 'link active' : 'link'}>
                                <Link to="/about" className="item">About</Link>
                            </span>
                            <span className={path == '/projects' ? 'link active' : 'link'}>
                                <Link to="/projects" className="item">Projects</Link>
                            </span>
                            <span className={path == '/contact' ? 'link active' : 'link'}>
                                <Link to="/contact" className="item">Contact</Link>
                            </span>
                            {/* <span className="item">dan.dh.lee@gmail.com</span> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;