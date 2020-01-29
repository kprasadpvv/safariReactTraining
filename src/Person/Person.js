import React from 'react'
import './Person.css'
const Person = (props) => {
  return (
    <div className='person'>
      <button className='closeButton' onClick={props.deleteHandler}>x</button>
      <h1>Name: {props.name} </h1>
      <p>Gender: {props.gender}</p>
      <p>{props.children}</p>
      <input onChange={props.nameChangeHandler} type='text' />
    </div>
  )
}

export default Person;