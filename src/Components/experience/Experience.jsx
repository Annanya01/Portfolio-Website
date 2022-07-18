import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div><h4>Core Java</h4>
              <small className="text-light">Experienced</small>
            </div>
              </article>
            <article className="experience__details">
              <BsPatchCheckFill className = 'experience__details-icon'/>
             <div> <h4>C/C++</h4>
             <small className="text-light">Intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className = 'experience__details-icon'/>
             <div> <h4>JavaScript</h4>
             <small className="text-light">Beginner</small>
             </div>
            </article>
          </div>
        </div>
      
  
        <div className="experience__backend">
          <h3>Skills</h3>
          <div className="experience__content">
           <article className="experience__details">
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div><h4>Problem Solving</h4>
              </div>
            </article>
            <article className="experience__details">
             <BsPatchCheckFill className = 'experience__details-icon'/>
              <div><h4>Data Structures and Algorithms</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div><h4>Data Science</h4></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className = 'experience__details-icon'/>
              <div><h4>Time Management</h4></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className = 'experience__details-icon'/>
             <div> <h4>Adaptable and Flexible</h4></div>
             </article>
         </div>
       </div>
       </div>
    </section>
  );
}
