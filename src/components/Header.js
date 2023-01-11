import React from "react";
import "./Header.scss"

export default function Header({ title, caption }) {
    return (
        <div id="header-container" className="header mb-5">
            <h3 id="header-title" className="text-left">{title}</h3>
            <p id="header-caption" className="text-left">{caption}</p>
        </div>
    )
}