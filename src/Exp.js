import React from "react";
import "./Exp.css";

export default function Exp({ info }) {

    return (
        <div className="Exp">
            <div className="date">{info.date}</div> 
            <div className="exp-descrip">{info.tags}</div> 
            <div className="header">{info.name}</div>
        </div>
    );
}
