import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import ProfilePhoto from '../NavBar/Silavin.png';
import 'semantic-ui-css/semantic.min.css';
import { Link, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="BodyOfHome">
          <div className="GreetingBody">
            <p className="Greetings">Greetings, I'm Sebastian.</p>
            <p className="UnderGreetings">I am an apprentice developer specialised in <span className="Bold">front-end development</span>.</p>
            <p className="UnderGreetings">Currently, I am working for Ezsofe.</p>
            <Link to="/Portfolio"><button className="ButtonStyle">Portfolio</button></Link><br />
            <Link to="/Portfolio"><button className="ButtonStyle">My Skills</button></Link>
          </div>
        </div>
        {/*  */}
        <Navbar collapseOnSelect  className="NarBarStyle">
        <Navbar.Header>
            <Navbar.Brand>
                <div>                    
                    <Icon className="ClickableLinks" name='mail'/>
                    <Icon className="ClickableLinks" name='facebook square'/>
                    <Icon className="ClickableLinks" name='twitter square'/>
                    <a href="https://github.com/Silavin/"><Icon className="ClickableLinks" name='github square'/></a>
                    <a href="https://www.linkedin.com/in/sebastian-sim-51486ba0/"><Icon className="ClickableLinks" name='linkedin square'/></a>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav id="NavTextColorId">
                <LinkContainer to="/Skills" className="StyleNavBarButton">
                    <NavItem>MY SKILLS</NavItem>
                </LinkContainer>
                <LinkContainer to="/Portfolio" className="StyleNavBarButton">
                    <NavItem>PORTFOLIO</NavItem>
                </LinkContainer>
                <LinkContainer to="/Contact" className="StyleNavBarButton"> 
                    <NavItem>CONTACT</NavItem>
                </LinkContainer>
                <LinkContainer to="/AboutMe" className="StyleNavBarButton">
                    <NavItem>ABOUT ME</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        {/* Panel After View Width Exceeds 1024px */}

        <div className="RightPanel">
            <div className="RightPanelProfile">
                <div className="ProfilePhotoShadow">
                    <img src={ProfilePhoto} alt="Silavin's Profile" className="ProfilePhoto"/>
                </div>
                <h1 className="Identity">Sebastian Sim</h1>
                <h2 className="IdentityRole">Web Developer</h2>
            </div>
                <div className="DirectionalLinksSpacing">
                    <NavLink to="/Skills" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">
                        <p className="DirectionalLinks">MY SKILLS</p>
                    </NavLink>
                    <NavLink to="/Portfolio" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">
                        <p className=" DirectionalLinks">PORTFOLIO</p>
                    </NavLink>
                    <NavLink to="/Contact" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">
                        <p className="DirectionalLinks">CONTACT</p>
                    </NavLink>
                    <NavLink to="/AboutMe" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">
                        <p className="DirectionalLinks">ABOUT ME</p>
                    </NavLink>
                </div>
                <div className="RightPanelFooter">                    
                    <p>GET IN TOUCH</p>    
                    <Icon className="ClickableLinks" name='mail' size='big' />
                    <Icon className="ClickableLinks" name='facebook square' size='big' />
                    <Icon className="ClickableLinks" name='twitter square' size='big' />
                    <a href="https://github.com/Silavin/"><Icon className="ClickableLinks" name='github square' size='big' /></a>
                    <a href="https://www.linkedin.com/in/sebastian-sim-51486ba0/"><Icon className="ClickableLinks" name='linkedin square' size='big' /></a>
                </div>
        </div>
      </div>
    );
  }
}

export default Home;
