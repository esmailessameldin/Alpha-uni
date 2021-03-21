import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap';
import {Button} from 'semantic-ui-react'
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.Drop1stHandleClick=this.Drop1stHandleClick.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.onChangeID=this.onChangeID.bind(this);
    this.wrapper = React.createRef();
    this.state = {
         id:0,
        crn:0,
        crn2:'',
        id2:''
      }
   
  }
  Drop1stHandleClick(e){
    e.preventDefault();
   
 
          const user ={
            
            crn: this.state.crn2,
            id: this.props.match.params.id
          
  
          }
  
        axios.post('http://localhost:5000/users/deletesection/',user)
            
       
        .catch((error) => {
          console.log(error);
        })
  
  
        alert("Section dropped !")
  } 

  onChangeID(e) {
    this.setState({
      crn2: e.target.value
    })
  }
  handleClick(e) {
    e.preventDefault();

    const user = {
      crn: this.state.crn2,
      id: this.props.match.params.id
    
    }

    console.log(user);

    axios.post('http://localhost:5000/section/findbycrn/'+this.props.match.params.id, user)
     

    
    
    
  }





  

 
render() {
  
    return (
     <div><Form>
     <Form.Group onChange={this.onChangeID} style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -50%)'}} controlId="formBasicPassword">
       <Form.Label>Enter the crn for the Course</Form.Label>
       <Form.Control type="ID" />
     </Form.Group>
     
     <Button onClick={this.handleClick} style = {{width:"11vh",position: 'absolute', left: '40%', top: '50%'}} variant="Primary" type="submit">
       Add
     </Button>
     
     <Button onClick={this.Drop1stHandleClick} style = {{width:"11vh",position: 'absolute', left: '46%', top: '50%'}} variant="Primary" type="submit">
       Drop
     </Button>
   </Form>
              </div>

  
    
    )
  }
}