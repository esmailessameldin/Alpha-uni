import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onSubmit1 = this.onSubmit1.bind(this);
    this.onSubmit2=this.onSubmit2.bind(this);
    this.state = {
      name: 'asdasd',
      email: '',
      id: '',
      major:''
     
    }
  }


   onSubmit1(e){
    e.preventDefault();
    window.location='/'
   }

   onSubmit2(e){
    e.preventDefault();
    window.location='/'

   }



  componentDidMount() {
    console.log(this.props.match.params.id)
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
        console.log(error);
      })

  }



  

 
render() {
  
    return (
      <div onSubmit={this.onSubmit}>
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
              
               
              <form    onSubmit1={this.onSubmit1}>
    <Button onSubmit={this.onSubmit}    animated  style = {{width:"10vh",position: 'absolute', left: '50%', top: '70%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="Logout" >
      <Button.Content onSubmit={this.onSubmit} visible>Logout</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    </form>
    
     
    <form    onSubmit2={this.onSubmit2}>
    <Button onSubmit={this.onSubmit}    animated  style = {{width:"10vh",position: 'absolute', left: '40%', top: '70%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="Classes" >
      <Button.Content onSubmit={this.onSubmit} visible>Classes</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    </form>
    




    </div>
    

  
    
    )
  }
}