import React, { Component } from 'react';
import Button from '@mui/material/Button';

class SubmitButton extends Component {
  grabApiData = () => {
    console.log('Click happened');
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