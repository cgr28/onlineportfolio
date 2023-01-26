import React from "react";
import Header from "../components/Header";
import "./Resume.scss"
import { Document, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const url = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = url;

export default function Resume() {
    return (
        <div className="resume container mx-auto mb-5" id="resume">
            <Header title={"Resume"} caption={"My resume.  Ready and available for download."} />
            <a href="./public/colbe-resume-portfolio.pdf" download data-aos="fade-down" data-aos-once="true"><div class="download-button text-center mx-auto mb-3">Download</div></a>
            <Document file="./public/colbe-resume-portfolio.pdf" onLoadError={console.error} />
        </div>
    )
}