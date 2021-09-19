import React from "react";
import "./Header.css";

function Header() {
  return (
      <section className="header-container">
        <div className="header-background"></div>
        <div className="profile-container">
          <img
            src="https://avatars.githubusercontent.com/u/86676797?s=400&u=6837800ac2aa3a4312017700994ae42aaa3f7428&v=4"
            alt="Foto de Perfil"
          />
          <h1>Maria Luiza Rodrigues</h1>
          <h2>Front-end developer</h2>
        </div>
      </section>
  );
}

export default Header;
