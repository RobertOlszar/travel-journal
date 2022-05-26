import React from "react";
import imagePin from "../images/pin.svg";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl}/>
            <div className="card--text">
                <div className="card--text--top">
                    <h3><img src={imagePin}/>{props.location}</h3>
                    <a href={`${props.googleMapsUrl}`} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="cardDates">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}