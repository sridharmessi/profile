import React from "react";
import "./about.css";
import ME from "../../pics/me.png";
import { BsFillAwardFill } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";
import { FaFolderOpen } from "react-icons/fa";

const App = () => {
  return (
    <section className="rown" id="about">
      <h5> Get to know</h5>
      <h2> About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="aboutimage" width="250" height="350" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsFillAwardFill className="about_icon" />
              <h5>Experience</h5>
              <small> 1+ Years working</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Completed</h5>
              <small> 4+ projects</small>
            </article>
            <article className="about_card">
              <BiHeadphone className="about_icon" />
              <h5>Support</h5>
              <small> 2+ 24/7 online</small>
            </article>
          </div>
          <p className="about-card">
            A highly flexible, reliable resourceful and an enthusiastic
            person.Experienced organizing many events,managing, defining and
            planning projects. And have the significant ability to work in team
            environments, capable of quickly mastering new technologies
          </p>
          <a href="#contact" className="btn btn-primary">
            contact me
          </a>
        </div>
      </div>
    </section>
  );
};
export default App;
