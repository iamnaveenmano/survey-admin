import React, { Component } from 'react';
import Surveys from './components/Surveys'
import './App.css';

class App extends Component {
  state = {
    surveys: [
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
      }
    ]
  }
  render(){
    console.log(this.state.surveys);
    return (
      <div className="App">
        <Surveys surveys={this.state.surveys}/>
      </div>
    );
  }
}

export default App;
