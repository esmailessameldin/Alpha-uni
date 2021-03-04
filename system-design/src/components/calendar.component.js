import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'



export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onClick = this. onClick.bind(this);
    this.sortLists=this.sortLists.bind(this);
    this.monday=this.monday.bind(this)
    this.state = {
      
        listA:[],
        listB:[],
        listC:[],
        listD:[],
        listE:[],
        name:'',
        day:'',
        time:'',
     
    }
  }

   onClick(e){
    e.preventDefault();
    window.location='/classes/'+this.props.match.params.id

   }
  componentDidMount() {
    console.log(this.props.match.params.id)
    if(this.props.match.params.id==='100')
    window.location='/passerror'
    axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(response => {
        console.log(response.data.sections)
    
          
          this.setState({
            listA:response.data.sections.map(sections => sections)
           
            
          })
          console.log(this.state.listA) 
          this.sortLists()
          this.monday()
        
      })
      .catch((error) => {
        console.log(this.sortLists(this.state.listA));
      })

  }

sortLists(x){
    console.log(x[0])
    if(this.state.listA[0]){ 
           this.state.listB.push(this.state.listA[0].name,this.state.listA[0].day,this.state.listA[0].time)

     }
     if(this.state.listA[1]){ 
        this.state.listC.push(this.state.listA[1].name,this.state.listA[1].day,this.state.listA[1].time)

  }
  if(this.state.listA[2]){ 
    this.state.listD.push(this.state.listA[2].name,this.state.listA[2].day,this.state.listA[2].time)

}
if(this.state.listA[3]){ 
    this.state.listE.push(this.state.listA[3].name,this.state.listA[3].day,this.state.listA[3].time)

} 
console.log(this.state.listB[2],this.state.listC,this.state.listD,this.state.listE)
}
monday(e){
  

  

    
}
 

 
render() {
  
    return (
      <div handClickLogout={this.handClickLogout}>
      <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '60%',
      transform: 'translate(-50%, -50%)'}}>
      <thead>
        <tr>
          <th>Day</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8:00AM - 9:30AM</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          
        
        </tr>
        <tr>
          <td>9:40AM - 11:10AM</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>

        
        </tr>
        <tr>
          <td>11:20AM - 12:50PM</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        
        </tr>
        <tr>
          <td>1:00PM - 2:30PM</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        
        </tr>
        <tr>
          <td>2:40PM - 4:10PM</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        
        </tr>
        <tr>
          <td>4:20PM - 5:50PM</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        
        </tr>
        <tr>
          <td>6:00PM - 7:30PM</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        
        </tr>
        <tr>
          <td>7:40PM - 9:10PM</td>
          <td> {this.state.name} </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        
        </tr>
        
       
      </tbody>
    </Table>
              
               
    



  
    </div>
    

  
    
    )
  }
}