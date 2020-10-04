import React from "react";
import "./About.css";

export default function About(props) {
    const [words, setWords] = React.useState(props.descrip1);

    function handleClick1() {
        setWords(props.descrip1);
    }
    function handleClick2() {
        setWords(props.descrip2);
    }
    function handleClick3() {
        setWords(props.descrip3);
    }
    function handleClick4() {
        setWords(props.descrip4);
    }

    /* function renderDescrip() {
        if
    } */

    return (
        <div className="About">
            <div className="header">
                <img src={props.image} className="image" alt="illust" />
                <h1>{props.name}</h1>
                <a href="#" onClick={handleClick1}>
                    Click me 1
                </a>
                <a href="#" onClick={handleClick2}>
                    Click me 2
                </a>
                <a href="#" onClick={handleClick3}>
                    Click me 3
                </a>
                <a href="#" onClick={handleClick4}>
                    Click me 4
                </a>
            </div>
            <div className="descrip">{words}</div> 
            <div className="contact">{props.contact}</div> 
            {/* {props.funfacts.map((fact, i) => (
                <h4>
                Fun fact {i + 1}: {fact}
                </h4>
            ))} */}
        </div>
    );
}

/* function Descrip(props) {
    const whichDescrip = props.whichDescrip;
    if ()

}

function CoderDescrip(props) {

}

function CreatorDescrip(props) {

}

function WriterDescrip(props) {

}
 */