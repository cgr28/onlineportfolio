import React from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import "./Projects.scss"
import simplyWeather from "../imgs/simplyweather.jpg"
import mazeGenerator from "../imgs/maze.svg"
import multidest from "../imgs/multidest.jpg"
import portfolio from "../imgs/portfolio.jpg"
import slidingPuzzle from "../imgs/15-puzzle.jpg"

export default function Projects() {

    return (
        <div className="projects container mx-auto " id="projects">
            <Header title={"Projects"} caption={"These are some of the various projects I've made over the years."} />
            <div className="row projects-row mx-auto" style={{width: "fit-content"}}>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ProjectCard title={"Simply Weather"} image={simplyWeather} caption={"Simply Weather is a website that lets you view the weather anywhere in the world.  You may also favorite locations so that they appear on the home page.  I used the OpenWeatherMap API to receive the weather data, then displayed it using Django, CSS, HTML, and JS."} gitLink={"https://github.com/cgr28/simplyweather"} webLink={"https://simplyweatherapp.herokuapp.com/"} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ProjectCard title={"Maze Generator/Solver"} image={mazeGenerator} caption={"This is a website I created that generates mazes and solutions using one of the many algorithms I implemented.  I wrote the backend in Python Flask and the frontend was made using CSS, HTML, JS, and Bootstrap."} gitLink={"https://github.com/cgr28/maze-creator-and-solver"} webLink={"https://maze-creator-and-solver.herokuapp.com/"} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ProjectCard title={"Auto Censor"} image={"https://raw.githubusercontent.com/cgr28/autocensor/main/censor-example.png"} caption={"This is a Python script I wrote that allows you to censor a given set of words in an image.  I used Tesseract OCR for character recognition and OpenCV to load and edit the image."} gitLink={"https://github.com/cgr28/autocensor"} webLink={"https://github.com/cgr28/autocensor#auto-censor"} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ProjectCard title={"MultiDest"} image={multidest} caption={"I created this website in a group with 4 other students.  MultiDest is a multi-stop route optimizer.  This means when you provide it with multiple stops, it will calculate the route that gets you there in the shortest distance or time.  It was created using Python Dash."} gitLink={"https://github.com/It-s-Saturday/MultiDest_Dash"} webLink={"https://multidest.herokuapp.com/"} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ProjectCard title={"Online Portfolio"} image={portfolio} caption={"The page you're currently visiting.  My online portfolio is a place where I showcase any skills that I've been picking up or projects that I've been working on. Overall it's a place where you can learn more about me and what I've been up to. This website was made using ReactJS."} gitLink={"https://github.com/cgr28/onlineportfolio"} webLink={"https://colbe.me"} />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ProjectCard title={"15 Puzzle Solver/Game"} image={slidingPuzzle} caption={"A 15 puzzle is a sliding puzzle game with 15 tiles.  The goal is to get the tiles in numerical order.  I implemented solvers using three different algorithms including A*, IDA*, and Best First Search.  This project was done entirely in Python."} gitLink={"https://github.com/cgr28/15-puzzle-solver"} webLink={"https://github.com/cgr28/15-puzzle-solver#15-puzzle-solver"} />
                </div>
            </div>
        </div>
    )
}