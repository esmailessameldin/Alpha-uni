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
    this.state = {
        classes:[],
        list:[],
        list2:[],
        name:'',
        name1:'',
        number:9
      }
   
  }
  
  handleClick(e) {
    console.log(e);
    window.location = '/sections/'+e
  }


  componentDidMount() {
    console.log(this.props.match.params.major)
    var myString = this.props.match.params.major;
    var array = myString.split(",");
    console.log(array)
    axios.get('http://localhost:5000/section/viewaudit/'+array[0])
      .then(response => {
        console.log(response.data)
        this.setState({
               
          list:response.data,
          name1:array[0]
          

  })
          
          console.log(this.state.list)
        
      })
      .catch((error) => {
        console.log(error);
      })
      axios.get('http://localhost:5000/section/viewminor/'+array[1])
      .then(response => {
        console.log(response.data)
        this.setState({
               
          list2:response.data,
          name:array[1]
          

  })
 
  console.log(response.data.length)
          
      if(response.data.length==0){
        this.setState({
          number:12
        })
      }
        
      })
      .catch((error) => {
        console.log(error);
      })

  }



  

 
render() {
  
    return (
     <div>
       <Table striped bordered hover size="sm"style = {{width:"70vh",position: 'absolute', left: '70%',
      transform: 'translate(-40%, -1%)'}}>
        <thead>
        <tr>
          <th>Minor</th>
          <th>{this.state.name}</th>
          
        </tr>
      </thead>
      <tr>
        <th>Classes</th>
     <th>
           {this.state.list2.map((item, key) => {
                    return (
                      <li key={key}>
                        {item}
                        
                      </li>
                    );
                  })}
                </th>
                </tr>
                </Table>
                
      <Table striped bordered hover size="sm"style = {{width:"70vh",position: 'absolute', left: '35%',
      transform: 'translate(-40%, -1%)'}}>
        <thead>
        <tr>
          <th>Major</th>
          <th>{this.state.name1}</th>
          
        </tr>
      </thead>
      <tr>
        <th>Classes</th>
     <th>
           {this.state.list.map((item, key) => {
                    return (
                      <li key={key}>
                        {item}
                        
                      </li>
                    );
                  })}
                </th>
                </tr>
                </Table>
              
           
                   <div>     <ul style = {{width:"70vh",position: 'absolute', left: '35%',top:"95%"}}>You need to take {this.state.number} classes of your choice </ul>  </div>
              </div>

  
    
    )
  }
}