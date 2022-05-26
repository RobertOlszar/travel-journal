import React from "react";
import image from "../images/globus.svg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={image} />
            <h2>my travel journal</h2>
        </nav>
    )
}