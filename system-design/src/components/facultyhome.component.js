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
    this.state = {
      name: '',
      email: '',
      id: '',
      major:'',
      birthday:'',
      address:'',
      year:'',
      status:'',
      enrolled:[]
     
    }
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
    window.location='/sections/'+this.state.status

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
        <tr>
          <td>enrolled</td>
          <th>
           {this.state.enrolled.map((item, key) => {
                    return (
                      <li key={key}>
                        {item}
                        
                      </li>
                    );
                  })}
                </th>

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
 
    </div>
    

  
    
    )
  }
}