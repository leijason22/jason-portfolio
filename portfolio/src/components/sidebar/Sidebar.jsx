import React, { useState } from 'react';
import "./sidebar.css";
import Logo from "../../assets/jasonlogo2.png";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);

  return (
    <>
    <aside className = {toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav_logo">
            <img src={Logo} alt="" />
        
        </a>

        <nav className="nav">
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">
                            <i className="icon-home"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i className="icon-info"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#experience" className="nav_link">
                            <i className="icon-briefcase"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#projects" className="nav_link">
                            <i className="icon-organization"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                        <i className="icon-chart"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className="icon-phone"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="https://drive.google.com/file/d/13EBkeJtea3ELGphwTErMg_cPazZV1fdk/view?usp=sharing" target="_blank" className="nav_link">
                            <i className="icon-book-open"></i>

                        </a>
                    </li>



                </ul>
            </div>

        </nav>

        <div className="nav_footer">
            <span className="copyright">&copy; 2023 - 2023.</span>
        </div>

    </aside>

    <div className={toggle ? "nav_toggle nav_toggle-open" : 
    "nav_toggle"} onClick={() => showMenu(!toggle)}>
        <i className="icon-menu"></i>
    </div>

    </>
  )
}

export default Sidebar

//rafce command