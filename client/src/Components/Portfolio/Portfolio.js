import React, { Component } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.Timeline = this.Timeline();
    this.PostContent = this.PostContent();
  }

  // * This is for big width devices.
  Timeline = () => {
    return (
      <Timeline>
        {this.props.data.map(content => {
          return (
            <div id="TimeLineText">
              <TimelineEvent
                bubbleStyle={{
                  backgroundColor: "#000000",
                  borderRadius: "0",
                  height: "0px",
                  width: "0px",
                  border: "3px solid rgba(13,13,145,.8)",
                  marginLeft: "14px",
                  top: "15px"
                }}
                style={{
                  backgroundColor: "#fff",
                  padding: "",
                  boxShadow: "none !important"
                }}
              >
                <h2 className="ContentTitle">{content.title}</h2>
                <h3 className="ContentDescription">{content.decription}</h3>
                <Link
                  to={
                    "/Post/" + content.title.replace(/\s+/g, "-").toLowerCase()
                  }
                >
                  <button className="ReadMoreButton">More details</button>
                </Link>
                <p className="TechnologyTag">Technologies</p>
                {content.button.map(buttons => {
                  return this.props.dataLinks.map((linking, key) => {
                    if (buttons === linking.type) {
                      return (
                        <a key={key} href={linking.url}>
                          <button className="TechListButtonStyle2">
                            {linking.type}
                          </button>
                        </a>
                      );
                    }
                  });
                })}
                <img
                  src={content.pictures[0]}
                  alt=" "
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: "10px 0px 5vh 0px"
                  }}
                />
              </TimelineEvent>
            </div>
          );
        })}
      </Timeline>
    );
  };

  //   The below is for small width devices.
  PostContent = () => {
    return this.props.data.map(content => {
      return (
        <div className="TimeLineText">
          <hr id="HorizontalLineSmallWidth" />
          <h2 className="ContentTitle">{content.title}</h2>
          <h3 className="ContentDescription">{content.decription}</h3>
          <Link
            to={"/Post/" + content.title.replace(/\s+/g, "-").toLowerCase()}
          >
            <button className="ReadMoreButton">More details</button>
          </Link>
          <p className="TechnologyTag">Technologies</p>
          {content.button.map(buttons => {
            return this.props.dataLinks.map((linking, key) => {
              if (buttons === linking.type) {
                return (
                  <a href={linking.url}>
                    <button className="TechListButtonStyle2">
                      {linking.type}
                    </button>
                  </a>
                );
              }
            });
          })}
          <img
            src={content.pictures[0]}
            alt=" "
            style={{
              width: "100%",
              height: "auto",
              padding: "10px 0px 5vh 0px"
            }}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="LeftFiller" />
        <div className="BodyContent">
          <div>
            <h1 id="PortfolioHeader">PORTFOLIO</h1>
            <p id="PortfolioText">See all the work I have done so far!</p>
            <hr id="PortfolioHorizonal" />
            {/* This is for big width devices. */}
            <div id="TimeLineForBigWidth">{this.Timeline}</div>

            {/* The below is for small width devices.*/}

            <div id="TimeLineForSmallWidth">{this.PostContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
