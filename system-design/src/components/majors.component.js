import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';
import {  Image, List } from 'semantic-ui-react'
import { left } from '@popperjs/core';
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    
    this.onClick=this.onClick.bind(this);
    this.state = {
        names:[],
        list:[]
      }
   
  }
  
onClick(e){
  window.location='/majors'+e


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
    {this.state.names.map(function(item) {return <li key={item}>{item}<button type="button"  type="button"
       style = {{position: 'absolute', left: '50%'}} >
      Click to view sections
    </button> </li> ;
    })}
  </ul>



    </div>
    

  
    
    )
  }
}