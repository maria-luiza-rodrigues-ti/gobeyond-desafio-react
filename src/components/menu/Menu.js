import React, { useState } from "react";
import Content from "../content/Content";
import './Menu.css'

function Menu() {
  const [menu, setMenu] = useState(0);

  const menuContent1 = () => {
    setMenu(0);
  };

  const menuContent2 = () => {
    setMenu(1);
  };

  const menuContent3 = () => {
    setMenu(2);
  };

  return (
    <>
      <nav className="menu-container">
        <button className="menu" onClick={menuContent1}>{`📑 Stacks`}</button>
        <button className="menu" onClick={menuContent2}>{`💻 Projetos`}</button>
        <button className="menu" onClick={menuContent3}>{`🐕 Doguinhos`}</button>
      </nav>
      <Content number={menu}/>
    </>
  );
}

export default Menu;
