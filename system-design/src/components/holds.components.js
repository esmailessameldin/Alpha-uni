import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';
import {  Image, List } from 'semantic-ui-react'
import { left } from '@popperjs/core';
import { ResponsiveEmbed } from 'react-bootstrap';
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick=this.handleClick.bind(this);
    this.handleClick2=this.handleClick2.bind(this);
    this.onChangeMessage=this.onChangeMessage.bind(this)
    this.onchangeID=this.onchangeID.bind(this)
    this.state = {
     id:'',
     message:''
      }
   
  }
  
  handleClick(e) {
     
    const user = {
        message:this.state.message
       
      }
      console.log(user)
      axios.post('http://localhost:5000/admins/addhold/'+this.state.id,user)
      .then(res=>{

          console.log(res.data)
        alert(res.data)
      })
  }
  handleClick2(e) {
     
  
      axios.post('http://localhost:5000/admins/addhold/'+this.state.id)
      .then(res=>{

          console.log(res.data)
        alert(res.data)
      })
  }
  onchangeID(e) {
    this.setState({
      id: e.target.value
    })

    
  }
  onChangeMessage(e) {
    this.setState({
      message: e.target.value
    })
  console.log(this.state.message)
    
  }

  componentDidMount() {
  
  }



  

 
render() {
  
    return (
     <div>
          <div  style = {{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Enter the student's ID: </label>
            <input 
                required
                value={this.state.id}
                onChange={this.onchangeID}
                className="form-control"
                />
          </div>
          <div  style = {{position: 'absolute', left: '50%', top: '38%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Enter the reason for the hold: </label>
            <input 
                required
                value={this.state.message}
                onChange={this.onChangeMessage}
                className="form-control"
                />
          </div>
          <button type="button" style={{position: 'absolute', left: '43%', top: '60%'}} onClick={() => this.handleClick()}>
      Add hold 
     </button>
     <button type="button" style={{position: 'absolute', left: '50%', top: '60%'}} onClick={() => this.handleClick2()}>
      Remove hold 
     </button>
              </div> 

  
    
    )
  }
}