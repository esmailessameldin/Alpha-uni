import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      name: 'asdasd',
      email: '',
      id: '',
      major:''
     
    }
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
    )
  }
}