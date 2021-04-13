import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
   this.students=this.students.bind(this)
   this.faculty=this.faculty.bind(this)
   this.classes=this.classes.bind(this)
    this.state = {
     
     
    }
  }
  
   students(e){
    e.preventDefault();
    window.location='/adminhome'

   }
   faculty(e){
       e.preventDefault();
       window.location='/adminfaculty'

   }
   classes(e){
       e.preventDefault()
       window.location='/adminclasses'

   }
 

  

 
render() {
  
    return (
      <div >
       <h3 style={{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 

}}  >Logged in as Admin: Lila Abouelrigal </h3>
          <h5>ID: 800000001 </h5>
     
              
               
    <form onClick={this. students}>
    <Button  onClick={this. students}    animated  style = {{position: 'absolute', left: '40%', top: '50%',
        transform: 'translate(-50%, -50%)'}} type="Logout" value="Logout" >
      <Button.Content  onClick={this.students} visible>View Students</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
    </form>
        
          
    <form onClick={this. faculty}>
    <Button  onClick={this. faculty}    animated  style = {{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.faculty} visible>View Faculty</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
        </form>
 
        <form onClick={this.classes}>
    <Button  onClick={this.classes}    animated  style = {{position: 'absolute', left: '60%', top: '50%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.classes} visible>View Classes</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
        </form>

        
    
    
    </div>
    

  
    
    )
  }
}