import React, { Component } from 'react'

export default class Key extends Component {
  render() {
    return (
      <div className='key'>
        <div className="key__text">
          {this.props.note.toUpperCase()}
        </div>
        
      </div>
    )
  }
}
