import React from "react";
import { UilPen } from "@iconscout/react-unicons";
import "./InfoCard.css";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.5rem" />
        </div>
      </div>
      <div className="Info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="Info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Seoul</span>
      </div>
      <div className="Info">
        <span>
          <b>Works at </b>
        </span>
        <span>Doubleda</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
