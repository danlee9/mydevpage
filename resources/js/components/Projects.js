import React from 'react';
import ProjectBlock from './ProjectBlock';
import { Transition } from "semantic-ui-react";
import { setAsyncTimeout } from "../utilities";
import './Projects.css';

class Projects extends React.Component {
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
        const ibetDescription = "Sports betting app with virtual money to bet on NFL, NBA, MLB games and more. Created with react and laravel. Use email 'asdf@asdf.com' and password 'asdfasdf' to login or go to the register page to create an account. Github: https://github.com/danlee9/react-ibet";
        const fcaDescription = "Created pages for FCA (Fiat Chrysler Automobile) dealership sites such as financial forms, showroom lineups, and vehicle display pages, as well as general features such as inventory-search, coupons, third-party plugin integration, admin site customization, etc. Also designed internal web app to interface with our database and backend to handle data from FCA.";
        const yarkDescription = "Launched various client sites such as yarkbuyscars on digital ocean servers running ubuntu linux and nginx. SSL Certificates added with Let's Encrypt";
        return (
            <div className="ui text container">
                <Transition visible={this.state.loaded} animation='fade up' duration={500}>
                    <div className="ui divided items">
                        <ProjectBlock imageSrc="/img/ibet3.png" title="iBet" subtitle="Personal Project" link="http://ibetsports.net/" description={ibetDescription} />
                        <ProjectBlock imageSrc="/img/inventory.png" title="FCA" subtitle="Work Project" link="https://www.maseratiofanaheimhills.com/" description={fcaDescription} />
                        <ProjectBlock imageSrc="/img/yark.png" title="Yark Buys Cars" subtitle="Client Site" link="https://www.yarkbuyscars.com/" description={yarkDescription} />
                    </div>
                </Transition>
            </div>
        );
    }
}

export default Projects;