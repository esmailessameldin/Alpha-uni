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
   
  }
  
onClick(e){
  window.location='/majors'+e


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
      <div onSubmit={this.onSubmit}>
     
              
           
     <ul>
    {['Adolescence Education: Chemistry (7-12)', 
'Adolescence Education: Social Studies (7-12)',
  'Biological Sciences', 
'Chemistry',
'English', 
'History', 
 'Industrial and Labor Relations',
'Liberal Arts', 
 'Media and Communications',
'Philosophy and Religion',
  'Politics & Economics & Law', 
'Spanish Language',
 'Visual Arts', 
'Adolescence Education: Biology (7-12)', 
'Adolescence Education: Mathematics (7-12)', 
'Biochemistry',
'Business Administration',
 'Childhood Education (1-6)', 
'Computer & Information Science', 
'Criminology', 
'Finance',
'General Studies', 
'Health and Society', 
'Industrial and Labor Relations',
'Management Information Systems', 
 'Marketing', 
'Mathematics', 
'Psychology', 
'Sociology', 
'Special Education and Childhood Education (1-6)', 
 'Visual Arts: Electronic Media'].map(function(item) {

      return <li key={item}>{item}<button type="button"  type="button"
      onClick={() => this.onClick(item)} style = {{position: 'absolute', left: '50%'}} >
      Click to view courses
    </button> </li> ;
    })}
  </ul>



    </div>
    

  
    
    )
  }
}