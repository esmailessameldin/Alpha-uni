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
    this.onChangeGrade=this.onChangeGrade.bind(this)
    this.state = {
       grade:''
      }
   
  }
  
  handleClick(e) {
     
    const user = {
       
        grade:this.state.grade
      }
      axios.post('http://localhost:5000/faculty/grade/'+this.props.match.params.id,user)
      .then(res=>{

          console.log(res.data)

      })
  }
  onChangeGrade(e) {
    this.setState({
      grade: e.target.value
    })
    console.log(this.state.grade)
    
  }

  componentDidMount() {
  
  }



  

 
render() {
  
    return (
     <div>
          <div  style = {{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Enter the course name midterm grade and final grade: </label>
            <input 
                required
                value={this.state.grade}
                onChange={this.onChangeGrade}
                className="form-control"
                />
          </div>
          <button type="button" style={{position: 'absolute', left: '46%', top: '60%'}} onClick={() => this.handleClick()}>
      Submit grade
     </button>
              </div>

  
    
    )
  }
}