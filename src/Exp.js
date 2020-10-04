import React from "react";
import "./Exp.css";

export default function Exp(props) {

    return (
        <div className="Exp">
            <div className="header">{props.title}</div>
            <div className="descrip">{props.descrip}</div> 
            <div className="date">{props.date}</div> 
        </div>
    );
}
