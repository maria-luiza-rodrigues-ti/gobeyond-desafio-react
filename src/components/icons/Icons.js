import React from "react";
import './Icons.css';
import Linkedin from "../images/linkedin.png";
import Github from '../images/github.png';
import Email from '../images/o-email.png';

function Icons() {
  return (
    <section className="social">
      <div className="social-container">
      <a className="icon-container" href="https://www.linkedin.com/in/m-luiza-rodrigues/" target="_blank" rel="noreferrer">
        <img src={Linkedin} alt="Linkedin" />
        <span className="contact">Linkedin</span>
      </a>
      <a className="icon-container" href="https://github.com/mluizarodrigues" target="_blank" rel="noreferrer">
        <img src={Github} alt="Github" />
        <span className="contact">Github</span>
      </a>
      <a className="icon-container" href="mailto:marialuiza.r.eng@gmail.com" target="_blank" rel="noreferrer">
        <img src={Email} alt="Email" />
        <span className="contact">Email</span>
      </a>
      </div>
    </section>
  );
}

export default Icons;
