import React from "react";
import Header from "../components/Header";
import "./Resume.scss"
import resume from "../imgs/colbe-resume-online-portfolio.jpg"
import resumePdf from "../imgs/colbe-resume-online-portfolio.pdf"

export default function Resume() {
    return (
        <div className="resume container mx-auto mb-5" id="resume">
            <Header title={"Resume"} caption={"My resume.  Ready and available for download."} />
            <a href={resumePdf} download data-aos="fade-down" data-aos-once="true"><div class="download-button text-center mx-auto mb-3">Download</div></a>
            <img className="mx-auto resume-img" src={resume} alt="My resume" data-aos="fade-down" data-aos-once="true" />
        </div>
    )
}