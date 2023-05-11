/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Register.css';
import '../../App.css';
import Axios from 'axios'
import {Link,useNavigate } from 'react-router-dom';

import logo from "../../RegisterAssets/logo.png";

import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

const Register = () => {

  const[email , setEmail]=useState('')
  const[userName , setUserName]=useState('')
  const[password , setPassword]=useState('')
  const navigateTo=useNavigate()

  const createUser = (e) => {
    e.preventDefault()

    Axios.post('http://localhost:3002/register',{
Email:email,
UserName:userName,
Password:password
    }).then (()=>{

setEmail('')
setUserName('')
setEmail('')


    }
      )

  }

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <h2 className="title">Create And Sell Extraordinary Products</h2>
        <p>adopt the peace of nature! </p>

        <div className="footerDev flex">
          <span className="t"> have an account ?</span>
          <link to= {"/"}>
            <button className="btn"> login </button>
          </link>
        </div>
      </div>
      <div className="formDev flex">
        <div className="headerDev">
          <img src={logo} alt="Logo Image" />
          <h3>lets go</h3>
        </div>
        <form action="" className='form grid'>
          <div className="inputDev">
            <label htmlFor="email">Email</label>
            <div className='input flex'>
              <MdMarkEmailRead className='icons' />
              <input type="email" id='email' placeholder='Enter Email' 
              onChange={ (event)=>{setEmail(event.target.value)
               } } />
            </div>
          </div>
          <div className="inputDev">
            <label htmlFor="password">Password</label>
            <div className="input flex">
              <BsFillShieldLockFill className="icons"
               onChange={ (event)=>{setEmail(event.target.value)
               } } />
              < input
                type="password"
                id='password'
                placeholder='Enter password'
                onChange={(event)=>{
                  setPassword(event.target.value) } } />
            </div>
          </div>
          <button type="submit" className='btn flex' onClick={createUser}>
            <span>Register</span>
            <AiOutlineSwapRight className="icon" />
          </button>
          <span className="forgotPassword">
            Forgot your password ?<a href=""> Click here </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
