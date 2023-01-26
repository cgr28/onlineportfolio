import React from "react";
import "./ProjectCard.scss"


export default function ProjectCard({title, image, caption, gitLink, webLink, gif=image}) {
    const handleMouseOver = (event) => {
        event.target.src = gif
    }
    const handleMouseLeave = (event) => {
        event.target.src = image
    }

    return (
        <div className="project-card card mx-auto mb-5 pb-5" style={{width: "100%"}} data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">
            <img className="card-img-top" src={image} alt={`${title}`} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} style={{height: "18rem"}} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p style={{height: "12rem", overflow: "auto"}}>{caption}</p>
                <div className="row text-center">
                    <div className="col-12 mt-3">
                        <a target="__blank" className="mt-3" href={gitLink}><div className="card-button">View Code</div></a>
                    </div>
                    <div className="col-12 mt-3">
                        <a target="__blank" className="mt-3" href={webLink}><div className="card-button">View Project</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}