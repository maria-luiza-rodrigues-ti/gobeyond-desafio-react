import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <a className="card" target="_blank" rel="noreferrer" href={props.link}>
        <img className="image" src={props.image} alt={props.title} />
        <h3 className="title">{props.title}</h3>
      </a>
    </>
  );
};

export default Card;
