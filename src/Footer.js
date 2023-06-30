import React from "react";
import "./Footer.scss"
import github from "./imgs/github.svg"
import linkedin from "./imgs/linkedin.svg"
import medium from "./imgs/medium.svg"

export default function Footer() {
    return (
        <div id="footer" class="footer container-fluid text-center py-5">
            <div class="row">
                <div className="col">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/colbe-roberson-a01734221/"><img class="footer-img" id="linkedin" height="50" width="50" src={linkedin} alt="linkedin" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@roberson.colbe_91639" class="mx-2"><img class="footer-img" id="medium" height="50" width="50" src={medium} alt="medium" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/cgr28"><img class="footer-img" id="github" height="50" width="50" src={github} alt="github" /></a>
                </div>
                <div className="mt-2 e-mail"> 
                    <p>email: <a href="mailto:cgr28@njit.edu">cgr28@njit.edu</a> / <a href="mailto:roberson.colbe@gmail.com">roberson.colbe@gmail.com</a></p>
                    <p>updated: 6/30/2023</p>
                </div>
            </div>

        </div>
    )
}