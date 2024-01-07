import React from 'react';
import "./resume.css";
import ResumePDF from "../../assets/jasonresume.pdf"

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumePDF; 
    link.download = 'Jason_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="resume container section" id='resume'>
      {/* <h2 className="section_title">Resume (In case you missed it above!)</h2> */}
      {/* <button onClick={handleDownload} className="btn">Download Resume</button> */}
    </section>
  )
}

export default Resume