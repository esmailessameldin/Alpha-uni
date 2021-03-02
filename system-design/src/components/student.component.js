import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.handClickLogout = this.handClickLogout.bind(this);
    this.onClick = this. onClick.bind(this);
    this.state = {
      name: '',
      email: '',
      id: '',
      major:''
     
    }
  }


   handClickLogout(e){
    e.preventDefault();
    window.location='/'
   }
   onClick(e){
    e.preventDefault();
    window.location='/classes/'+this.props.match.params.id

   }
  componentDidMount() {
    console.log(this.props.match.params.id)
    if(this.props.match.params.id==='100')
    window.location='/passerror'
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        console.log(response.data.name)
    
          
          this.setState({
            
            name: response.data.name,
            email:response.data.email,
            id:response.data.id,
            major:response.data.major
            
          })
          console.log(this.state.name)
        
      })
      .catch((error) => {
        console.log(this.props.match.params.id);
      })

  }



  

 
render() {
  
    return (
      <div handClickLogout={this.handClickLogout}>
      <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '30%',
      transform: 'translate(-50%, -50%)'}}>
      <thead>
        <tr>
          <th>name</th>
          <th>{this.state.name}</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>email</td>
          <td>{this.state.email}</td>
        
        </tr>
        <tr>
          <td>ID</td>
          <td>{this.state.id}</td>
        
        </tr>
        <tr>
          <td>major</td>
          <td>{this.state.major}</td>
        
        </tr>
       
      </tbody>
    </Table>
              
               
    <form onClick={this. handClickLogout}>
    <Button  onClick={this. handClickLogout}    animated  style = {{width:"10vh",position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}} type="Logout" value="Logout" >
      <Button.Content  onClick={this.handClickLogout} visible>Logout</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
    </form>
        
          
    <form onClick={this. onClick}>
    <Button  onClick={this. onClick}    animated  style = {{width:"10vh",position: 'absolute', left: '50%', top: '62%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.onClick} visible>Classes</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
    </form>




    </div>
    

  
    
    )
  }
}