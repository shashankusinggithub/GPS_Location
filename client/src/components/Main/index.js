import React from 'react'
import { Link } from "react-router-dom";

import './index.css'

const index = () => {
  
  
   const signout = () => {

    localStorage.clear()

    
  }
  

  return (
    <div className='container'>
    <div className='maincontainer'>
        
          <h1>Login to Your Account</h1>
          
        <Link to="/login">
          <button type="button" className='btn' onClick={()=>signout()}>
            Sign OUT
          </button>
        </Link>
      </div>
    </div>
  
  )
}

export default index