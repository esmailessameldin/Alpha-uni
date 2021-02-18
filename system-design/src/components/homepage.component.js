import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
export default class Navbar extends Component {

  render() {
    return (
        <div style = {{width:"100vh"}}>
        <form>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Password: </label>
            <input  type="text"
                required
                className="form-control"
                />
          </div>
          <div>
    <Button  animated  style = {{width:"10vh",position: 'absolute', left: '50%', top: '70%',
        transform: 'translate(-50%, -50%)'}}>
      <Button.Content visible>login</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  </div>
  
        </form>
      </div>
    )
  }
}