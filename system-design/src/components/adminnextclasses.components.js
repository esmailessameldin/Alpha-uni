import React, { Component } from "react";
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
const loading = () => (
    <div>
     <Segment style = {{position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -50%)'}}>
      <Dimmer active>
        <Loader size='massive'>Loading data</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
    </div>)
        export default class CreateExercise extends Component {
            
          constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
        
            this.state = {
              students: [],
              loading:true
            };
          }
 


        
componentDidMount(){

axios.get('http://localhost:5000/admins/viewallnextcourses').then(
    res=>{
        console.log(res.data[0].name)
       
       this.setState({
      students:res.data
       })

    }
) 
setTimeout(function() { 
    console.log(this.state.students)
   
    this.setState({
            
            
        loading:false
    })
    console.log(this.state.loading)
    console.log(this.state.students[0].name)
}.bind(this), 10000)
    

 
}





          handleClick(e) {
            console.log(e);
            window.location = "/majors/" + e;
          }

          render() {
              if(this.state.loading){
                    return loading()
                      
              }
            
            return (
              <div>
                
              <Table  style= {{width:'117%',left: '0%', top: '100%'}} >
               <thead class="table table-dark">
                 <tr>
                   <th>Name</th>
                   <th>Teacher</th>
                   <th>Credits</th>
                   <th>CRN</th>
                   <th>Time</th>
                   <th>Day</th>
                   <th>Building</th>
                   <th>Room</th>
                   <th>Capacity</th>
                   <th>Students</th>
                   
                 </tr>
               </thead>
               <tbody class="thead-light">
             {this.state.students.map((item, key) => {
               return (
              
         
                 <tr>
                   <th>{item.name}</th>
                   <th>{item.teacher}</th>
                   <th>{item.credits}</th>
                   <th>{item.crn}</th>
                   <th>{item.time}</th>
                   <th>{item.day}</th>
                   <th>{item.building}</th>
                   <th>{item.room}</th>
                   <th>{item.capacity}</th>
                   <th>{item.students}</th>
                 
                  
                  
                 
                 </tr>
              
           
               
                     
                      
                   
                 
                 
               );
             })}
                 </tbody>
             </Table>
             </div>
       
            );
          }
        }