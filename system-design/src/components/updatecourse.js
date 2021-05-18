import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTime=this.onChangeTime.bind(this)
    this.OnchangeDay=this.OnchangeDay.bind(this)
    this.onChangeCapacity=this.onChangeCapacity.bind(this)
    this.onChangeStudents=this.onChangeStudents.bind(this)
    this.onChangeBuilding=this.onChangeBuilding.bind(this)
    this.onChangeRoom=this.onChangeRoom.bind(this)
    this.onChangeTeacher=this.onChangeTeacher.bind(this)
    this.onChangeCrn=this.onChangeCrn.bind(this)

    this.state = { 
    name:'',
    time:'',
    day:'',
    capacity:'',
    students: '',
    building:'',
    room:'',
    teacher:'',
    crn:''
    

    }
  }
  
  onChangeName(e){
    this.setState({
        name:e.target.value
    })
}
  onChangeTime(e){
    this.setState({
        time:e.target.value
    })
    console.log(this.state.address)
}
OnchangeDay(e){
  this.setState({
      day:e.target.value
  })
  console.log(this.state.minor)
}
onChangeCapacity(e){
    this.setState({
        capacity:e.target.value
    })
}
onChangeStudents(e){
    this.setState({
        students:e.target.value
    })
}
onChangeBuilding(e){
    this.setState({
        building:e.target.value
    })
}
  onChangeRoom(e) {
    this.setState({
        room: e.target.value
    })
  }
  onChangeTeacher(e) {
    this.setState({
        teacher: e.target.value
    })
  }
  onChangeCrn(e) {
    this.setState({
        crn: e.target.value
    })
  }
  
  
    
  onSubmit(e) {
    e.preventDefault();

    const user = {
        name:this.state.name,
        time:this.state.time,
        day:this.state.day,
        capacity:this.state.capacity,
        students:this.state.students,
        building:this.state.building,
        room:this.state.room,
        teacher:this.state.teacher,
    }

    console.log(user);

    axios.post('http://localhost:5000/admins/updatesection/'+this.state.crn, user)
      .then(res=>{
          alert(res.data)
      })
  }
render() {
    return (
        <div style = {{width:"100vh"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '16%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Name: </label>
            <input  type="text"
          
                required
                value={this.state.name}
                onChange={this.onChangeName}
                className="form-control"
               
                />
          </div>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '75%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Day: </label>
            <input  type="text"
         
                required
                value={this.state.day}
                onChange={this.OnchangeDay}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '27.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Time: </label>
            <input  type="text"
           
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '98.9%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Capacity: </label>
            <input  input type="text"
         
                required
                value={this.state.capacity}
                onChange={this.onChangeCapacity}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '39.9%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label> Students: </label>
            <input  input type="text"
    
                required
                value={this.state.students}
                onChange={this.onChangeStudents}
                className="form-control"
                />
          </div>

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '50.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Room: </label>
            <input  input type="text"

                required
                value={this.state.room}
                onChange={this.onChangeRoom}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '61.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Teacher: </label>
            <input  input type="text"
    
                required
                value={this.state.teacher}
                onChange={this.onChangeTeacher}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '85.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>CRN of the class you wanna update: </label>
            <input  input type="text"
    
                required
                value={this.state.crn}
                onChange={this.onChangeCrn}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '110.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Building: </label>
            <input  input type="text"
    
                required
                value={this.state.building}
                onChange={this.onChangeBuilding}
                className="form-control"
                />
          </div>

         













          <div>
    <Button  animated  style = {{width:"11vh",position: 'absolute', left: '50%', top: '130.8%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="register" >
      <Button.Content visible>Update</Button.Content>
      <Button.Content visible>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  
  </div>
  
        </form>
      </div>
    )
  }
}