import React, { Component } from 'react'
import Key from './Key'
import { notes } from '../data'
import '../App.css'

export default class Piano extends Component {
  render() {
    return (
      <div className='piano'>
      {notes.map((note, index) => {
          return (
            <Key 
            note={note} 
            key={index}/>
          )})
        }
        </div>
    )
  }
}
