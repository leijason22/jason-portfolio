import React from 'react';
import "./about.css";
import Image from "../../assets/jasonwhisper.png";
import Image2 from "../../assets/jasonraisehand.png";
import ResumePDF from "../../assets/jasonresume.pdf"

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Jason_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Image2} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">Hi! I'm Jason. Currently, I am pursuing a Bachelor of Science in Computer Science at Rutgers University—New Brunswick. 
            I am greatly interested and passionate about software engineering and full stack web development, and am currently looking for internship and co-op roles. 
            Looking forward to connect! </p>
            <button onClick={handleDownload} className="btn">Download Resume</button>
          </div>
        </div>
      </div>

      <div className="about_container2 grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">

<h4>A little about myself...</h4>
Outside of coding, I love to be active and enjoy a number of different sports ranging from basketball and running, to skiing (which I will gladly take any advice for if you have any for me)
and playing soccer. <br /><br />
<strong>FUN FACT:</strong> I LOVE collecting these little figures called Smiskis (they are the key to my heart)!


</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About