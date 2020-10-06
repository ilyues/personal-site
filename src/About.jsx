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
                    Creative & computer science student. <br />Born (and currently based) in Auckland, NZ.
                    <br />Here to uplift BIPOC + LGBTQ/SGL communities.
                </div>
            )
        }
        if (words === 2) {
            return (
                <div>
                    I'm a first year computer science student at <a href="http://berkeley.edu" target="_blank">UC Berkeley</a> and mentored developer @ <a href="http://codebase.berkeley.edu/" target="_blank">Codebase</a>. 
                </div>
            )
        }
        if (words === 3) {
            return (
                <div>
                    Sometimes I write (and draw) for <a href="https://tearaway.co.nz/" target="_blank">Tearaway NZ</a>. You can also find my creative writing in the last 4 editions of <a href="http://clerestorypress.co.nz/redraft" target="_blank">Re-Draft</a>, published by Clerestory Press.
                </div>
            )
        }
        if (words === 4) {
            return (
                <div>
                    I'm a freelance illustrator and graphic designer. I also have some experience in character design and architectural drawing. I love <a href="https://isabel.li/paper" target="_blank">oils and gouache</a>, and bring my <a href ="https://isabel.li/pixels" target="_blank">tablet</a> everywhere. 
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
