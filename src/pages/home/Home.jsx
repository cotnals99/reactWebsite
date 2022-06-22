import React from 'react'
import "./Home.css"
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'

const Home = () => {
  return (
    <div className="Home">
        {/* <div className="profileSile">Profile</div> */}
        <ProfileSide/>
        {/* <div className="postSide">Post</div> */}
        <PostSide/>
        <div className="rightSide">Right</div>
    </div>
  )
}

export default Home