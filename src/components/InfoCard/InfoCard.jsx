import React, {useState} from "react";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from '../ProfileModal/ProfileModal'

import "./InfoCard.css";

const InfoCard = () => {

  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.5rem" onClick={()=>setModalOpened(true)} />
          <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
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
