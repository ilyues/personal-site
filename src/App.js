import React from 'react';
import logo from './logo.svg';
import './App.css';
import './About.css';
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
      <div className="About">
      <Ab
        image ={circle}
        name="Isabel 玥 Li"
      />
      </div>
      <div className="row">
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
