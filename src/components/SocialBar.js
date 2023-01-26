import React from "react";
import "./SocialBar.scss";

export default function SocialBar() {
  return (
    <div className="social-bar mb-1" data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-once="true">
      <div className="row links text-center">
        <div className="link col-6 col-md-3 col-sm-6">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/colbe-roberson-a01734221/">LinkedIn</a>
        </div>
        <div className="link col-6 col-md-3 col-sm-6">
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@roberson.colbe_91639">Medium</a>
        </div>
        <div className="link col-6 col-md-3 col-sm-6">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/cgr28">GitHub</a>
        </div>
        <div className="link col-6 col-md-3 col-sm-6">
          <a target="_blank" rel="noopener noreferrer" href="mailto:cgr28@njit.edu">Email</a>
        </div>
      </div>
    </div>
  );
}
