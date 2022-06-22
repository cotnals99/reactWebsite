import React from "react";
import ProfileImage from "../../img/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
} from "@iconscout/react-unicons";

import "./PostShare.css";

const PostShare = () => {
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening?" />
        <div className="PostOptions">
          <div className="option" style={{color: "var(--photo)"}}>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{color: "var(--video)"}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{color: "var(--location)"}}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{color: "var(--schedule)"}}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
