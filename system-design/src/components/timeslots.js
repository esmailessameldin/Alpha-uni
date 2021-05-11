import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react';
const loading = () => (
  <div>
   <Segment style = {{position: 'absolute', left: '50%', top: '39%',
    transform: 'translate(-50%, -50%)'}}>
    <Dimmer active>
      <Loader size='massive'>Loading data</Loader>
    </Dimmer>

    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
  </div>)

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:"",
      opennext:"",
      loading:true  
     
    }
  }
 
  componentDidMount() {
    
    axios.post('http://localhost:5000/admins/getadmin')
    .then(res=>{
        console.log(res.data.opennext)
        if(res.data.open){
            this.state.open="OPEN"
        }else{
            this.state.open="CLOSE"
        }
        if(res.data.opennext){
            this.state.opennext="OPEN"
        }else{
            this.state.opennext="CLOSE"
        }
        this.setState({
            loading:false
        })
    })
     console.log(this.state.open)
     console.log(this.state.opennext)
     
      
  }



  

 
render() {
    if(this.state.loading){
             return loading()
        
    }
    return (
      <div handClickLogout={this.handClickLogout}>
      <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -50%)'}}>
      <thead  class="table table-dark">
        <tr>
          <th>Add/Drop This semester</th>
          <th>Add/Drop next semester</th>
          
        </tr>
      </thead>
      <tbody class="thead-light">
        <tr>
          <td>{this.state.open}</td>
          <td>{this.state.opennext}</td>
        
        </tr>
        
      </tbody>
    </Table>
               <ul>  </ul>
    
    
    </div>
    

  
    
    )
  }
}