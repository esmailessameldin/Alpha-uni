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
    this.onChangeStatus=this.onChangeStatus.bind(this)
    this.onChangemajor=this.onChangemajor.bind(this)
    this.onChangeName=this.onChangeName.bind(this)
    this.onChangePassword=this.onChangePassword.bind(this)
    this.onChangeyear=this.onChangeyear.bind(this)

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
    minor:'',
    oldminor:'',
    advisor:''

    }
  }
  
  onChangeStatus(e){
    this.setState({
        status:e.target.value
    })
}
  onChangeAddress(e){
    this.setState({
        address:e.target.value
    })
    console.log(this.state.address)
}
onChangeMinor(e){
  this.setState({
      minor:e.target.value
  })
  console.log(this.state.minor)
}
onChangeName(e){
    this.setState({
        name:e.target.value
    })
}
onChangemajor(e){
    this.setState({
        major:e.target.value
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
  onChangeyear(e) {
    this.setState({
      year: e.target.value
    })
  }
  componentDidMount(){
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
    .then(response=>{
        this.setState({
            oldname:response.data.name,
            oldbirthday:response.data.birthday,
            oldaddress:response.data.address,
            oldstatus:response.data.status,
            oldemail: response.data.email,
            oldpassword:response.data.password,
            oldyear:response.data.year,
            oldmajor:response.data.major,
            oldminor:response.data.minor


        })

        console.log(this.state.oldname+" "+this.state.oldbirthday)

    })

  }
  onSubmit(e) {
    e.preventDefault();

    const user = {

      email: this.state.email,
      password: this.state.password,
      name:this.state.name,
      birthday:this.state.birthday,
      status:this.state.status,
      major:this.state.major,
      address:this.state.address,
      year:this.state.year,
      minor:this.state.minor

    }

    console.log(user);

    axios.post('http://localhost:5000/admins/updatestudent/'+this.props.match.params.id, user)
      .then(
        alert("Update successful !"));

   

  }
render() {
    return (
        <div style = {{width:"100vh"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '16%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Email: </label>
            <input  type="text"
            placeholder={"The old email was "+this.state.oldemail}
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                className="form-control"
               
                />
          </div>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '85%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Major: </label>
            <input  type="text"
            placeholder={"The old major was "+this.state.oldmajor}
                required
                value={this.state.major}
                onChange={this.onChangemajor}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '27.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Password: </label>
            <input  input type="password" name="password"
            placeholder={"The old password was "+this.state.oldpassword}
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '98.9%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Year: </label>
            <input  input type="text"
            placeholder={"The old year was "+this.state.oldyear}
                required
                value={this.state.year}
                onChange={this.onChangeyear}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '39.9%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label> Name: </label>
            <input  input type="text"
            placeholder={"The old name was "+this.state.oldname}
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
            placeholder={"The old birthday was "+this.state.oldbirthday}
                required
                value={this.state.birthday}
                onChange={this.onChangeBirthday}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '61.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Status (Full time or Part time): </label>
            <input  input type="text"
            placeholder={"The old status was "+this.state.oldestatus}
                required
                value={this.state.status}
                onChange={this.onChangeStatus}
                className="form-control"
                />
          </div>

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '110.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>address: </label>
            <input  input type="text"
            placeholder={"The old address was "+this.state.oldaddress}
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                className="form-control"
                />
          </div>

          
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '72.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Minor: </label>
            <input  input type="text"
            placeholder={"The old address was "+this.state.oldminor}
                required
                value={this.state.minor}
                onChange={this.onChangeMinor}
                className="form-control"
                />
          </div>













          <div>
    <Button  animated  style = {{width:"11vh",position: 'absolute', left: '50%', top: '120.8%',
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