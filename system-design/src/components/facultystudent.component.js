import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react';
const loading = () => (
  <div>
   <Segment style = {{position: 'absolute', left: '50%', top: '39%',
    transform: 'translate(-50%, -50%)'}}>
    <Dimmer active>
      <Loader size='massive'>Loading data</Loader>
    </Dimmer>

    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
  </div>)

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
      status:'',
      minor:'',
      hold:'',
      loading:true
     
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
    window.location='/audit/'+this.state.major+","+this.state.minor
  }
   handClickLogout(e){
    e.preventDefault();
    window.location='/'
   }
   onClick(e){
    e.preventDefault();
    window.location='/departments'

   }
  componentDidMount() {
    console.log(this.props.match.params.name)
    var array=this.props.match.params.name.split(" ")
    axios.get('http://localhost:5000/users/get/'+array[0]+" "+array[1])
      .then(response => {
        console.log(response.data)
    
          
          this.setState({
            
            name: response.data.name,
            email:response.data.email,
            id:response.data.id,
            major:response.data.major,
            birthday:response.data.birthday,
            address:response.data.address,
            year:response.data.year,
            status:response.data.status,
            minor:response.data.minor
            
          })
          if(!response.data.hold){
                this.setState({
                  hold:"Account clear"
                })

          }else{

            this.setState({
              hold:response.data.holdmessage,
              loading:false
            })
          }
          console.log(this.state.loading)
        
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
          <th>name</th>
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
          <td>Status</td>
          <td>{this.state.status}</td>
        
        </tr>
        <tr>
          <td>Minor</td>
          <td>{this.state.minor}</td>
        
        </tr>
        <tr>
          <td>Hold</td>
          <td>{this.state.hold}</td>
        
        </tr>
       
      </tbody>
    </Table>
           
    
          
    
    </div>
    

  
    
    )
  }
}