import React from 'react';
import "./projects.css";
import Image1 from "../../assets/sillybuspic.png";
import Image2 from "../../assets/portfoliopic.png";
import Image3 from "../../assets/androidapp.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Sillybus",
    description: "Sillybus (🤪) is a tool for creating a Google Classroom from a PDF, TXT, or DOCX file of a Syllabus. This tool utilizes: Python+Flask, HTML, CSS, JavaScript and Google Cloud to make a teacher's life easier!",
    url: "https://github.com/leijason22/Sillybus" 
  },
  {
    id: 2,
    image: Image2,
    title: "Personal Portfolio",
    description: "This website was developed using React.js, as well as TailwindCSS, both of which I used to improve my skillset as a developer and work on being able to develop a more complex user interface with dynamic updates and a more responsive design.",
    url: "https://github.com/leijason22/jason-portfolio"
  },
  {
    id: 3,
    image: Image3,
    title: "RU Pizzeria",
    description: "RU Pizzeria is a comprehensive Android app for pizza ordering! Employing the use of Android Studio for intuitive graphical user interfaces (GUIs) and Java for back-end logic, this app allows you to order pizzas from a select list of specialty pizzas or build your own pizza with up to 7 toppings of your choice!",
    url: "https://github.com/leijason22/RU-Pizzeria" 
  },
];

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section_title">Projects</h2>

      <div className="projects_container grid">
        {data.map(({ id, image, title, description, url }) => {
          return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="projects_link" key={id}>
              <div className="projects_card">
                <img src={image} alt="" className="projects_img" />
                <h3 className="projects_title">{title}</h3>
                <p className="projects_description">{description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
