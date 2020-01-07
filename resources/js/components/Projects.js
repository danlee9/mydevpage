import React from 'react';
import ProjectBlock from './ProjectBlock';
import { Transition } from "semantic-ui-react";
import { setAsyncTimeout } from "../utilities";

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
        const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto ad dicta nobis repellat mollitia. Deleniti commodi voluptates dolorum expedita facilis eaque vel, quaerat debitis ea, obcaecati delectus aperiam neque!";
        return (
            <div className="ui text container">
                <Transition visible={this.state.loaded} animation='fade up' duration={500}>
                    <div className="ui divided items">
                        {/* <div className="item">
                            <div className="image">
                                <img src="https://via.placeholder.com/350x150" alt=""/>
                            </div>
                            <div className="content">
                                <a href="" className="header">Header</a>
                                <div className="meta">
                                    <span>Description</span>
                                </div>
                                <div className="description">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus id neque consequatur, quo soluta adipisci rerum enim cumque distinctio cum placeat et doloremque, non, repudiandae autem rem molestias. Nobis?</p>
                                </div>
                                <div className="extra">Additonal Details</div>
                            </div>
                        </div> */}
                        <ProjectBlock imageSrc="/img/ibet3.png" title="Header" link="https://google.com" description={description} />
                        <ProjectBlock imageSrc="https://via.placeholder.com/350x150" title="Header" link="https://google.com" description={description} />
                        <ProjectBlock imageSrc="https://via.placeholder.com/350x150" title="Header" link="https://google.com" description={description} />
                    </div>
                </Transition>
            </div>
        );
    }
}

export default Projects;