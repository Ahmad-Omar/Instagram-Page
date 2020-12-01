import React, { Component } from "react";
import "./style.css";
import IMG2 from "./../../../assets/2.jpg";
import IMG3 from "./../../../assets/3.png";
import IMG4 from "./../../../assets/4.png";
import IMG5 from "./../../../assets/5.jpg";
import Tech from "./../../../assets/tech.png";

class Stories extends Component {
  state = {
    stories: [
      {
        mainImg: IMG2,
        mainTitle: "#Technology",
        SecondImg: Tech,
        secondTitle: "#Android",
      },
      {
        mainImg: IMG3,
        mainTitle: "#Travels",
        SecondImg: Tech,
        secondTitle: "#Airlines",
      },
      {
        mainImg: IMG4,
        mainTitle: "#Transport",
        SecondImg: Tech,
        secondTitle: "#Truck",
      },
      {
        mainImg: IMG5,
        mainTitle: "#Travels",
        SecondImg: Tech,
        secondTitle: "#Tours",
      },
    ],
  };
  render() {
    const { stories } = this.state;
    const story = stories.map((story) => {
      return (
        <div className="story">
          <div className="circle-side">
            <div className="circle-img">
              <img src={story.mainImg} alt="img2" />
            </div>
            <span>{story.mainTitle}</span>
          </div>
          <div className="rectangle-side">
            <div className="rectangle-img">
              <img src={story.SecondImg} alt="Tech" />
            </div>
            <span>{story.secondTitle}</span>
          </div>
        </div>
      );
    });
    return (
      <section className="stories">
        <div className="add-story">
          <div className="add-icon">
            <i className="fas fa-plus"></i>
          </div>
          <span>Add Story</span>
        </div>
        <div className="stories-items">{story}</div>
      </section>
    );
  }
}

export default Stories;
