import React, { Component } from 'react';
import axios from 'axios';
import { button } from 'react-bootstrap';
import {Form} from 'semantic-ui-react';
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
  this.handleClick=this.handleClick.bind(this)
    this.state = {
        names:[],
        times:[],
        name:'',
        id:'',
        day:'',
        CRN:[],
        teacher1:'',
        teacher2:'',
        enrolled1:[],
        enrolled2:[],
        enrolled3:[],
        ready:false,
        array:[]
      }
   
  }
  
        


  handleClick(e){
    console.log('here')
    window.location='/facultyviewstudent/'+e
  }
    


  componentDidMount() {
    console.log(this.props.match.params.name)
    this.state.array=this.props.match.params.name.split(",")
    axios.get('http://localhost:5000/section/findbyclass/'+this.state.array[0])
      .then(response => {
        console.log(response.data)
         this.state.names.push((response.data[0].name),("time: "+response.data[0].time),("day: "+response.data[0].day),("capacity: "+response.data[0].capacity),("students: "+response.data[0].students),("Building: "+response.data[0].building),("Room: "+response.data[0].room),("Teacher: "+response.data[0].teacher),("CRN: "+response.data[0].crn))
         if(response.data[1]){
         this.state.times.push((response.data[1].name),("time: "+response.data[1].time),("day: "+response.data[1].day),("capacity: "+response.data[1].capacity),("students: "+response.data[1].students),("Building: "+response.data[1].building),("Room: "+response.data[1].room),("Teacher: "+response.data[1].teacher),("CRN: "+response.data[1].crn))}
        
      this.setState({
            teacher1:response.data[0].teacher,
           

      })
axios.get('http://localhost:5000/faculty/getenrolled/'+this.state.teacher1)
.then(res=>{
this.setState({
enrolled1:res.data

}) 
var array=[]
var time=""
var student=""
for(var i=0;i<this.state.enrolled1.length;i++){
 array= this.state.enrolled1[i].split(" ")
 time=array[2]+" "+array[3]+" "+array[4]
 student=array[0]+" "+array[1]
 if(time===response.data[0].time){
   this.state.enrolled3.push(this.state.enrolled1[i])

 }else{
  this.state.enrolled2.push(this.state.enrolled1[i])
 }
}
this.setState({
  ready:true
})

console.log(this.state.enrolled3)
})


      })
      .catch((error) => {
        console.log(error);
      })

  }



 
render() {
  
  if(this.state.ready &&this.state.array[1]){
    return (
      <div>
     
              
           
     <ul>
    
    {this.state.names.map(function(item) {return console.log({item}), <li key={item}>{item} </li> ;
    })}
    <ul >  Enrolled </ul>
    <div>{this.state.enrolled3.map(function(item){return(<div> <h6 style={{ color: 'navy',  top: '50%', left: '5%' }}>{item}</h6><button type="button"   onClick={() =>  window.location='/facultyviewstudent/'+item}>
                       View info
                        </button>  <button type="button" style={{ left: '89%'}} onClick={() => this.grade(item)}>
      Grade
     </button></div> )})}</div>

     <ul> ________________________________________________________________________________________________________________________________ </ul>

 {this.state.times.map(function(item) {return <li key={item}>{item} </li> ;
    })}
     <ul >  Enrolled </ul>
     <div>{this.state.enrolled2.map(function(item){return(<div> <h6 style={{ color: 'navy',  top: '50%', left: '5%' }}>{item}</h6><button type="button"   onClick={() =>  window.location='/facultyviewstudent/'+item}>
                       View info
                        </button>   <button type="button" style={{ left: '89%'}} onClick={() => this.grade(item)}>
      Grade
     </button></div>)})}</div>

  </ul>

 

    </div>
    

  
    
    )

  }else if(this.state.ready){
    return(
      <div>
     
              
           
      <ul>
     
     {this.state.names.map(function(item) {return console.log({item}), <li key={item}>{item} </li> ;
     })}
     
      <ul> ________________________________________________________________________________________________________________________________ </ul>
 
  {this.state.times.map(function(item) {return <li key={item}>{item} </li> ;
     })}
     
   </ul>
 
  
 
     </div>
     
    )


  }
  return(
    <div><ul> loading</ul></div>
  )
   
  }
}