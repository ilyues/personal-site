import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import './About.css';
import './Exp.css';
import Ab from './About';
import Proj from './Proj'
import Exp from './Exp'
import circle from "./assets/circle.png";
import proj1 from "./assets/proj1.png";
import proj2 from "./assets/proj2.png";
import proj3 from "./assets/proj3.png";

/*   function App() {
  return (
    <div className="App">
      <h>ISABEL LI</h>
      <img src={circle} className="image" alt="illust" />
	  <p>about: ISABEL YUE LI is a Chinese artist / writer / designer / first-year computer science student. They were born (and are currently based) in Auckland, New Zealand - as a side effect, they've developed a strong attachment to the sky, the sea, and the colour blue. 
Isabel's creative work focuses on social media and the human experience, identity, obligation, and abstraction. Or sometimes just things that are warm and fun; things that make your heart go "!". 
Their coding work focuses on debugging and squinting at compiler errors, as well as managing a firecracker imagination which produces project ideas faster than they can learn to execute them.
They're currently looking for freelance work, and are particularly interested in projects which promote social good and uplift BIPOC + LGBTQ/SGL communities.</p>
	  <p>experiences: NONE 
❤️
    </p>
	  <p>projicts</p>
	  <p><a href="mailto:ilyues@berkeley.edu">ilyues@berkeley.edu</a> :)</p>
    </div>
  );
}   */
 
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ISABEL 玥 LI</title>
        <link id="favicon" rel="icon" type="image/png" href={circle} sizes="16x16" />
      </Helmet>
      <svg className="bg-shape" viewBox="-65 107.5 150 100">
        <path fill="#0F3933" d="M25.5,-43C32.4,-35.2,37,-27.1,35.1,-19.5C33.3,-11.8,25,-4.7,22,1.8C19,8.4,21.3,14.4,19.4,17.1C17.5,19.9,11.5,19.3,6.6,19.5C1.6,19.6,-2.3,20.5,-10.3,23.4C-18.2,26.4,-30.1,31.4,-44.7,30.1C-59.3,28.8,-76.5,21.1,-83.2,8.8C-89.8,-3.5,-85.9,-20.4,-78.4,-35.3C-70.9,-50.2,-59.8,-63,-46.1,-67.7C-32.5,-72.3,-16.2,-68.9,-3.5,-63.5C9.3,-58.1,18.6,-50.7,25.5,-43Z" transform="translate(80 90)"/>
      </svg>
      <div className="About">
      
      <Ab
        image ={circle}
        name="Isabel 玥 Li"
      />
      </div>
      <div className="row">
        <div className="Experiences">
          <h1>Experiences</h1>
          {/* {props.funfacts.map((fact, i) => (
                <h4>
                Fun fact {i + 1}: {fact}
                </h4>
            ))} */}
          <Exp 
            title="exp 1"
            date="2000"
            descrip="exp 1 descrip"
          />
          <Exp 
            title="exp 2"
            date="2000"
            descrip="exp 2 descrip"
          />
          <Exp 
            title="exp 3"
            date="2000"
            descrip="exp 3 descrip"
          />
        
        </div>
        <div className="Projects">
          <h1>Projects</h1>
          <Proj 
            image={proj1}
            name="proj 1"
            descrip="proj 1 descrip"
            link=""
          />
          <Proj 
            image={proj2}
            name="proj 2"
            descrip="proj 2 descrip"
            link=""
          />
          <Proj 
            image={proj3}
            name="proj 3"
            descrip="proj 3 descrip"
            link=""
          />
        </div>
        
      </div>
      <svg className="path1" viewBox="-80 -25 200 200">
        <path fill="none" stroke="#D31C13" stroke-width="0.15" d="M41.8,-67.1C50,-59.8,49.6,-41.1,52.5,-26.4C55.4,-11.7,61.6,-1,62.3,10.4C62.9,21.8,57.9,33.8,49.9,43.5C41.9,53.2,30.9,60.6,19,63.8C7,67,-6,66,-13,57.8C-20,49.6,-20.9,34.2,-25.6,24.5C-30.4,14.9,-39.1,10.9,-47.4,2.3C-55.7,-6.3,-63.6,-19.5,-61.8,-30.2C-60,-41,-48.5,-49.3,-36.6,-54.9C-24.7,-60.6,-12.3,-63.6,2.2,-67C16.8,-70.5,33.6,-74.5,41.8,-67.1Z" transform="translate(100 100)" />
      </svg> 
      <svg className="path2" viewBox="50 -10 200 200">
  <path fill="none" stroke="#05738C" stroke-width="0.15" d="M31,-55.6C37.7,-49.9,38.9,-36.5,36.5,-26C34.1,-15.4,28.2,-7.7,28.9,0.5C29.7,8.6,37.3,17.3,39.7,27.8C42.1,38.4,39.4,50.9,31.9,53.8C24.4,56.6,12.2,49.8,2.4,45.6C-7.3,41.3,-14.7,39.7,-25.2,38.6C-35.8,37.6,-49.6,37.1,-50.8,30.7C-52,24.4,-40.7,12.2,-31.7,5.2C-22.6,-1.8,-15.9,-3.6,-12.6,-6.3C-9.3,-9,-9.4,-12.7,-7.8,-21.3C-6.3,-30,-3.1,-43.7,4.5,-51.5C12.2,-59.3,24.3,-61.3,31,-55.6Z" transform="translate(100 100) rotate(-20  10 0)" />
</svg>
      {/* <svg className="path2" viewBox="50 -10 200 200">
        <path fill="none" stroke="#05738C" stroke-width="0.15" d="M33,-45C43.6,-44.6,53.4,-36.7,50.8,-27.6C48.2,-18.4,33.2,-7.9,26.2,0C19.2,7.8,20.1,13,20.2,23.4C20.4,33.9,19.8,49.5,13.5,55.8C7.3,62.1,-4.6,59.1,-16.6,55.9C-28.7,52.7,-40.9,49.4,-51,41.9C-61.1,34.4,-69,22.7,-73.8,8.8C-78.5,-5,-80,-21.1,-75.6,-36C-71.1,-50.9,-60.8,-64.7,-47.2,-63.6C-33.6,-62.6,-16.8,-46.8,-2.8,-42.5C11.2,-38.2,22.5,-45.4,33,-45Z" transform="translate(50 80)" />
      </svg>  */}

      {/* 
      <div className="shapes">
      <svg className="shapes" viewBox="50 -10 200 200">
        <path fill="none" stroke="#05738C" stroke-width="0.15" d="M33,-45C43.6,-44.6,53.4,-36.7,50.8,-27.6C48.2,-18.4,33.2,-7.9,26.2,0C19.2,7.8,20.1,13,20.2,23.4C20.4,33.9,19.8,49.5,13.5,55.8C7.3,62.1,-4.6,59.1,-16.6,55.9C-28.7,52.7,-40.9,49.4,-51,41.9C-61.1,34.4,-69,22.7,-73.8,8.8C-78.5,-5,-80,-21.1,-75.6,-36C-71.1,-50.9,-60.8,-64.7,-47.2,-63.6C-33.6,-62.6,-16.8,-46.8,-2.8,-42.5C11.2,-38.2,22.5,-45.4,33,-45Z" transform="translate(50 80)" />
      </svg> 
      <svg className="bg-shape" viewBox="-50 20 150 200" width="1440">
        <path fill="#0F3933" d="M25.5,-43C32.4,-35.2,37,-27.1,35.1,-19.5C33.3,-11.8,25,-4.7,22,1.8C19,8.4,21.3,14.4,19.4,17.1C17.5,19.9,11.5,19.3,6.6,19.5C1.6,19.6,-2.3,20.5,-10.3,23.4C-18.2,26.4,-30.1,31.4,-44.7,30.1C-59.3,28.8,-76.5,21.1,-83.2,8.8C-89.8,-3.5,-85.9,-20.4,-78.4,-35.3C-70.9,-50.2,-59.8,-63,-46.1,-67.7C-32.5,-72.3,-16.2,-68.9,-3.5,-63.5C9.3,-58.1,18.6,-50.7,25.5,-43Z" transform="translate(90 80)"/>
      </svg>
      <svg className="bg-shape" viewBox="-80 -25 200 200">
        <path fill="none" stroke="#D31C13" stroke-width="0.15" d="M41.8,-67.1C50,-59.8,49.6,-41.1,52.5,-26.4C55.4,-11.7,61.6,-1,62.3,10.4C62.9,21.8,57.9,33.8,49.9,43.5C41.9,53.2,30.9,60.6,19,63.8C7,67,-6,66,-13,57.8C-20,49.6,-20.9,34.2,-25.6,24.5C-30.4,14.9,-39.1,10.9,-47.4,2.3C-55.7,-6.3,-63.6,-19.5,-61.8,-30.2C-60,-41,-48.5,-49.3,-36.6,-54.9C-24.7,-60.6,-12.3,-63.6,2.2,-67C16.8,-70.5,33.6,-74.5,41.8,-67.1Z" transform="translate(100 100)" />
      </svg> 
      </div> */}

    </div>
  );
} 

export default App;
