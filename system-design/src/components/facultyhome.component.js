import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.handleClickAudit=this.handleClickAudit.bind(this)
    this.handleClickDegree=this.handleClickDegree.bind(this)
    this.handleClickCalendar=this.handleClickCalendar.bind(this)
    this.handeClickAdd=this.handeClickAdd.bind(this)
    this.handClickLogout = this.handClickLogout.bind(this);
    this.onClick = this. onClick.bind(this);
    this.onClick2 = this. onClick2.bind(this);
    this.onClick3 = this. onClick3.bind(this);
    this.state = {
      name: '',
      email: '',
      id: '',
      major:'',
      birthday:'',
      address:'',
      year:'',
      status:'',
      enrolled:[],
     grading:true,
     userid:''
     
    }
  }
  handeClickAdd(e){
    e.preventDefault();
    window.location='/adddrop/'+this.props.match.params.id
  }
grade(e){
  var array = e.split(" ");
  var name =array[0]+" "+array[1]
  console.log(array[0]+" "+array[1])
  axios.get('http://localhost:5000/users/get/'+name)
  .then(res=>{
    console.log(res.data.id)
    window.location='/grade/'+this.props.match.params.id+","+res.data.id
  })
}
  handleClickCalendar(e){
    e.preventDefault();
 window.location='/calendar/'+this.props.match.params.id

  }
  handleClickDegree(e){
    e.preventDefault(); 

  }

  handleClickAudit(e){
    e.preventDefault();
    window.location='/audit/'+this.state.major
  }
   handClickLogout(e){
    e.preventDefault();
    window.location='/'
   }
   onClick(e){
    e.preventDefault();
    window.location='/sections/'+this.state.status+","+this.state.id

   }
   onClick2(e){
    e.preventDefault();
    window.location='/nextsections/'+this.state.status

   }
   onClick3(e){
    e.preventDefault();
    window.location='/attendance/'+this.state.name

   }
  componentDidMount() {
    console.log(this.props.match.params.id)
    if(this.props.match.params.id==='100')
    window.location='/passerror'
    axios.get('http://localhost:5000/faculty/'+this.props.match.params.id)
      .then(response => {
       
          
          this.setState({
            
            name: response.data.name,
            email:response.data.email,
            id:response.data.id,
            major:response.data.office_building,
            birthday:response.data.birthday,
            address:response.data.address,
            year:response.data.office_room_number,
            status:response.data.class,
            enrolled:response.data.enrolled
            
          })
          console.log(this.state.enrolled)
        
      })
      .catch((error) => {
        console.log(this.props.match.params.id);
      })

  }



  

 
render() {
  
    return (
      <div handClickLogout={this.handClickLogout}>
      <Table striped bordered  style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -20%)'}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>{this.state.name}</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Email</td>
          <td>{this.state.email}</td>
        
        </tr>
        <tr>
          <td>ID</td>
          <td>{this.state.id}</td>
        
        </tr>
        <tr>
          <td>Birthday</td>
          <td>{this.state.birthday}</td>
        
        </tr>
        <tr>
          <td>Address</td>
          <td>{this.state.address}</td>
        
        </tr>
        <tr>
          <td>Office building</td>
          <td>{this.state.major}</td>
        
        </tr>
        
        <tr>
          <td>Office Room Number</td>
          <td>{this.state.year}</td>
        
        </tr>
        <tr>
          <td>Class</td>
          <td>{this.state.status}</td>

        </tr>
       
       
      </tbody>
    </Table>
              
               
    <form onClick={this. handClickLogout}>
    <Button  onClick={this. handClickLogout}    animated  style = {{width:"11vh",position: 'absolute', left: '20%', top: '69%',
        transform: 'translate(-50%, -50%)'}} type="Logout" value="Logout" >
      <Button.Content  onClick={this.handClickLogout} visible>Logout</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
    </form>
        
          
    <form onClick={this. onClick}>
    <Button  onClick={this. onClick}    animated  style = {{width:"11vh",position: 'absolute', left: '20%', top: '79%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.onClick} visible>Classes</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
        </form>
        <form onClick={this. onClick2}>
    <Button  onClick={this. onClick2}    animated  style = {{position: 'absolute', left: '18%', top: '89%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.onClick2} visible>Next semester classes</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
        </form>
        <form onClick={this. onClick3}>
    <Button  onClick={this. onClick3}    animated  style = {{position: 'absolute', left: '18%', top: '60%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.onClick3} visible>Take Attendance</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
        </form>
 
 
    </div>
    

  
    
    )
  }
}