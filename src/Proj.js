import React from "react";
import "./Proj.css";

export default function Proj(props) {

    return (
        <div className="Proj">
            <img src={props.image} className="image" alt="illust" />
            <div className="name">{props.title}</div>
            <div className="descrip">{props.descrip}</div> 
        </div>
    );
}
