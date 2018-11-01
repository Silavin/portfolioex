import React, { Component } from 'react';
import NavBar from '../NavBar';
import './PortfolioContent.css';


class PortfolioContent extends Component {

  constructor(props) {
    super(props);

    this.buttons = this.generateButton()
    this.Photos = this.generatePhotos()
  }
  
  generateButton = () => {
    var results = [];
    for (var button in this.props.data.button) {
      for (var link in this.props.dataLinks) {
          if (button === link.type) {
             results.push(<a href={link.url}><button className="TechListButtonStyle2">{link.type}</button></a>);
          }
      }
    }

    return results;
  }

  generatePhotos = () => {
    return(
      this.props.data.pictures.map((Photos)=>{
        return(
          <img src={Photos} alt="Nil" style={{width:"100%", height:"auto", padding:"10px 0px 10px 0px", }}/>
        )
      })
    )
  }

  render() {

    return (
      <div>
        <NavBar />
        <div> 
        <div className="LeftFiller"></div>
          <div className="BodyContent">
          <div className="ContentFiller"></div>
            <div className="FilledContent">
              <div id="PortfolioContentTextJustify">
                <h1 id="PortfolioContentHeader">{this.props.data.title}</h1>
                <hr />
                <h3>Technology utilised:</h3>
                {this.buttons}
                <p>{this.props.data.fullDescription}</p>
                {this.Photos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioContent;
