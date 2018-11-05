import React, { Component } from 'react';
import NavBar from '../NavBar';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div>
        <NavBar />    
        <div className="LeftFiller"></div>
        <div className="ContentFiller"></div>
        <div className="BodyContent">
          <h1 id="MySkillsHeader">MY SKILLS</h1>
          <p className="MySkillsText">  I am a <b>front-end developer</b> with experience of handling a few websites.</p>
          <p className="MySkillsText">I have maintained, developed and launched a few projects; most of which were well received by the community.</p>
          <p className="MySkillsText">I am well versed in React and the libraries and technologies associated with it. As for backend development, I am exposed to Wordpress; sufficient enough for the advacne basic requirements of web development.</p>
          <hr />
          <i class="fa fa-edit"> FRONT-END WEB DEVELOPMENT </i>
          <p className="MySkillsText">I specialise in applications written in React. I have recently started touching on Redux, which will borden my scope to more advance applications.</p>
          <p className="MySkillsText">I am knowledgeable about the lastest technologies that come up in this field, keeping myself ahead of my competition.</p>
          <p className="MySkillsText">The experience I gained through my hobby as a video editor shines through in this field as I am well decked-out to do any technical photo and video changes.</p>
          <hr />
          <i class="fa fa-code"> BACK-END WEB DEVELOPMENT </i>
          <p className="MySkillsText">Trying to aid Ezsofe create a CMS</p>
          <hr />
          <i class="fa fa-terminal"> WHAT ABOUT DEV-OPS, DESIGN, UI ? </i>
          <p className="MySkillsText">With my experiences, I have a good grasp on UI and how to make it a pleasent experience for users to interact with.</p>
          <p className="MySkillsText">There is a consistency with my designs in making it simple and easy to use - an aspecthihgly valued by viewers.</p>
          <hr />
        </div>
      </div>
    );
  }
}

export default Skills;
