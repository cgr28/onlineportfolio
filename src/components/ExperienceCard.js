import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({ period, title, type, caption, position, image }) {
  return (
    <div className="card mb-5 text-left experience-card mx-auto" data-aos="fade-down" data-aos-once="true">
      <div className="row no-gutters">
        <div className="col-md-4 m-auto text-center">
          <img src={image} className="card-img" alt={`${title} logo`} />
        </div>
        <div className="col-md-8 m-auto">
          <div className="card-body pb-5">
            <h5 className="card-title">{title} / {position}</h5>
            <p className="card-title">{period}</p>
            <p className="card-text">
              {caption}
            </p>
            <p className="card-title">{type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
