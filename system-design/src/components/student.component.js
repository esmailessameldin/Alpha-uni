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
    this.handleClickTranscript=this.handleClickTranscript.bind(this)
    this.state = {
      name: '',
      email: '',
      id: '',
      major:'',
      birthday:'',
      address:'',
      year:'',
      status:''
     
    }
  }
  handleClickTranscript(e){
e.preventDefault();
window.location='/transcript/'+this.props.match.params.id
  }
  handeClickAdd(e){
    e.preventDefault();
    window.location='/adddrop/'+this.props.match.params.id
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
    window.location='/classes/'+this.props.match.params.id

   }
  componentDidMount() {
    console.log(this.props.match.params.id)
    if(this.props.match.params.id==='100')
    window.location='/passerror'
    axios.get('/api/users/'+this.props.match.params.id)
      .then(response => {
        console.log(response)
    
          
          this.setState({
            
            name: response.data.name,
            email:response.data.email,
            id:response.data.id,
            major:response.data.major,
            birthday:response.data.birthday,
            address:response.data.address,
            year:response.data.year,
            status:response.data.status,
            
          })
          console.log(this.state.name)
        
      })
      .catch((error) => {
        console.log(this.props.match.params.id);
      })

  }



  

 
render() {
  
    return (
      <div handClickLogout={this.handClickLogout}>
      <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -50%)'}}>
      <thead>
        <tr>
          <th>Namasdase</th>
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
          <td>Major</td>
          <td>{this.state.major}</td>
        
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
          <td>Year</td>
          <td>{this.state.year}</td>
        
        </tr>
        <tr>
          <td>status</td>
          <td>{this.state.status}</td>
        
        </tr>
       
      </tbody>
    </Table>
              
               
    <form onClick={this. handClickLogout}>
    <Button  onClick={this. handClickLogout}    animated  style = {{width:"11vh",position: 'absolute', left: '50%', top: '69%',
        transform: 'translate(-50%, -50%)'}} type="Logout" value="Logout" >
      <Button.Content  onClick={this.handClickLogout} visible>Logout</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
    </form>
        
          
    <form onClick={this. onClick}>
    <Button  onClick={this. onClick}    animated  style = {{width:"11vh",position: 'absolute', left: '50%', top: '79%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.onClick} visible>Classes</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
        </form>
 
        <form onClick={this.handleClickCalendar}>
    <Button  onClick={this.handleClickCalendar}    animated  style = {{width:"15vh",position: 'absolute', left: '50%', top: '89%',
        transform: 'translate(-50%, -50%)'}} type="click" value="classes" >
      <Button.Content  onClick={this.handleClickCalendar} visible>Calendar</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
        </form>

        <form onClick={this. handleClickAudit}>
    <Button  onClick={this. handleClickAudit}    animated  style = {{width:"11vh",position: 'absolute', left: '40%', top: '69%',
        transform: 'translate(-50%, -50%)'}} type="Logout" value="Logout" >
      <Button.Content  onClick={this.handleClickAudit} visible>audit</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
    </form>
    
    <form onClick={this. handeClickAdd}>
    <Button  onClick={this. handeClickAdd}    animated  style = {{width:"15vh",position: 'absolute', left: '65%', top: '80%',
        transform: 'translate(-50%, -50%)'}} type="Logout" value="Logout" >
      <Button.Content  onClick={this.handeClickAdd} visible>Add/Drop</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
    </form>
    <form onClick={this. handleClickTranscript}>
    <Button  onClick={this. handleClickTranscript}    animated  style = {{width:"15vh",position: 'absolute', left: '72%', top: '80%',
        transform: 'translate(-50%, -50%)'}} type="Logout" value="Logout" >
      <Button.Content  onClick={this.handleClickTranscript} visible>Transcript</Button.Content>
      <Button.Content hidden>
      </Button.Content>
    </Button>
    </form>
    
  
    </div>
    

  
    
    )
  }
}