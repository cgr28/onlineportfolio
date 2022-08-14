import React, {useEffect} from "react";
import "./SkillBar.scss";

export default function SkillBar({ name, level, num }) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('expand');
        }
      });
    });
    observer.observe(document.querySelector(`#bar-${num}`));
  
  }, [num]);

  return (
    <div className="bar-1 mb-5" data-aos="fade-down" data-aos-once="true">
      <h5 className="title mb-1">
        {name}
      </h5>
      <div className="bar" style={{ width: `${level}%` }}>
        <div className="bar-inner" id={`bar-${num}`}></div>
        <div className="bar-percent">{level}%</div>
      </div>
    </div>
  );
}
