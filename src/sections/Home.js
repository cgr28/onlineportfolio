import React from "react";
import "./Home.scss"
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import headshot from "../imgs/headshot.jpg"

export default function Home() {

  return (
    <div className="home container mx-auto" id="home" >
      <SocialBar />
      <Header title={"Welcome!"} caption={"Hi, thanks for visiting my online portfolio!  My name is Colbe Roberson.  I'm currently a computer science student at the New Jersey Institute of Technology.  I hope that through this website, you can learn about the work I've done in programming and computer science."}/>
      <img src={headshot} className="headshot mx-auto mb-5" data-aos="fade-down" data-aos-once="true" alt="Colbe Roberson" />
    </div>
  )
}
