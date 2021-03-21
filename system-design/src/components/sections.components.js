import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'semantic-ui-react';
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
        names:[],
        times:[],
        name:'',
        id:'',
        day:'',
        CRN:[]
      }
   
  }
  
        




  componentDidMount() {
    console.log(this.props.match.params.name)
    axios.get('http://localhost:5000/section/findbyclass/'+this.props.match.params.name)
      .then(response => {
        console.log(response.data)
         this.state.names.push((response.data[0].name),("time: "+response.data[0].time),("day: "+response.data[0].day),("capacity: "+response.data[0].capacity),("students: "+response.data[0].students),("Building: "+response.data[0].building),("Room: "+response.data[0].room),("Teacher: "+response.data[0].teacher),("CRN: "+response.data[0].crn))
         this.state.times.push((response.data[1].name),("time: "+response.data[1].time),("day: "+response.data[1].day),("capacity: "+response.data[1].capacity),("students: "+response.data[1].students),("Building: "+response.data[1].building),("Room: "+response.data[1].room),("Teacher: "+response.data[1].teacher),("CRN: "+response.data[1].crn))
        
      this.setState({
            

      })
           console.log(response.data[0].stud)
          
      })
      .catch((error) => {
        console.log(error);
      })

  }



  

 
render() {
  
    return (
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
}