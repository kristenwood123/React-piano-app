import React, { Component } from 'react'
import styled from 'styled-components'

export default class Key extends Component {
  render() {
    let flatKey = {
      backgroundColor: 'black',
      color: 'white'
    }

  const KeyContainer = styled.div`
      background-image: linear-gradient(rgb(104, 238, 207), rgb(17, 217, 243));
      height: 300px;
      width: 60px;
      border: 1px solid black;
      cursor: pointer;
    `
  const KeyText = styled.div`
   position: relative;
    color: black;
    font-size: 36px;
    margin-top: 240px;
  `
    {if (this.props.length > 1) {
      console.log('I am great')
    }}

    return (
      <React.Fragment>
        <KeyContainer>
          <KeyText>
            {this.props.note.toUpperCase()}
          </KeyText> 
        </KeyContainer>      
     </React.Fragment>
    )
  }
}