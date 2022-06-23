import React from 'react'
import Logo from '../../img/logo.png'

import './Auth.css'

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
        <h1>DoubleDa</h1>
        <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp/> */}
      <LogIn/>
    </div>
  )
}



function LogIn(){

  return(
    <div className="a-right">
      <form action="" className="InfoForm authForm">
        <h3>Log In</h3>

        <div>
          <input type="text" className="InfoInput" placeholder='username' name='userName'/>
        </div>

        <div>
          <input type="text" placeholder='Password' className='InfoInput' name='passWord'/>
        </div>

        <div>
          <span style={{fontSize: '12px'}}>Don't have an account? Sign Up!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  ) 
}

function SignUp(){

  return(
    <div className="a-right">
      <form action="" className="InfoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input type="text" placeholder='First Name' className='InfoInput' name='firstName'/>
          <input type="text" placeholder='Last Name' className='InfoInput' name='lastName'/>
        </div>

        <div>
          <input type="text" className="InfoInput" placeholder='username' name='userName'/>
        </div>

        <div>
          <input type="text" placeholder='Password' className='InfoInput' name='passWord'/>
          <input type="text" placeholder='Confirm Password' className='InfoInput' name='confirmPass'/>
        </div>

        <div>
          <span style={{fontSize: '12px'}}>Already have an account? Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  ) 
}

export default Auth