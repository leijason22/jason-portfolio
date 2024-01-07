import React from 'react';
import "./contacts.css";
import Image1 from '../../assets/jasoncallme.png';

const contact = () => {
  return (

    <section className="contact container section" id='contact'>
    <h2 className="section_title">Contact</h2>

    <div className="contact_container grid">
    <img src={Image1} alt="" className="contact_img" />
      <div className="contact_data grid">
        <div className="contact_info">
          <p className="contact_description">I am graduating in May 2025 and looking for Software Engineer or Software Developer intern and co-op roles for Summer 2024. 
          You can reach me via email at 22jasonlei@gmail.com or through the 
          social media icon links above.
          </p>
        </div>
      </div>
    </div>
  </section>

   
  )
}

export default contact