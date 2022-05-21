import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./signup.css"

const Sign_in = () => {

  const [logdata,setdata] = useState({
    email: "",
    password: ""
});
console.log(logdata);
const adddata = (e) =>{
  // console.log(e.target.value);
  const {name, value} = e.target;


setdata(()=>{
  return{
    ...logdata,
    [name]:value
  }
})
}

  return (
    <>
    <section>
      <div className = "sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="amazonlogo"/>
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-In</h1>
            <div className = "form_data">
            <label htmlFor="email">Email</label>
                            <input type="text"
                               onChange={ adddata }
                               value = {logdata.email}
                               name ="email" 
                                // value={logdata.email}
                                id="email" />
            </div>
            <div className = "form_data">
              <label htmlFor="password">Password</label>
              <input type="password" 
              onChange={ adddata }
              value = {logdata.password}
              name = "Password" id="password" placeholder="At least 6 characters"/>
            </div>
            <button className="signin_btn">Continue</button>
            

          </form>
        </div>
        <div className = "create_accountinfo">
          <p>New to Amazon</p>
        <NavLink to = "/register"> <button>  Create your Amazon Account</button></NavLink>
        </div>
      </div>

    </section>
    
    </>
  )
}

export default Sign_in