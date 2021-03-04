import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'semantic-ui-react';
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    
    this.Add1stHandleClick=this.Add1stHandleClick.bind(this);
    this.Add2ndHandleClick=this.Add2ndHandleClick.bind(this);
    this.Drop1stHandleClick=this.Drop1stHandleClick.bind(this)
    this.Drop2ndHandleClick=this.Drop2ndHandleClick.bind(this)
    this.onChangeID=this.onChangeID.bind(this);
    this.state = {
        names:[],
        times:[],
        name:'',
        id:'',
        day:''
      }
   
  }
  
  onChangeID(e) {
    this.setState({
      id:e.target.value
    })
  }

        
Add1stHandleClick(e){
 
  e.preventDefault();
  axios.get('http://localhost:5000/section/findbyclass/'+this.props.match.params.name)
      .then(response => {
        console.log(response.data)
        const user ={
          name:response.data.[0].name,
          time:response.data.[0].time,
          day:response.data.[0].day,
          id:this.state.id
        

        }

      axios.post('http://localhost:5000/users/addsection/',user)
          
      })
      .catch((error) => {
        console.log(error);
      })
     
  
}
Add2ndHandleClick(e){
  e.preventDefault();
  axios.get('http://localhost:5000/section/findbyclass/'+this.props.match.params.name)
      .then(response => {
        console.log(response.data)
        const user ={
          name:response.data.[1].name,
          time:response.data.[1].time,
          day:response.data.[1].day,
          id:this.state.id
        

        }

      axios.post('http://localhost:5000/users/addsection/',user)
          
      })
      .catch((error) => {
        console.log(error);
      })
  
  
}
Drop1stHandleClick(e){
  e.preventDefault();
  axios.get('http://localhost:5000/section/findbyclass/'+this.props.match.params.name)
      .then(response => {
        console.log(response.data)
        const user ={
          name:response.data.[0].name,
          time:response.data.[0].time,
          day:response.data.[0].day,
          id:this.state.id
        

        }

      axios.post('http://localhost:5000/users/deletesection/',user)
          
      })
      .catch((error) => {
        console.log(error);
      })



} 
Drop2ndHandleClick(e){
  e.preventDefault();
  axios.get('http://localhost:5000/section/findbyclass/'+this.props.match.params.name)
      .then(response => {
        console.log(response.data)
        const user ={
          name:response.data.[1].name,
          time:response.data.[1].time,
          day:response.data.[1].day,
          id:this.state.id
        

        }

      axios.post('http://localhost:5000/users/deletesection/',user)
          
      })
      .catch((error) => {
        console.log(error);
      })

      


} 



  componentDidMount() {
    console.log(this.props.match.params.name)
    axios.get('http://localhost:5000/section/findbyclass/'+this.props.match.params.name)
      .then(response => {
        console.log(response.data)
         this.state.names.push((response.data.[0].name),("time: "+response.data.[0].time),("day: "+response.data.[0].day),("capacity: "+response.data.[0].capacity),("students: "+response.data.[0].stud))
         this.state.times.push((response.data.[1].name),("time: "+response.data.[1].time),("day: "+response.data.[1].day),("capacity: "+response.data.[1].capacity),("students: "+response.data.[1].stud))
        
      this.setState({
            

      })
           
          
      })
      .catch((error) => {
        console.log(error);
      })

  }



  

 
render() {
  
    return (
      <div>
     
              
           
     <ul>
     <button onClick={this.Add1stHandleClick} type="button"  type="button"
    style = {{position: 'absolute', left: '50%'}} >
    Add 
 </button>
 <button onClick={this.Drop1stHandleClick} type="button"  type="button"
    style = {{position: 'absolute', left: '55%'}} >
     Drop 
 </button>
    {this.state.names.map(function(item) {return <li key={item}>{item} </li> ;
    })}

     <h> ________________________________________________________________________________________________________________________________ </h>

 {this.state.times.map(function(item) {return <li key={item}>{item} </li> ;
    })}<button onClick={this.Add2ndHandleClick} type="button"  type="button"
    style = {{position: 'absolute', left: '50%'}} >
   Add 
 </button>
 <button onClick={this.Drop2ndHandleClick} type="button"  type="button"
    style = {{position: 'absolute', left: '55%'}} >
   Drop
 </button>

  </ul>

  < Form   style = {{position: 'absolute', left: '2%'}}>
    <Form.Field>
      <  label>Enter your ID </label>
      <input  required  onChange={this.onChangeID}  placeholder='Enter your ID' />
      
    </Form.Field>
  </Form>

    </div>
    

  
    
    )
  }
}