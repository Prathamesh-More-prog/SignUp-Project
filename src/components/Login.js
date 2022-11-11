import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

function Login() {
  const [passShow, setPassShow] = useState(false);
  const [inpValue,setInpValue] =useState({
   
    email:"",
    password:"",
   

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
      const LoginUser= async (e)=>{

        e.preventDefault()
    
        const{email,password}=inpValue
    
        if(!email===""){
            alert("Please enter your email")
        }else if(!email.includes("@")){
            alert("enter valid email")
        }else if(password===""){
            alert("enter your password")
        }else if(password.length < 6){
            alert("password must be 6 char")
       }else{
        const data= await fetch("http://localhost:8009/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
          email,password
          })
        })
        const res =await data.json();
        console.log(res)
        // if(res.status == 201){
        //   alert("user registration done");
        //   setInpValue({...inpValue,email:"",password:""})
        // }
        }
    
    
      }
    
  
  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Login In</h1>
            <p>Hi we Are Back I Am Glad.......Please Login</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setValue}
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
                  name="password"
                  id="password"
                  placeholder="Enter You Are Password Address...."
                  
                />
                <div className="showpass" onClick={() => setPassShow(!passShow)}>{!passShow ? "Show" : "Hide"}</div>
              </div>
            </div>
            <button className="btn" onClick={LoginUser}>Login</button>
            <p>Don't have an account? account <NavLink to="/register">Sign Up</NavLink></p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
