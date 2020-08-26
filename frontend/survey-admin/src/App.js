import React, { useState } from 'react';
import Surveys from './components/Surveys'
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
function App() {

  const [surveys, setsurveys] = useState([
      {
        id: 1,
        name: 'First',
        expiryDate: '1/1/2020',
        url: 'google.com',
        emailAddress: 'naveen@gmail.com',
        trigger: ['Case closure'],
        accessibility: 'Usergroup1'
      },
      {
        id: 2,
        name: 'Second',
        expiryDate: '1/1/2020',
        url: 'google.com',
        emailAddress: 'naveen@gmail.com',
        trigger: ['Case closure'],
        accessibility: 'Usergroup1'
      },
      {
        id: 3,
        name: 'Third',
        expiryDate: '1/1/2020',
        url: 'google.com',
        emailAddress: 'naveen@gmail.com',
        trigger: ['Case closure'],
        accessibility: 'Usergroup1'
      }
    ])
  return (
    <div className="App">
      <header className="App-header">
        <h3>Survey Admin</h3>
        {/* <div className="SignOut">
        <button type="button" className="btn btn-warning btn-sm" >Sign Out</button>
        </div> */}
      </header>
      <AmplifySignOut />
      <br />
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-sm"><h4>View Surveys</h4></div>
          <div className="col-sm"></div>
          <div className="col-sm"><button type="button" className="btn btn-outline-primary">New Survey</button></div>
        </div>
      </div>
      <br/>
      <Surveys surveys={surveys}/>
    </div>
  );
}


export default withAuthenticator(App);
