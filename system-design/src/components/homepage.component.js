import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.register=this.register.bind(this)
    this.faculty=this.faculty.bind(this)
    this.onChangePassword=this.onChangePassword.bind(this)

    this.state = {
      email: '',
      password:''
    }
  }
  
register(e){
window.location='/register'

}
faculty(e){
  window.location="/faculty"
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
componentDidMount(){
  console.log(window.location.hostname)
}
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://192.168.1.4:5000/users/login', user)
      .then(res =>{ 
        return JSON.stringify(res.data);
      }).then(data=>{
        console.log(data)
        window.location = `/student/${data}`

      });

    this.setState({
      email: '',
      password:''
      
    })
    

  }
render() {
    return (
        <div style = {{width:"100vh"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Email: </label>
            <input  type="text"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Password: </label>
            <input  input type="password" name="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                className="form-control"
                />
          </div>
          <div>
    <Button  animated  style = {{width:"10vh",position: 'absolute', left: '50%', top: '70%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="login" >
      <Button.Content visible>login</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  <button onClick={this.register} type="button"  type="button"
    style = {{position: 'absolute', left: '38%',top:'67.3%'}} >
   Register 
 </button>
 <button onClick={this.faculty} type="button"  type="button"
    style = {{position: 'absolute', left: '58%',top:'67.3%'}} >
   Teacher login
 </button>
  </div>
  
        </form>
      </div>
    )
  }
}