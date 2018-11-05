import React, { Component } from 'react';
import './AboutMe.css';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';

class AboutMe extends Component {
  
  render() {
    return (
      <div>
        <NavBar/>
        <div>
          <div className="LeftFiller"></div>
          <div className="BodyContent">
          <div className="ContentFiller"></div>
            <div id="AboutMeTextJustify">
              <h1 id="AboutMeHeader">ABOUT ME</h1>
              <p id="AboutMeText"> I enjoy reading and watching anime (especially fanatsy and adventure genre). My interest in reading was something that kick started my venture towards programming. Initally, I started reading translated novels from the web. Inspired by the community, I wanted to start creating a space for myself on the internet. From there, I started with a Wordpress website to slowly develop a keen interet in expanding. With some members of the community highly encouraging me to do so, I started to explore more options and delve in programming.</p>
              <p>I started reading up HTML and CSS for two weeks after I got out of conscription, and furthered my interest at Ezsofe. This current viewing site is the second project that I took up after a month of being in the office. I am currently adept at programming in React and I am keen on learning more.</p>
              <p id="ToBeContinued">To be continued...</p>
              <p>(If you are looking to check my experiences, you can look it up in my <Link to='/Portfolio'>Portfolio</Link>)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
