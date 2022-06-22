import React from 'react'
import "./Home.css"
import ProfileSide from '../../components/profileSide/ProfileSide'

const Home = () => {
  return (
    <div className="Home">
        {/* <div className="profileSile">Profile</div> */}
        <ProfileSide/>
        <div className="postSide">Post</div>
        <div className="rightSide">Right</div>
    </div>
  )
}

export default Home