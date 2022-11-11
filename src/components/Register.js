import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

function Register() {
  const [passShow, setPassShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [inpValue,setInpValue] =useState({
    fname:"",
    email:"",
    password:"",
    confirmPassword:""

  })

 
const setValue=(e)=>{
const{name,value}=e.target

setInpValue(()=>{
    return{
        ...inpValue,
        [name]:value
    }
})

  }

  const addUserData=async(e)=>{

    e.preventDefault()

    const{fname,email,password,confirmPassword}=inpValue

    if(fname===""){
        alert("Please enter Your name")
    }else if(!email===""){
        alert("Please enter your email")
    }else if(!email.includes("@")){
        alert("enter valid email")
    }else if(password===""){
        alert("enter your password")
    }else if(password.length < 6){
        alert("password must be 6 char")
    }else if(confirmPassword.length < 6){
        alert("confirmPassword must be 6 char")
    }else if(password !== confirmPassword){
        alert("password and confirm password not a match")
    }else{
        const data= await fetch("http://localhost:8009/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            fname,email,password,confirmPassword
          })
        })
        const res =await data.json();
        console.log(res.status)

        if(res.status == 201){
          alert("user registration done");
          setInpValue({...inpValue,fname:"",email:"",password:"",confirmPassword:""})
        }
    }


  }


  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p>......Please Sign Up</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                onChange={setValue}
                value={inpValue.fname}
                name="fname"
                id="fname"
                placeholder="Enter You Are Name Address...."
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setValue}
                value={inpValue.email}
                name="email"
                id="email"
                placeholder="Enter You Are Email Address...."
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  onChange={setValue}
                  value={inpValue.password}
                  name="password"
                  id="password"
                  placeholder="Enter You Are Password...."
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="password"> Confirm Password</label>
              <div className="two">
                <input
                  type={!confirmPassShow ? "password" : "text"}
                  onChange={setValue}
                  value={inpValue.confirmPassword}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter You Are confirm password...."
                />
                <div
                  className="showpass"
                  onClick={() => setConfirmPassShow(!confirmPassShow)}
                >
                  {!confirmPassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={addUserData}>Register</button>
            <p>
              Already have an account ? <NavLink to="/">Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
