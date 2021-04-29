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
    this.addclass=this.addclass.bind(this)
    this.state = {
        names:[],
        list:[],
        array:[],
        id:0
      }
   
  }
  
  handleClick(e) {
    console.log(e);
    window.location = '/sections/'+e
  }
  addclass(e){
    e.preventDefault();

      window.location='/addclass/'+this.state.array[0]

  }

  componentDidMount() {
   
    this.state.array=this.props.match.params.name.split(",")
    console.log(this.state.array[0])
    axios.get('http://localhost:5000/classes/findbymajor/'+this.state.array[0])
      .then(response => {
         response.data.map(({name}) => {if(name) this.state.names.push(name)})
      this.setState({
               
              list:this.state.names,
             id:this.state.array[1]

      })
           
            
          
          console.log(this.state.list)
        
      })
      .catch((error) => {
        console.log(error);
      })

  }



  

 
render() {
  if(this.state.id==800000001){
    return ( <div>
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
      <button type="button" style = {{width:"25vh",position: 'absolute', left: '50%',top:'20%'}} onClick={ this.addclass}>
                Click to add a course

              </button>

      
    </div>
)
  }
  
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