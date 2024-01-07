import React from 'react';
import "./skills.css";
import Image1 from "../../assets/javalogo2.png";
import Image2 from "../../assets/javascriptlogo.png";
import Image3 from "../../assets/htmllogo.png";
import Image4 from "../../assets/csslogo.png";
import Image5 from "../../assets/pythonlogo.png";
import Image6 from "../../assets/clanglogo.png";
import Image7 from "../../assets/reactjslogo.png";
import Image8 from "../../assets/nodejslogo.png";
import Image9 from "../../assets/flasklogo.png";
import Image10 from "../../assets/gitlogo.png";
import Image11 from "../../assets/gcplogo.png";
import Image12 from "../../assets/tailwindcsslogo.png";


const languages = [
  {
    id: 1,
    image: Image1,
    title: "Java",
  },
  {
    id: 2,
    image: Image2,
    title: "JavaScript",
  },
  {
    id: 3,
    image: Image3,
    title: "HTML",
  },
  {
    id: 4,
    image: Image4,
    title: "CSS",
  },
  {
    id: 5,
    image: Image5,
    title: "Python",
  },
  {
    id: 6,
    image: Image6,
    title: "C",
  },
  ];

  const frameworks = [
    {
      id: 1,
      image: Image7,
      title: "React.js",
    },
    {
      id: 2,
      image: Image8,
      title: "Node.js",
    },
    {
      id: 3,
      image: Image9,
      title: "Flask",
    },
    {
      id: 4,
      image: Image12,
      title: "TailwindCSS",
    },
    ];

    const other = [
      {
        id: 1,
        image: Image10,
        title: "Git",
      },
      {
        id: 2,
        image: Image11,
        title: "Google Cloud Platform",
      },
      ];

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section_title">Skills</h2>

      <h3 className="little_subtitle">Languages</h3>

      <div className="skills_container grid">
        {languages.map(({id, image, title, description}) => {
          return (
            <div className="skills_card" key={id}>
              <img src={image} alt="" className="skills_img" />
              <h3 className="skills_title">{title}</h3>
              <p className="skills_description">{description}</p>
            </div>
          );
        })}
      </div>

      <h3 className="little_subtitle">Frameworks</h3>

      <div className="skills_container2 grid">
        {frameworks.map(({id, image, title, description}) => {
          return (
            <div className="skills_card" key={id}>
              <img src={image} alt="" className="skills_img" />
              <h3 className="skills_title">{title}</h3>
              <p className="skills_description">{description}</p>
            </div>
          );
        })}
      </div>

      <h3 className="little_subtitle">Other</h3>

      <div className="skills_container3 grid">
        {other.map(({id, image, title, description}) => {
          return (
            <div className="skills_card" key={id}>
              <img src={image} alt="" className="skills_img" />
              <h3 className="skills_title">{title}</h3>
              <p className="skills_description">{description}</p>
            </div>
          );
        })}
      </div>


    </section>
  )
}

export default Skills

