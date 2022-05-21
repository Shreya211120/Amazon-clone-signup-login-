import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./signup.css"

const SignUp = () => {

  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});

const adddata = (e) => {
  const { name, value } = e.target;
  // console.log(name,value);

  setUdata(() => {
      return {
          ...udata,
          [name]: value
      }
  })
};
  return (
    <>
      <section>
      <div className = "sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="amazonlogo"/>
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-Up</h1>
            <div className = "form_data">
              <label htmlFor="fname">Your name</label>
              <input type = "text"
              onChange={ adddata }
              // onChange={(e)=>setUdata({...udata,fname:e.target.value})}
              value={udata.fname}
               name = "fname" id="fname"/>
            </div>

            <div className = "form_data">
              <label htmlFor="email">Email</label>
              <input type = "text"
              onChange={ adddata }
              // onChange={(e)=>setUdata({...udata,fname:e.target.value})}
              value={udata.email}
               name = "email" id="email"/>
            </div>
            <div className = "form_data">
              <label htmlFor="number">Mobile</label>
              <input type = "text"
              onChange={ adddata }
              // onChange={(e)=>setUdata({...udata,mobile:e.target.value})}
              value={udata.mobile}
               name = "mobile" id="mobile"/>
            </div>

            <div className = "form_data">
              <label htmlFor="password">Password</label>
              <input type="password" 
              onChange={ adddata }
              // onChange={(e)=>setUdata({...udata,password:e.target.value})}
              value={udata.password}
              name = "Password" id="password" placeholder="At least 6 characters"/>
            </div>

            <div className = "form_data">
              <label htmlFor="cpassword">Password again</label>
              <input type="confirm password" 
              onChange={ adddata }
              // onChange={(e)=>setUdata({...udata,cpassword:e.target.value})}
              value={udata.cpassword}
              name = "cpassword" id="cpassword" />
            </div>
            <button className="signin_btn">Continue</button>

            <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>

          </form>
        </div>
     
        </div>
      </section>
    </>
  )
}

export default SignUp
