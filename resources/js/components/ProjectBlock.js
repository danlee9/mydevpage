import React from 'react';

const ProjectBlock = props => {
    return (
        <div className="item">
            <div className="image">
                <img src={props.imageSrc} alt=""/>
            </div>
            <div className="content">
                <a href={props.link} className="header" target="_blank">{props.title}</a>
                <div className="meta">
                    <a href={props.link}>{props.link}</a>
                </div>
                <div className="description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectBlock;