import React from "react";
import "./Proj.css";

export default function Proj(props) {
    /* constructor(props) {
        super(props)
        this.state = {
          backgroundImage: {props.image},
        }
      } */

    return (
        <div className="Proj">
            <div className="cover">

                <div className="proj-image"><img src={props.image} className="proj-image" alt="project cover" /></div>
            </div>
            <div className="hidden">
            <h2>{props.name}</h2>
                {props.descrip}
            </div>
        </div>
        
    );
}
