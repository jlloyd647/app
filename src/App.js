import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Form from './components/Login/Form'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const path = require('path');
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

db.listDatabases().then(function(dbs){
  console.log(dbs);
});

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Form />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
