import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap';
import {Button} from 'semantic-ui-react'

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onClickClasses=this.onClickClasses.bind(this);
    this.Drop1stHandleClick=this.Drop1stHandleClick.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.onChangeID=this.onChangeID.bind(this);
    this.onClickNext=this.onClickNext.bind(this)
    this.wrapper = React.createRef();
    this.state = {
         id:0,
        crn:0,
        crn2:'',
        id2:'',
        message:'',
        open:true,
        closed : (
          <div><Form id="form">
             <Form.Group onChange={this.onChangeID} style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
              transform: 'translate(-50%, -50%)'}} controlId="formBasicPassword">
               <Form.Label>Enter the crn for the Course you want to withdraw from </Form.Label>
               <Form.Control type="ID" />
             </Form.Group>
             <Button onClick={this.Drop1stHandleClick} style = {{position: 'absolute', left: '46%', top: '50%'}} variant="Primary" type="submit">
               Withdraw
             </Button>
             <Button onClick={this.onClickNext} style = {{position: 'absolute', left: '33%', top: '50%'}} variant="Primary" type="submit">
       Add to next semester
     </Button>
            
           </Form>
                      </div>
        )
      }
   
  }
  Drop1stHandleClick(e){
    e.preventDefault();
   
 
          const user ={
            
            crn: this.state.crn2,
            id: this.props.match.params.id
          
  
          }
  
        axios.post('http://localhost:5000/section/deletesection/',user)
      
            
       
        .catch((error) => {
          console.log(error);
        })
  
        document.getElementById("form").reset()
        alert("Section dropped !")
  } 
onClickClasses(e){
  e.preventDefault()
  window.location='/classes/'+this.props.match.params.id

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
    
    .then(data=>{
      console.log(data)
      this.setState({
        message:data.data

      })

      console.log(this.state.message)
      alert(this.state.message)
   } )
    document.getElementById("form").reset()
   
    
    
  }

onClickNext(e){
  e.preventDefault()
  window.location='/adddropnext/'+this.props.match.params.id
}



  

 
render() {
  if(!this.state.open){
    return this.state.closed
  }
  
    return (
     <div><Form id="form">
     <Form.Group onChange={this.onChangeID} style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -50%)'}} controlId="formBasicPassword">
       <Form.Label>Enter the crn for the Course</Form.Label>
       <Form.Control type="ID" />
     </Form.Group>
     
     <Button onClick={this.handleClick} style = {{width:"11vh",position: 'absolute', left: '32%', top: '50%'}} variant="Primary" type="submit">
       Add
     </Button>
     
     <Button onClick={this.Drop1stHandleClick} style = {{width:"11vh",position: 'absolute', left: '38%', top: '50%'}} variant="Primary" type="submit">
       Drop
     </Button>
     <Button onClick={this.onClickClasses} style = {{position: 'absolute', left: '44%', top: '50%'}} variant="Primary" type="submit">
       Class Search
     </Button>
     <Button onClick={this.onClickNext} style = {{position: 'absolute', left: '52%', top: '50%'}} variant="Primary" type="submit">
       Add to next semester
     </Button>
   </Form>
              </div>

  
    
    )
  }
}