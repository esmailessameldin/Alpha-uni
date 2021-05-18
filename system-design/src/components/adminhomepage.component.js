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
   this.secondSection=this.secondSection.bind(this)
   this.newstudent=this.newstudent.bind(this)
   this.newfaculty=this.newfaculty.bind(this)
   this.grade=this.grade.bind(this)
   this.addclass = this.addclass.bind(this);
   this.hold=this.hold.bind(this)
   this.open=this.open.bind(this)
   this.pre=this.pre.bind(this)
   this.opennext=this.opennext.bind(this)
   this.nextsemester=this.nextsemester.bind(this)
   this.timeslots=this.timeslots.bind(this)
   this.updatecourse=this.updatecourse.bind(this)
    this.state = {
     
     
    }
  }
  
  updatecourse(e){
    e.preventDefault()
    window.location='/updatecourse'
  }

  newfaculty(e){
    e.preventDefault()
    window.location='/addfaculty'
  }
  updatecours(e){
    e.preventDefault()
    window.location='/updatecourse'
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
    window.location='/addclass'

   }
   open(e){
    e.preventDefault();
     axios.post('http://localhost:5000/admins/close').then(res=>{
       alert(res.data)
     })
   }
   timeslots(e){
    e.preventDefault();
     window.location='/timeslots'
   }
   opennext(e){
    e.preventDefault();
    axios.post('http://localhost:5000/admins/closenext').then(res=>{
      alert(res.data)
    })
  }
  grade(e){
    e.preventDefault()
    window.location='/gradescreen'
  }
hold(e){
  e.preventDefault()
  window.location='/addhold'
}
 nextsemester(e){
  e.preventDefault()
  window.location='/adminnextclasses'
 }
 secondSection(e){
   e.preventDefault()
   window.location='/addsecondsection'
 }
 pre(e){
  e.preventDefault()
  window.location='/prereq'
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
 
        <form onClick={this. timeslots}>
    <Button  onClick={this. timeslots}    animated  style = {{position: 'absolute', left: '68%', top: '62%',
        transform: 'translate(-50%, -50%)'}} type="Logout" value="Logout" >
      <Button.Content  onClick={this.timeslots} visible>View Timeslots</Button.Content>
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
     <button type="button" style={{position: 'absolute', left: '26%', top: '60%'}} onClick={this.addclass}>
      Add class
     </button>
     <button type="button" style={{position: 'absolute', left: '35%', top: '60%'}} onClick={this.hold}>
     Add holds
     </button>
     <button type="button" style={{position: 'absolute', left: '45%', top: '60%'}} onClick={this.nextsemester}>
    View next semester courses
     </button>
     <button type="button" style={{position: 'absolute', left: '15%', top: '60%'}} onClick={this.secondSection}>
     Search classes
     </button>
     <button type="button" style={{position: 'absolute', left: '15%', top: '70%'}} onClick={this.open}>
    Open/Close the adding for this semester
     </button>
     <button type="button" style={{position: 'absolute', left: '45%', top: '70%'}} onClick={this.opennext}>
     Open/Close the adding for next semester
     </button>
     <button type="button" style={{position: 'absolute',left:'70%',top:'70%'}} onClick={this.pre}>
        View Prerequisites
     </button>
     <button type="button" style={{position: 'absolute',left:'84%',top:'70%'}} onClick={this.updatecourse}>
        Update next semester class
     </button>
     
    </div>
    

  
    
    )
  }
}