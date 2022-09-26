import React from "react";
import SkillBar from "../components/SkillBar"
import Header from "../components/Header";
import "./Skills.scss"

export default function Connect() {
    return (
        <div className="skills container mx-auto" id="skills">
            <Header title={"Skills"} caption={"These are some of the skills that I've picked up over the years."} />
            <div className="skills-container">
                <SkillBar name={"Python"} level={85} num={0}/>
                <SkillBar name={"JavaScript"} level={75} num={1}/>
                <SkillBar name={"HTML"} level={80} num={2} />
                <SkillBar name={"C++"} level={70} num={3} />
                <SkillBar name={"Rest API's"} level={75} num={4} />
                <SkillBar name={"Problem Solving"} level={80} num={5} />
                <SkillBar name={"Data Structures and Algos"} level={85} num={6} />
                <SkillBar name={"MySQL"} level={60} num={7} />
                <SkillBar name={"React"} level={75} num={8}/>
                <SkillBar name={"Java"} level={65} num={9}/>
            </div>
        </div>
    )
}