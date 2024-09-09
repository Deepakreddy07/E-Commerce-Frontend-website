import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
       <h1>Sign in</h1>
       <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' required/>
        <input type="email" placeholder='Email Id' required/>
        <input type="password" placeholder='Password' required/>
       </div>
       <button>Continue</button>
       <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
       <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing, you agree to Shoppy's conditions of use </p>
      </div>
      </div> 
    </div>
  )
}

export default LoginSignup