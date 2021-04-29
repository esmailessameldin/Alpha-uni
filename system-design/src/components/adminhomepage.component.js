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
   this.newstudent=this.newstudent.bind(this)
   this.newfaculty=this.newfaculty.bind(this)
   this.grade=this.grade.bind(this)
   this.addclass = this.addclass.bind(this);
   this.hold=this.hold.bind(this)
    this.state = {
     
     
    }
  }
  newfaculty(e){
    e.preventDefault()
    window.location='/addfaculty'
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
   newstudent(e){
    e.preventDefault()
    window.location='/addstudent'
   }
   addclass(e){
    e.preventDefault();
    window.location='/classes/'+800000001

   }

  grade(e){
    e.preventDefault()
    window.location='/gradescreen'
  }
hold(e){
  e.preventDefault()
  window.location='/addhold'
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

        <form onClick={this.newstudent}>
    <Button  onClick={this.newstudent}    animated  style = {{position: 'absolute', left: '74%', top: '50%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.newstudent} visible>Register a New student </Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>

    
        </form>
        <form onClick={this.newfaculty}>
    <Button  onClick={this.newfaculty}    animated  style = {{position: 'absolute', left: '24%', top: '50%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.newfaculty} visible>Register a New Faculty Member </Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
 
        </form>
      <button type="button" style={{position: 'absolute', left: '46%', top: '60%'}} onClick={this.grade}>
      Check grade requests
     </button>
     <button type="button" style={{position: 'absolute', left: '26%', top: '60%'}} onClick={this.addclass}>
      Add class
     </button>
     <button type="button" style={{position: 'absolute', left: '35%', top: '60%'}} onClick={this.hold}>
     Add holds
     </button>
    </div>
    

  
    
    )
  }
}