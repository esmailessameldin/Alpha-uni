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
        names:[],
       ready:false
      }
   
  }
  
  handleClick(e) {
    console.log(e);
    window.location = '/classes/'+e+","+this.props.match.params.id
  }
  

  componentDidMount() {
   
   
    axios.get('http://localhost:5000/department/findall')
      .then(response => {
          console.log(response.data)
        this.state.names=response.data
      this.setState({
               
          ready:true
      })
      console.log(this.state.name)
            
          
        
        
      })
      .catch((error) => {
        console.log(error);
      })

  }



  

 
render() {
  if(this.state.ready){
    return ( <div>
      <ul>
        {this.state.names.map((item, key) => {
            console.log(item)
          return (
            <li key={key}>
              {item.name}
              <button type="button" style={{position: 'absolute', left: '50%'}} onClick={() => this.handleClick(item.name)}>
               View majors
              </button>
              
            </li>
          );
        })}
      </ul>
    

      
    </div>
)
  }
  
    return (
     <div>
                <ul>
               Loading....
                </ul>
               
                
              </div>

  
    
    )
  }
}