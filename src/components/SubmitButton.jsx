import React, { Component } from 'react';

class SubmitButton extends Component {
  grabApiData = () => {
    console.log('Click happened');
  }
  
  render() {
    return(
      <button onClick = {this.grabApiData}>
        Submit
      </button>
    )
  }
}

export default SubmitButton;