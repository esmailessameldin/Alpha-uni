import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onChangeDay = this.onChangeDay.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTime=this.onChangeTime.bind(this)
    this.onChangeCrn=this.onChangeCrn.bind(this)
    this.onChangeName=this.onChangeName.bind(this)
    this.onChangeBuilding=this.onChangeBuilding.bind(this)
    this.onChangeRoom=this.onChangeRoom.bind(this)
    this.onChangeTeacher=this.onChangeTeacher.bind(this)

    this.state = { 
    name:'',
    time:'',
    day:'',
    capacity:20,
    credits: 4,
    students:0,
    building:'',
    room:0,
    teacher:'',
    crn:'',
    exists:false

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
   
}
onChangeDay(e){
    this.setState({
        day:e.target.value
    })
}

  onChangeBuilding(e) {
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
  onChangeCrn(e){
      this.setState({

        crn:e.target.value
      })
  }
 
  onSubmit(e) {
    e.preventDefault();
const test ={

    day:this.state.day,
    time:this.state.time,
    building:this.state.building,
    room:this.state.room,
}
console.log(test)
axios.get('http://localhost:5000/section/findone',test)
.then(res=>{
this.setState({

exists:res.data

})


})














if(!this.state.exists){

    const user = {
        name:this.state.name,
        credit:this.state.credits,
        day:this.state.day,
        time:this.state.time,
        cap:this.state.capacity,
        students:this.state.students,
        building:this.state.building,
        room:this.state.room,
        teacher:this.state.teacher,
        crn:this.state.crn

      

    }

    console.log(user);

    axios.post('http://localhost:5000/section/add/'+this.props.match.params.major, user)
      .then(
        alert("Update successful !"));

    }else{

        alert("The room is taken on that day and time try again")
    }

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
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '85%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Time: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '27.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Day: </label>
            <input  input type="text" 
         
                required
                value={this.state.day}
                onChange={this.onChangeDay}
                className="form-control"
                />
          </div>
    

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '38.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Building: </label>
            <input  input type="text"
                required
                value={this.state.building}
                onChange={this.onChangeBuilding}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '49.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>room: </label>
            <input  input type="text"
        
                required
                value={this.state.room}
                onChange={this.onChangeRoom}
                className="form-control"
                />
          </div>

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '60.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Teacher: </label>
            <input  input type="text"
          
                required
                value={this.state.teacher}
                onChange={this.onChangeTeacher}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '72.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>CRN: </label>
            <input  input type="text"
          
                required
                value={this.state.crn}
                onChange={this.onChangeCrn}
                className="form-control"
                />
          </div>











          <div>
    <Button  animated  style = {{width:"11vh",position: 'absolute', left: '50%', top: '110.8%',
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