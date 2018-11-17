import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );

    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I\'m a react App!!!'))
  }
}

export default App;
