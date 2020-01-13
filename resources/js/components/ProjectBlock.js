import React from 'react';

const ProjectBlock = props => {
    return (
        <div className="item">
            <a href={props.link} className="middle aligned image">
                <img rel="preload" src={props.imageSrc} alt=""/>
            </a>
            <div className="content">
                <a href={props.link} className="header project-header" target="_blank">{props.title}</a>
                <div className="meta">
                    {/* <a href={props.link}>{props.link}</a> */}
                    {props.subtitle}
                </div>
                <div className="description">
                    <p>{props.description}</p>
                </div>
                {/* <div className="extra">Additonal Details</div> */}
            </div>
        </div>
    );
};

export default ProjectBlock;