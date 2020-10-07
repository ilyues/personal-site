import React from "react";
import "./Exp.css";

export default function Exp(props) {

    return (
        <div className="Exp">
            <div className="date">{props.date}</div> 
            <div className="exp-descrip">{props.descrip}</div> 
            <div className="header">{props.title}</div>
        </div>
    );
}
