import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeAddress=this.onChangeAddress.bind(this)
    this.onChangeBirthday=this.onChangeBirthday.bind(this)
    this.onChangeClass=this.onChangeClass.bind(this)
    this.onChangeOfficeBuilding=this.onChangeOfficeBuilding.bind(this)
    this.onChangeName=this.onChangeName.bind(this)
    this.onChangePassword=this.onChangePassword.bind(this)
    this.onChangeoffficeroom=this.onChangeoffficeroom.bind(this)

    this.state = { 
    name:'',
    birthday:'',
    address:'',
    status:'',
    email: '',
    password:'',
    year:'',
    major:'',
    oldname:'',
    oldbirthday:'',
    oldaddress:'',
    oldstatus:'',
    oldemail: '',
    oldpassword:'',
    oldyear:'',
    oldmajor:'',
    office_building:'',
    office_room_number:'',
    class:''

    }
  }
  
  onChangeClass(e){
    this.setState({
        class:e.target.value
    })
}
  onChangeAddress(e){
    this.setState({
        address:e.target.value
    })
    console.log(this.state.address)
}
onChangeName(e){
    this.setState({
        name:e.target.value
    })
}
onChangeOfficeBuilding(e){
    this.setState({
        office_building:e.target.value
    })
}
onChangeBirthday(e){
    this.setState({
        birthday:e.target.value
    })
}
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangeoffficeroom(e) {
    this.setState({
      office_room_number: e.target.value
    })
  }
 
  onSubmit(e) {
    e.preventDefault();

    const user = {

        name: this.state.name,
        email:this.state.email,
        password:this.state.password,
        class:this.state.class,
        birthday:this.state.birthday,
        address:this.state.address,
        office:this.state.office_building,
        number:this.state.office_room_number,

    }

    console.log(user);

    axios.post('http://localhost:5000/faculty/add' ,user)
      .then(
        alert("Faculty Member added successfully !"));

   

  }
render() {
    return (
        <div style = {{width:"100vh"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '16%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Email: </label>
            <input  type="text"
           
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                className="form-control"
               
                />
          </div>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '85%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Office room number (Only numbers otherwise Member won't be added !): </label>
            <input  type="text"
          
                required
                value={this.state.office_room_number}
                onChange={this.onChangeoffficeroom}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '27.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Password: </label>
            <input  input type="password" name="password"
          
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '98.9%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Office building: </label>
            <input  input type="text"
            
                required
                value={this.state.office_building}
                onChange={this.onChangeOfficeBuilding}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '39.9%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label> Name: </label>
            <input  input type="text"
           
                required
                value={this.state.name}
                onChange={this.onChangeName}
                className="form-control"
                />
          </div>

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '50.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Birthday(please enter it in the month/day/year format): </label>
            <input  input type="text"
          
                required
                value={this.state.birthday}
                onChange={this.onChangeBirthday}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '61.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Class: </label>
            <input  input type="text"
         
                required
                value={this.state.class}
                onChange={this.onChangeClass}
                className="form-control"
                />
          </div>

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '72.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>address: </label>
            <input  input type="text"
           
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                className="form-control"
                />
          </div>












          <div>
    <Button  animated  style = {{position: 'absolute', left: '50%', top: '110.8%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="register" >
      <Button.Content visible>Add this Faculty Member</Button.Content>
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