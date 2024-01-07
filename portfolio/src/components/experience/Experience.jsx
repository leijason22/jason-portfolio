import React from 'react';
import "./experience.css";
import Image1 from "../../assets/jasonexperience.png";
import Data from './Data';
import Card from './Card';

const Experience = () => {
  return (
    <section className="experience container section" id = "experience">
      <h2 className="section_title">Experience</h2>
      <div className="experience_container grid">
        <div className="timeline grid">
          {Data.map((val,index) => {
            if (val.category === "experience") {
              return(
                <Card key = {index} icon = {val.icon} company = {val.company} location = {val.location} title = {val.title} year = {val.year} 
                desc1 = {val.desc1} desc2 = {val.desc2} desc3 = {val.desc3}/>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience