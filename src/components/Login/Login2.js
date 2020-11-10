import React, { Component } from 'react';
import { useForm } from "react-hook-form";

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

export default function Login2() {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log('OnSubmit')
    db.insert("_users", {
      _id: "org.couchdb.user:" + data.username,
      name: data.username,
      email: data.email,
      type: "user",
      roles: ["user"],
      password: data.password
    }).then(({data, headers, status}) => {
      console.log('Not Error')
    }, err => {
      console.log('Error')
    })
  }

  const onSubmit2 = (data) => {
    db.get("_users", {
      _id: "org.couchdb.user:" + data.username
    }).then(({data, headers, status}) => {
        // data is json response
        // headers is an object with all response headers
        // status is statusCode number
    }, err => {
        // either request error occured
        // ...or err.code=EDOCMISSING if document is missing
        // ...or err.code=EUNKNOWN if statusCode is unexpected
    });
  }

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Get started with us today! Create your account by filling out the information below.</h1>
        <div class="form-inputs">
          <label htmlFor="username" className="form-label">
          Username:
          </label>
          <input id="username" type="text" name="username" className="form-input" placeholder="Enter your username" ref={register({required: "Username Required"})}/>
        </div>
        {errors.username && <p>{errors.username.message}</p>}
        <div class="form-inputs">
          <label htmlFor="email" className="form-label">
          Email:
          </label>
          <input id="email" type="text" name="email" className="form-input" placeholder="Enter your email" ref={register()}/>
        </div>
        <div class="form-inputs">
          <label htmlFor="password" className="form-label">
          Password:
          </label>
          <input id="password" type="password" name="password" className="form-input" placeholder="Enter your password" ref={register()}/>
        </div>
        <div class="form-inputs">
          <label htmlFor="password2" className="form-label">
          Confirm Password:
          </label>
          <input id="password2" type="password" name="password2" className="form-input" placeholder="Confirm password" ref={register()}/>
        </div>
        <button className="form-input-btn" type="submit" >
          Sign Up
        </button>
        <span className='form-input-login'>
        Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  )
}
