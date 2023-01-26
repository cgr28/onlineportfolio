import React from "react";
import Header from "../components/Header";
import "./Resume.scss"
import { Document, pdfjs, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function Resume() {

    return (
        <div className="resume container mx-auto mb-5" id="resume">
            <Header title={"Resume"} caption={"My resume.  Ready and available for download."} />
            <a href="./colbe-resume-portfolio.pdf" download data-aos="fade-down" data-aos-once="true" data-aos-anchor-placement="center-bottom"><div class="download-button text-center mx-auto mb-3">Download</div></a>
            <div className="d-flex justify-content-center" data-aos="fade-down" data-aos-once="true" data-aos-anchor-placement="center-bottom">
                <Document file="./colbe-resume-portfolio.pdf" onLoadError={console.error} className={"pdf"}>
                    <Page pageNumber={1} width={(window.screen.width <= 1024 ? window.screen.width : 1024)-24} /> 
                </Document>
            </div>
        </div>
    )
}