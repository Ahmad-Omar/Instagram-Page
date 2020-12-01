import React, { Component } from "react";
import "./style.css";
import img1 from "./../../../assets/1.jpg";
import img2 from "./../../../assets/2.jpg";
import img3 from "./../../../assets/3.png";
import img4 from "./../../../assets/4.png";
import img5 from "./../../../assets/5.jpg";
import Truck from "./../../../assets/truck.jpg";

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        personImg: img1,
        personName: "Emma Watson",
        personCity: "Paris, France",
        postImg: Truck,
      },
      {
        id: 2,
        personImg: img2,
        personName: "Emma Watson",
        personCity: "Paris, France",
        postImg: Truck,
      },
      {
        id: 3,
        personImg: img3,
        personName: "Emma Watson",
        personCity: "Paris, France",
        postImg: Truck,
      },
      {
        id: 4,
        personImg: img4,
        personName: "Emma Watson",
        personCity: "Paris, France",
        postImg: Truck,
      },
      {
        id: 5,
        personImg: img5,
        personName: "Emma Watson",
        personCity: "Paris, France",
        postImg: Truck,
      },
      {
        id: 6,
        personImg: img1,
        personName: "Emma Watson",
        personCity: "Paris, France",
        postImg: Truck,
      },
    ],
  };
  render() {
    const { posts } = this.state;
    const post = posts.map((post) => {
      return (
        <div className="post" key={post.id}>
          <div className="post-top">
            <div className="person-left">
              <div className="person-img">
                <img src={post.personImg} alt="person" />
              </div>
              <div className="person-info">
                <h5>{post.personName}</h5>
                <span>{post.personCity}</span>
              </div>
            </div>
            <div className="info-tab">
              <i className="fas fa-ellipsis-v"></i>
            </div>
          </div>
          <div className="post-img">
            <img src={post.postImg} alt="post-img" />
          </div>
          <div className="post-bottom">
            <div className="left-icons">
              <i className="fas fa-heart"></i>
              <i className="far fa-comment"></i>
              <i className="fas fa-location-arrow"></i>
            </div>
            <div className="right-icons">
              <i className="fas fa-bookmark"></i>
            </div>
          </div>
        </div>
      );
    });
    return <section className="posts">{post}</section>;
  }
}

export default Posts;
