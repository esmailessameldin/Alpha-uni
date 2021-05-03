import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeID=this.onChangeID.bind(this)
    this.onChangeName=this.onChangeName.bind(this)
    this.onChangemMajor=this.onChangemMajor.bind(this)
    this.onChangeTeacher=this.onChangeTeacher.bind(this)
    this.state = { 
    name:'',
    teacher:'',
    id:0,
    major:'',
    exists:false

    }
  }
  
  onChangeName(e){
    this.setState({
        name:e.target.value
    })
}
onChangeTeacher(e) {
    this.setState({
      teacher: e.target.value
    })
  }
  onChangeID(e){
      this.setState({

        id:e.target.value
      })
  }
  onChangemMajor(e){
this.setState({
    major:e.target.value
})

  }
 
  onSubmit(e) {
    e.preventDefault();
const test ={
       name:this.state.name,
       id:this.state.id,
       teacher:this.state.teacher,
       major:this.state.major
   
}
console.log(test)
axios.post('http://localhost:5000/admins/addclass',test)
.then(res=>{
alert(res.data)

window.location='/addsection/'+this.state.name+","+this.state.teacher

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
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>ID: </label>
            <input  type="text"
                required
                value={this.state.id}
                onChange={this.onChangeID}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '27.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Teacher: </label>
            <input  input type="text" 
         
                required
                value={this.state.teacher}
                onChange={this.onChangeTeacher}
                className="form-control"
                />
          </div>
    

          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '38.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Major: </label>
            <input  input type="text"
                required
                value={this.state.major}
                onChange={this.onChangemMajor}
                className="form-control"
                />
          </div>
          <div>
    <Button  animated  style = {{width:"11vh",position: 'absolute', left: '50%', top: '59.8%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="register" >
      <Button.Content visible>Submit</Button.Content>
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