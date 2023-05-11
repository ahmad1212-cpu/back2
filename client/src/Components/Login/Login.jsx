/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Login.scss";
import "../../App.scss";
import Axios from "axios";

import { link,useNavigate } from "react-router-dom";

import logo from "../../LoginAssets/logo.png";

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  


  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('message');
  const navigateTo=useNavigate()




  const [loginStatus, setLoginStatus] = useState("");
  const [statusHolder, setStatusHolder] = useState("message");

  const loginUser = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3002/Login", {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
    }).then((response) => {
      console.log()



      if(response.data.message  &&  loginUserName==''  &&  loginPassword==''){
        navigateTo('/')
        setLoginStatus('credentials do not Exist!')
      }
      else
      {

        navigateTo('/dashboard')

      }

    
    })
  }


useEffect(()=>{

if(loginStatus !==''){

    setStatusHolder('showMessage')
    setTimeout(() => {
        setStatusHolder('message')
    }, 4000);
}
}, [loginStatus])


const onSubmit = ()=>{

    setLoginUserName('')
    setLoginPassword('')

}


  return (
    <div className="loginPage flex">
      <div className="container flex">
        <h2 className="title">Create And Sell Extraordinary Products</h2>
        <p>adopt the peace of nature! </p>

        <div className="footerDev flex">
          <span className="t">Do not have an account ?</span>
          <link to={"/register"}>
            <button className="btn"> sing up </button>
          </link>
        </div>
      </div>
      <div className="formDev flex">
        <div className="headerDev">
          <img src={logo} alt="Logo Image" />
          <h3>Welcome Back!</h3>
        </div>
        <form action="" className='form grid'   onSubmit={onSubmit}>
          <span className={statusHolder}>{loginStatus}</span>
          <div className="inputDev">
            <label htmlFor="username">Username</label>
            <div className="input flex">
              <FaUserShield className="icons" />
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                onChange={(event) => {
                  setLoginUserName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="inputDev">
            <label htmlFor="password">Password</label>
            <div className="input flex">
              <BsFillShieldLockFill
                className="icons"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
              <input
                type="password"
                id="password"
                placeholder="Enter password"
              />
            </div>
          </div>
          <button type="submit" className="btn flex" onClick={loginUser}>
            <span>Login</span>
            <AiOutlineSwapRight className="icon" />
          </button>
          <span className="forgotPassword">
            Forgot your password ?
            <a href=""> Click here </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
