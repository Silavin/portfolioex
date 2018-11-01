import React, { Component } from 'react';
import './Contact.css';
import NavBar from '../NavBar';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="LeftFiller"></div>
        <div className="ContentFiller"></div>
        <div className="BodyContent">
          <h1 id="ContactMe">CONTACT ME</h1>
          <p id="ContactMeText">I am available for chats and question. If there are any job specifications, I can only do them in my spare time.</p>
          <div className="DeclareGridForContact">
            {/* <div className="ContactTagFont"> */}
              <div>
                <p className="ContactEmail">E-mail:</p>
              </div>
              <div className="ContactLinkedin">
                <p>LinkedIn:</p>
              </div>
              <div className="ContactGithub">
                <p>Github:</p>
              </div>
              <div className="ContactFacebook">
                <p>Facebook:</p>
              </div>
              <div className="ContactTwitter">
                <p>Twitter:</p>
              </div>
            {/* </div> */}
            {/* <div className="ContactMeLinks"> */}
              <div className="GridContactIconMail">
                <Icon name='mail' size='large'/>
                <span>silverdolfin101@gmail.com</span>
              </div>
              <div className="GridContactIconLinkedin">
                <a href="https://www.linkedin.com/notifications/">
                  <Icon name='linkedin square' size='large'/>
                  <span>Sebastian Sim</span>
                </a>
              </div>
              <div className="GridContactIconGithub">
                <a href="https://github.com/Silavin/">
                  <Icon name='github square' size='large'/>
                  <span>Silavin</span>
                </a>
              </div>
              <div className="GridContactIconFacebook">
                <Icon name='facebook square' size='large'/>
                <span> - </span>
              </div>
              <div className="GridContactIconTwitter">
                <Icon name='twitter square' size='large'/>
                <span> - </span>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
