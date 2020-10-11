import React from "react";
import "./Proj.css";

export default function Proj({ info }) {
    /* constructor(props) {
        super(props)
        this.state = {
          backgroundImage: {props.image},
        }
      } */

    return (
        <div className="Proj">
            <div className="cover">

                <div className="proj-image"><img src={info.imgUrl} className="proj-image" alt="project cover" /></div>
            </div>
            <div className="hidden">
            <h2>{info.projectName}</h2>
                {info.description}
            </div>
        </div>
        
    );
}
