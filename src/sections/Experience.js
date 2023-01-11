import React from "react";
import Header from "../components/Header";
import ExperienceCard from "../components/ExperienceCard";
import spartaSystems from "../imgs/sparta-systems-logo.svg";
import njit from "../imgs/njit.jpg";
import programmingTeam from "../imgs/programmingteam.svg";
import njitACM from "../imgs/njitacm.svg";
import "./Experience.scss"

export default function Experience() {
    return (
        <div className="experience container mx-auto" id="experience">
            <Header title={"Experience"} caption={"All of my experience whether it be schooling, jobs, or extracurricular activities."} />
            <ExperienceCard period={"May 2022 - Aug 2022"} title={"Sparta Systems"} position={"Software Eng Intern"} type={"Professional"} image={spartaSystems} caption={"I worked as a software engineer intern at Sparta Systems over the Summer of 2022.  There I completed work on the improvement of an internal testing tool.  I also did frontend sprint work on a new project they were creating."} />
            <ExperienceCard period={"Sep 2019 - May 2023"} title={"NJIT"} position={"B.S. Computer Science"} type={"Educational"} image={njit} caption={"I'm currently attending the New Jersey Institute of Technology in pursuit of my Bachelors in computer science.  I'm set to graduate in May of 2023.  While at NJIT I've taken classes on topics such as data structures, algorithms, web design, and many more."} />
            <ExperienceCard period={"Sep 2021 - Now"} title={"Programming Team"} position={"Member"} type={"Extracurricular"} image={programmingTeam} caption={"I've been a member of the NJIT Programming Team since the Fall 2021 semester.  This club helped me expand my knowledge of data structures and algorithms.  I would meet weekly with other members to learn a new computer science topic and then solve LeetCode problems on said topic."} />
            <ExperienceCard period={"Sep 2021 - Now"} title={"ACM"} position={"Member"} type={"Extracurricular"} image={njitACM} caption={"As a member of NJIT's ACM, I went to weekly meetings to discuss various programming events around campus.  I was also a part of ACM's web committee.  In the web committee, I was working with other members to help revamp the ACM website."} />
        </div>
    )
}