import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';
import {  Image, List } from 'semantic-ui-react'
import { left } from '@popperjs/core';
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick=this.handleClick.bind(this);
    this.state = {
        classes:[],
        list:[]
      }
   
  }
  
  handleClick(e) {
    console.log(e);
    window.location = '/sections/'+e
  }


  componentDidMount() {
    console.log(this.props.match.params.major)
    axios.get('http://localhost:5000/section/viewaudit/'+this.props.match.params.major)
      .then(response => {
        console.log(response.data)
        this.setState({
               
          list:response.data
          

  })
          
          console.log(this.state.list)
        
      })
      .catch((error) => {
        console.log(error);
      })

  }



  

 
render() {
  
    return (
     <div>
       <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%',
      transform: 'translate(-40%, -1%)'}}>
        <thead>
        <tr>
          <th>Major</th>
          <th>{this.props.match.params.major}</th>
          
        </tr>
      </thead>
      <tr>
        <th>classes</th>
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
                <ul>You need to take 3 of the english major classes </ul>
                <ul>you need to take 3 of the history major classes</ul>
                <ul> you need to take 6 of the visual arts major classes</ul>
              </div>

  
    
    )
  }
}