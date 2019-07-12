import React from "react";
import "./style.css";

const Card = props => (
  <div className="click-item" onClick={props.imageClick}>
    <img alt={props.name} src={props.image} />
  </div>
);

export default Card;
