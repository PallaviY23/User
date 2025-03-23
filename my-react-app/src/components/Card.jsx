import "./VehiclesList.css";
import React from "react";

function Card(props) {
  if (props.isAddCard) {
    return (
      <div className="card add-card_vl" onClick={props.onAdd}>
       <h2>+ Add Vehicle</h2>
      </div>
    );
  }

  return (
    <div className="card_vl">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p>Price: {props.price}</p>
      <p>Availability: {props.availability}</p>
      <button className="details-btn_vl">View Details</button>
      <span className="rating_vl">{props.rating}</span>
    </div>
  );
}

export default Card;