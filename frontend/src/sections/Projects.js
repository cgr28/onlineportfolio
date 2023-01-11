import React from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import "./Projects.scss";
import simplyWeather from "../imgs/simplyweather-projects.svg";
import simplyWeatherGif from "../imgs/simplyweather-walkthrough.gif";
import mazeGenerator from "../imgs/maze-creator-projects.jpg";
import multidest from "../imgs/multidest-projects.svg";
import multidestGif from "../imgs/multidest-walkthrough.gif";
import mazeGif from "../imgs/maze-creator-walkthrough.gif";
import slidingPuzzle from "../imgs/n-puzzle-solver.jpg";
import slidingPuzzleGif from "../imgs/n-puzzle-walkthrough.gif";
import censorThis from "../imgs/censor-this-projects.svg";
import censorThisGif from "../imgs/censor-this-walkthrough.gif";
import bookWorms from "../imgs/book-worms.jpg"
import bookWormsGif from "../imgs/walkthrough-book-worms.gif"

export default function Projects() {
  return (
    <div className="projects container mx-auto " id="projects">
      <Header
        title={"Projects"}
        caption={
          "These are some of the various projects I've made over the years.  Hover over an image to see a short demo (tap on mobile)."
        }
      />
      <div
        className="row projects-row mx-auto"
        style={{ width: "fit-content" }}
      >
        <div className="col-sm-12 col-md-6 col-lg-4">
          <ProjectCard
            title={"N-Puzzle Solver"}
            gif={slidingPuzzleGif}
            image={slidingPuzzle}
            caption={
              "Takes an n-puzzle as input and outputs the steps necessary to solve the puzzle.  Utilizes three search algorithms including best-first search, A*, IDA*. Also features three heuristics, including pattern database, manhattan distance, and euclidean distance.  This project was done entirely in Java and React."
            }
            gitLink={"https://github.com/cgr28/n-puzzle-java"}
            webLink={
              "https://github.com/cgr28/n-puzzle-java#install-and-run-app"
            }
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <ProjectCard
            title={"Maze-pedia"}
            gif={mazeGif}
            image={mazeGenerator}
            caption={
              "This is a website I created that generates mazes and solutions using one of the many algorithms I implemented.  I wrote the backend in Python Flask and the frontend was made using React."
            }
            gitLink={
              "https://github.com/cgr28/maze-creator-and-solver/tree/aws"
            }
            webLink={"http://www.maze-pedia.com/"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <ProjectCard
            title={"Book Worms"}
            gif={bookWormsGif}
            image={bookWorms}
            caption={
              "Lead a team of 3 in developing a web app, that enables users to discuss books and connect with others through online book clubs.  This was completed as the final project for CS490 at NJIT.  To make this website I used Python Flask, React, and MySQL."
            }
            gitLink={"https://github.com/ag2382/Book-Worms"}
            webLink={"https://bookworms490.herokuapp.com/"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <ProjectCard
            title={"censor-this"}
            gif={censorThisGif}
            image={censorThis}
            caption={
              "This is a Python command line script I made that can be used to censor words in an image.  I used Tesseract OCR for character recognition and OpenCV to load and edit the image."
            }
            gitLink={"https://github.com/cgr28/censor-this"}
            webLink={"https://pypi.org/project/censor-this/"}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <ProjectCard
            title={"MultiDest"}
            gif={multidestGif}
            image={multidest}
            caption={
              "I created this website in a group with 4 other students.  MultiDest is a multi-stop route optimizer.  This means when you provide it with multiple stops, it will calculate the route that gets you there in the shortest distance or time.  It was created using Python Dash."
            }
            gitLink={"https://github.com/It-s-Saturday/MultiDest_Dash"}
            webLink={"https://multidest.herokuapp.com/"}
          />
        </div>
        {/* <div className="col-sm-12 col-md-6 col-lg-4">
          <ProjectCard
            title={"Online Portfolio"}
            gif={portfolioGif}
            image={portfolio}
            caption={
              "The page you're currently visiting!  My online portfolio is a place where I showcase any skills that I've been picking up or projects that I've been working on. Overall it's a place where you can learn more about me and what I've been up to. This website was made using ReactJS."
            }
            gitLink={"https://github.com/cgr28/onlineportfolio"}
            webLink={"https://colbe.me"}
          />
        </div> */}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <ProjectCard
            title={"Simply Weather"}
            gif={simplyWeatherGif}
            image={simplyWeather}
            caption={
              "Simply Weather is a website that lets you view the weather anywhere in the world.  You may also favorite locations so that they appear on the home page.  I used the OpenWeatherMap API to receive the weather data, then displayed it using Django, CSS, HTML, and JS."
            }
            gitLink={"https://github.com/cgr28/simplyweather"}
            webLink={"https://simplyweatherapp.herokuapp.com/"}
          />
        </div>

      </div>
    </div>
  );
}
