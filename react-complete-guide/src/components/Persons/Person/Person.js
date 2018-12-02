import React from 'react'
import cssClasses from './Person.module.css'

class Person extends React.Component {
    render () {
        return <div className={cssClasses.person} >
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} year old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
    }
}

export default Person