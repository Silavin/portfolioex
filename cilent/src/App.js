import React, { Component } from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import PortfolioContent from "./Components/PortfolioContent";
import Admin from "./Components/Admin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
// Photoimport
import OriginPortfolio from "./Photos/OriginPortfolio/MySecondPortfolio2.jpg";
//
import FirstPortfolioCode from "./Photos/First Portfolio/First-Portfolio-home-codes2.jpg";
import FirstPortfolioRead from "./Photos/First Portfolio/First-Portfolio-read-more2.jpg";
import FirstPortfolioHome from "./Photos/First Portfolio/First-Portfolio-home2.jpg";
//
import IrishDuck from "./Photos/Irish Duck Company/Irish-Duck-Company2.jpg";
//
import Divine from "./Photos/DivineDaoLibrary/DivineDaoLibrary2.jpg";
//
import BizlinkHomePage from "./Photos/Bizlink/images/HomePage.png";
import BizlinkInquires from "./Photos/Bizlink/images/Inquires.png";
import BizlinkSignUp from "./Photos/Bizlink/images/SignUp.png";
//
import MoreWordpress from "./Photos/MoreWordpress/images/ATeamPest.png";
//
import TKLLoginPage from "./Photos/FirstMobileApp/images/LoginPage.png";
import TKLWaitingForRidePage from "./Photos/FirstMobileApp/images/WaitingForRidePage.png";

class App extends Component {
  render() {
    var portfolioContentArray = [
      {
        key: "7",
        date: "16 July till current 2018",
        title: "First React Native App",
        decription: "A taxi booking app.",
        fullDescription:
          "This was my first big tasking. It was a App that required me to use React Native and Redux. It was also my first time opening up XCode as well as Android Studio. This App is huge and a real challenge for me, who only started to program for about 4 months now. This app provided me a real challenge but I believe I really grew because of this. I especially got better with flex...",
        button: [
          "REACT",
          "REACT NATIVE",
          "ESLINT",
          "GIT",
          "XCODE",
          "ANDROID STUDIO"
        ],
        pictures: [TKLLoginPage, TKLWaitingForRidePage]
      },
      {
        key: "6",
        date: "May to July 2018",
        title: "Wordpress Sites",
        decription: "Many more Wordpress Sites",
        fullDescription:
          "After helping Ezsofe out with fixing Bizlink's website, I was tasked to set up a few Wordpress sites. I was exposed to phpMyAdmin as a database manager and nginx. There were many other technologies that I was exposed to but it was mostly surface level so I will not include them for now (Will do so after I get more confident with them).",
        button: ["WORDPRESS", "HTML", "CSS", "PHPMYADMIN", "NGINX"],
        pictures: [MoreWordpress]
      },
      {
        key: "5",
        date: "7 May 2018",
        title: "Bizlink Website Fix",
        decription: "This was my first wordpress tasking by Ezsofe.",
        fullDescription:
          "The fixes were quite numerous for this project. The website builder did not initally create this site based on the standard Wordpress plugins but instead, took it upon himself to code certain part out via PHP. There were issues regarding the mobile optimisation and the search function(Pictures down below). At a later date, I also helped implemented a contact form, which was a first time for me.",
        button: ["WORDPRESS", "HTML", "CSS", "PHP"],
        pictures: [BizlinkHomePage, BizlinkInquires, BizlinkSignUp],
        siteUrl: "https://bizlinkrentacar.com.sg/"
      },
      {
        key: "4",
        date: "12 April 2018",
        title: "My Second Website Created on React",
        decription:
          "This is the second portfolio website I made. The design was highly inspired by Jack Tomaszewski.",
        fullDescription:
          "This Portfolio website was really mind blowing. I really wanted to make everything dynamic and mobile compatible (just like the first portfolio website) so it took a great deal of effort. I still wish to expand this site even more with an SQL data base support with a framework but that will take a lot of time so, I will update this post at a later date with good news. Nonetheless, the site turned out a lot better than I had initally thought.",
        button: ["REACT", "GIT", "BOOTSTRAP", "HEROKU"],
        pictures: [OriginPortfolio]
      },

      {
        key: "3",
        date: "23 April 2018",
        title: "Irish Duck Company",
        decription: "A website for importated ducks from Silver Hill Farm",
        fullDescription:
          "The company that hired me is a distribution company that wishes to stay relevent in today's market. The template for the site is a wordpress theme with a little touching up with CSS.",
        button: ["WORDPRESS"],
        pictures: [IrishDuck],
        siteUrl: "https://irishduckcompany.com.sg/"
      },

      {
        key: "2",
        date: "9 April 2018",
        title: "My First Website Created on React",
        decription:
          "The first website was a trials site for my profolio of works.",
        fullDescription:
          "A really simple website to enforce my HTML and CSS concepts. The design is not very complementary to my skills with design but well, it was a roughly made out one as mid-way through, I had seen a portfolio site I really wanted to try and recreate.",
        button: ["REACT", "BOOTSTRAP"],
        pictures: [FirstPortfolioHome, FirstPortfolioRead, FirstPortfolioCode]
      },
      {
        key: "1",
        date: "20 December 2016",
        title: "My First Website Ever",
        decription: "My first step ever taken is this proud website of mine.",
        fullDescription:
          "Initally, it started off as a display of my own interest towards publishing translated novels but it slowly grew. Right now, there are other passionate individuals that share the same joy as me and help to add content to the site. This is also the site I had my first experienced with web hosting services and wordpress. The migration from Wordpress.com to Wordpress.org was really awakening as I had a lot to learn but the experience is certainly priceless.",
        button: ["WORDPRESS", "CPANEL"],
        pictures: [Divine],
        siteUrl: "http://www.divinedaolibrary.com"
      }
    ];

    var buttonLinksArray = [
      {
        key: "1",
        type: "REACT",
        url: "https://reactjs.org/"
      },
      {
        key: "2",
        type: "REDUX",
        url: "https://redux.js.org/"
      },
      {
        key: "3",
        type: "GIT",
        url: "https://git-scm.com/"
      },
      {
        key: "4",
        type: "WORDPRESS",
        url: "https://wordpress.com/"
      },
      {
        key: "5",
        type: "CPANEL",
        url: "http://www.divinedaolibrary.com/cpanel"
      },
      {
        key: "6",
        type: "BOOTSTRAP",
        url: "https://react-bootstrap.github.io/"
      },
      {
        key: "7",
        type: "HEROKU",
        url: "https://www.heroku.com/"
      },
      {
        key: "8",
        type: "PHP",
        url: "http://php.net/"
      },
      {
        key: "9",
        type: "HTML",
        url: "https://www.w3schools.com/html/"
      },
      {
        key: "10",
        type: "CSS",
        url: "https://www.w3schools.com/css/"
      },
      {
        key: "11",
        type: "PHPMYADMIN",
        url: "https://www.phpmyadmin.net/"
      },
      {
        key: "12",
        type: "NGINX",
        url: "https://www.nginx.com/"
      },
      {
        key: "13",
        type: "REACT NATIVE",
        url: "https://facebook.github.io/react-native/docs/getting-started.html"
      },
      {
        key: "14",
        type: "ESLINT",
        url: "https://eslint.org/"
      },
      {
        key: "15",
        type: "XCODE",
        url: "https://developer.apple.com/xcode/"
      },
      {
        key: "16",
        type: "ANDRIOD STUDIO",
        url: "https://developer.android.com/studio/"
      }
    ];

    var NoMatch = ({ location }) => (
      <div>
        <h2>
          Error 404. Page is not found. <code>{location.pathname}</code> is
          false.
        </h2>
      </div>
    );

    return (
      <div className="Font">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Skills" component={Skills} />
            <Route
              exact
              path="/Portfolio"
              render={props => (
                <Portfolio
                  data={portfolioContentArray}
                  dataLinks={buttonLinksArray}
                />
              )}
            />
            {/* Below is for each portfolio post of content*/}
            {portfolioContentArray.map((path, index) => {
              return (
                <Route
                  path={
                    "/Post/" + path.title.replace(/\s+/g, "-").toLowerCase()
                  }
                  key={index}
                  render={props => (
                    <PortfolioContent
                      data={path}
                      dataLinks={buttonLinksArray}
                    />
                  )}
                />
              );
            })}
            <Route path="/Admin" component={Admin} />
            {/* This is only for unfound urls. */}
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
