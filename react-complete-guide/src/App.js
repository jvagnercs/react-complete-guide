import React, { Component } from 'react'
import Person from './Person/Person'
import cssClasses from './App.module.css'
import Radium, { StyleRoot } from 'radium'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"

class App extends Component {

  state = {
    persons: [
      { id: 'person1', name: 'Max', age: 28 },
      { id: 'person2', name: 'Manu', age: 29 },
      { id: 'person3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice()
    // const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState( {showPersons: !doesShow })
  }

  render() {
    // inline styles
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'salmon',
    //     color: 'black'
    //   }
    // } removed on Lecture 69

    let persons = null
    let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <ErrorBoundary>
              <Person
              // click={() => this.deletePersonHandler(index)}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}/>
            </ ErrorBoundary>
              // code bellow doesn't work, why?  Unexpected use of 'event'  no-restricted-globals
              // changed={this.nameChangedHandler.bind(this, event, person.id)}/>
            
          )}
        </div>
      )
      btnClass = cssClasses.Red
      // // style.backgroundColor = 'red' 
      // style[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }  removed on Lecture 69
    }
    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push( cssClasses.red )
    }

    if (this.state.persons.length <= 1) {
      classes.push(cssClasses.bold)
    }

    return (
      <StyleRoot>
        <div className={cssClasses.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            className={btnClass}
            // style={style} removed on Lecture 69
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I\'m a react App!!!'))
  }
}

export default Radium(App);
