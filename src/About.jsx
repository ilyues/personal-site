import React from "react";
import "./About.css";

export default function About(props) {
    const [words, setWords] = React.useState(1);

    function handleClick1() {
        setWords(1);
    }
    function handleClick2() {
        setWords(2);
    }
    function handleClick3() {
        setWords(3);
    }
    function handleClick4() {
        setWords(4);
    }

    function render() {
        if (words === 1) {
            return (
                <div>
                    I'm a Chinese artist / writer / designer / first-year computer science student. I was born (and am currently based) in Auckland, New Zealand - as a side effect, I've developed a strong attachment to the sky, the sea, and the colour blue.
                </div>
            )
        }
        if (words === 2) {
            return (
                <div>
                    I'm a first year computer science student at UC Berkeley and mentored developer @ Codebase. 
                    I'm interested in .. things
                </div>
            )
        }
        if (words === 3) {
            return (
                <div>
                    I'm a writer @ Tearaway NZ, an e-magazine run by kiwi youth. You can also find my creative writing in the last 4 editions of Redraft, published by Clerestory Press.
                </div>
            )
        }
        if (words === 4) {
            return (
                <div>
                    i draw ! and paint and stuff ! my creative work focuses on social media and the human experience, identity, obligation, and abstraction. Or sometimes just things that are warm and fun; things that make your heart go "!". 
                </div>
            )
        }
    }


    return (
        <div className="About">
            <div className="portrait">
                <img src={props.image} className="image" alt="illust" />
            </div>
            <div className="bio">
                <div className="tag"><span role="img" aria-label="peace" className="emoji">✌️</span> <a href="#" className="clicker" onClick={handleClick1}> Hey there! 
                </a> I'm </div> 

                <div className="title">{props.name}
                </div>
                <div className="tag">I <a href="#" className="clicker" onClick={handleClick2}>code</a>  / <a href="#" className="clicker" onClick={handleClick3}>write</a>  / <a href="#" className="clicker" onClick={handleClick4}>create</a>.
                </div>
                <div className="descrip">{render()}</div> 
                <div className="contact">
                    <span role="img" aria-label="mail" className="emoji">📬</span> <a href="mailto:ilyues@berkeley.edu">ilyues@berkeley.edu</a>
                    <br /><span role="img" aria-label="peace" className="emoji">🕊️</span> <a href="https://twitter.com/ILYUES/" target="_blank">@ILYUES</a>
                    <br /><span role="img" aria-label="art" className="emoji">🎨</span> <a href="https://isabel.li/" target="_blank">Portfolio</a>
                </div> 
            </div>
        </div>
    );
}
