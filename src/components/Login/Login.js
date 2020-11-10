import React, { Component } from 'react';
import useForm from './useForm';
import validate from './ValidateInfo';

const NodeCouchDb = require('node-couchdb');

const db = new NodeCouchDb({
  host: '3.235.188.56',
  protocol: 'http',
  port: 5984,
  auth:{
    user:'admin',
    pass:'stars'
  }
})

/////////////////////////////////////////////
//   create new User
/////////////////////////////////////////////
function createUser(user, cb) {

  db.insert(user, function(err, user) {
    if (err) return cb(err)
    cb(null, user)
  })
}

const registerUser = (newUser) => {
  //console.log(values)
  //db.insert("_users", {
   //_id: "org.couchdb.user:Jim",
   //name : "Jim",
   //age : "23",
   //Designation : "Designer",
   //type: "user",
   //roles: ['Test'],
   //password: {"Testy"}
//}).then(({data, headers, status}) => {
  //  console.log('Not error')
      // data is json response
      // headers is an object with all response headers
      // status is statusCode number
  //}, err => {
    //console.log('error')
      // either request error occured
      // ...or err.code=EDOCCONFLICT if document with the same id already exists
  //});
}

const Login = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm,validate);
    return(
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Get started with us today! Create your account by filling out the information below.</h1>
          <div class="form-inputs">
            <label htmlFor="username" className="form-label">
            Username:
            </label>
            <input id="username" type="text" name="username" className="form-input" placeholder="Enter your username" value={values.username} onChange={handleChange}/>
            {errors.username && <p>{errors.Username}</p>}
          </div>
          <div class="form-inputs">
            <label htmlFor="email" className="form-label">
            Email:
            </label>
            <input id="email" type="text" name="email" className="form-input" placeholder="Enter your email" value={values.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div class="form-inputs">
            <label htmlFor="password" className="form-label">
            Password:
            </label>
            <input id="password" type="password" name="password" className="form-input" placeholder="Enter your password" value={values.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div class="form-inputs">
            <label htmlFor="password2" className="form-label">
            Confirm Password:
            </label>
            <input id="password2" type="password" name="password2" className="form-input" placeholder="Confirm password" value={values.password2} onChange={handleChange}/>
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit" onClick={registerUser}>
            Sign Up
          </button>
          <span className='form-input-login'>
          Already have an account? Login <a href="#">here</a>
          </span>
        </form>
      </div>
    )
  }

export default Login
