import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ab from './About';
import Proj from './Proj'
import Exp from './Exp'
import circle from "./assets/circle.png";
import proj1 from "./assets/proj1.png";
import proj2 from "./assets/proj2.png";
import proj3 from "./assets/proj3.png";

function App() {
  return (
    <div className="App">
      <div className="About">
      <Ab
        image ={circle}
        name="isabel li"
        descrip1="hi"
        descrip2="hello"
        descrip3="hiya"
        descrip4="welp"
        contact="say hi"
      />
      </div>
      <div>
        <div className="Projects">
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
        <div className="Experiences">
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
      </div>

    </div>
  );
}

export default App;
