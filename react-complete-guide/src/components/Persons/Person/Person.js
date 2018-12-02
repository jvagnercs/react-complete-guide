import React from 'react'
import cssClasses from './Person.module.css'
import Radium from 'radium'

const person = props => {

    // const rnd = Math.random()

    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong!')
    // }

    return (
    <div className={cssClasses.person} >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} year old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
)}

export default Radium(person)