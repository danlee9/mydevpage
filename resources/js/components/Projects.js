import React from 'react';
import ProjectBlock from './ProjectBlock';

class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto ad dicta nobis repellat mollitia. Deleniti commodi voluptates dolorum expedita facilis eaque vel, quaerat debitis ea, obcaecati delectus aperiam neque!";
        return (
            <div className="ui text container">
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
                    <ProjectBlock imageSrc="https://via.placeholder.com/350x150" title="Header" link="https://google.com" description={description} />
                    <ProjectBlock imageSrc="https://via.placeholder.com/350x150" title="Header" link="https://google.com" description={description} />
                    <ProjectBlock imageSrc="https://via.placeholder.com/350x150" title="Header" link="https://google.com" description={description} />
                    <ProjectBlock imageSrc="https://via.placeholder.com/350x150" title="Header" link="https://google.com" description={description} />
                </div>
            </div>
        );
    }
}

export default Projects;