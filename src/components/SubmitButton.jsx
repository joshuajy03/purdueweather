import React, { Component } from 'react';
import Button from '@mui/material/Button';

class SubmitButton extends Component {
  grabApiData = () => {
    var input = document.getElementById("userInput").value;
    if (isNaN(input)) {
      alert("Invalid input, please input a number.");
    } else {
      console.log(input);
    }
    
  }
  
  render() {
    return(
      <Button variant="contained" onClick = {this.grabApiData}>
        Submit
      </Button>
    )
  }
}

export default SubmitButton;