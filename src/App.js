import logo from './logo.svg';
import './App.css';

import React from 'react' ;  

const App = () => {
  return (
<>

  <div class="a" >
                  <h1 className="title red">Ala</h1>
    <img src="/imageInSrc.jpg" />
    <br/>
    <img src=".public/imageInPublic.jpg" />
    <br/>
    <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
  </div>
 
</>)
};


export default App;

