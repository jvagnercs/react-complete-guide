import React from 'react'
import cssClasses from './Person.module.css'
import Radium from 'radium'

const person = props => {

    return (
    <div className={cssClasses.person} >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} year old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
)}

export default Radium(person)