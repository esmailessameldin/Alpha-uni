import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.onChangeAddress=this.onChangeAddress.bind(this)
    this.onChangeBirthday=this.onChangeBirthday.bind(this)
    this.onChangeStatus=this.onChangeStatus.bind(this)
    this.onChangeName=this.onChangeName.bind(this)
    this.onChangePassword=this.onChangePassword.bind(this)
  
    this.onChangePre1=this.onChangePre1.bind(this)
    this.onChangePre2=this.onChangePre2.bind(this)
    this.onChangePre3=this.onChangePre3.bind(this)

    this.state = { 
    name:'',
   next:false,
    number:0,
    pre1:'',
    pre2:'',
    pre3:'',
    prereqs:[],
    holder:[],
    x:0
    }
  }
  
  onChangeStatus(e){
    this.setState({
        status:e.target.value
    })
}
onChangePre1(e){
  
    this.setState({
        pre1:e.target.value
    })
}
onChangePre2(e){
    this.setState({
        pre2:e.target.value
    })
}
onChangePre3(e){
    this.setState({
        pre3:e.target.value
    })
}



  onChangeAddress(e){
    this.setState({
        address:e.target.value
    })
}
onChangeName(e){
    this.setState({
        name:e.target.value
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
      number: e.target.value
    })
  }

  onSubmit(e) {
   e.preventDefault()
   this.state.prereqs.push(this.state.pre1,this.state.pre2,this.state.pre3)
   const user={
       name:this.state.name,
       depndencies:this.state.prereqs
   }
    axios.post('http://localhost:5000/section/addpre',user)
    .then(res=>{
        alert(res.data)
    })
console.log(user)
  }
  onSubmit2(e) {
    e.preventDefault()
    console.log(this.state.prereqs)

  }
render() {

    return (
        <div style = {{width:"100vh"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'relative', left: '50%'}}> 
            <label>Name: </label>
            <input  type="text"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                className="form-control"
               
                />
          </div>
         
          <div  className="form-group" style={{left:'50%',position:'relative'}}> 
            <label>Prerequisite number : 1 </label>
            <input  type="text"
                required
                value={this.state.pre1}
                onChange={ this.onChangePre1}
                className="form-control"
               
                />
          </div>
          <div  className="form-group" style={{left:'50%',position:'relative'}}> 
            <label>Prerequisite number : 2 </label>
            <input  type="text"
          
                
                value={this.state.pre2}
                onChange={ this.onChangePre2}
                className="form-control"
               
                />
          </div>
          <div  className="form-group" style={{left:'50%',position:'relative'}}> 
            <label>Prerequisite number : 3 </label>
            <input  type="text"
              
                value={this.state.pre3}
                onChange={ this.onChangePre3}
                className="form-control"
               
                />
          </div>
 
          <div>
    <Button  animated  style = {{width:"11vh",position: 'relative', left: '96%'}} type="submit" value="register" >
      <Button.Content visible> Submit</Button.Content>
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