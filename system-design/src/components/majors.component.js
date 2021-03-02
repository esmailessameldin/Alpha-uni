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
        list:[]
      }
   
  }
  
  handleClick(e) {
    console.log(e);
    window.location = '/sections/'+e
  }


  componentDidMount() {
    console.log(this.props.match.params.name)
    axios.get('http://localhost:5000/classes/findbymajor/'+this.props.match.params.name)
      .then(response => {
         response.data.map(({name}) => {if(name) this.state.names.push(name)})
      this.setState({
               
              list:this.state.names


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
                <ul>
                  {this.state.names.map((item, key) => {
                    return (
                      <li key={key}>
                        {item}
                        <button type="button" style={{width:"25vh",position: 'absolute', left: '28%'}} onClick={() => this.handleClick(item)}>
                         View sections
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

  
    
    )
  }
}