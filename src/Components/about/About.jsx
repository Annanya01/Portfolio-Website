import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";

export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years of coding experience</small>
            </article>

            

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ projects</small>
            </article>
          </div>

          <p>
            I''m an enthusiastic and motivated undergraduate engineering student.
             Proactive in learning about new technologies.
             Strong communication and presentation skills.
             Ability to work in a fast-paced environment
          </p>
          <a href="#contact" className="btn btn-primary">Let''s talk</a>
        </div>
      </div>
    </section>
  );
}
