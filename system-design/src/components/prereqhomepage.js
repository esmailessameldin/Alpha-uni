import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';
import {  Image, List } from 'semantic-ui-react'
import { left } from '@popperjs/core';
export default class CreateExercise extends Component {
 constructor(props) {
        super(props);
    this.onClick=this.onClick.bind(this)
    this.add=this.add.bind(this)
    
        this.state = {
           list:[],
           loading:true,
           add:false
        }
      }



componentDidMount(){

    axios.post('http://localhost:5000/section/pre')
    .then(res=>{
       
         this.state.list=res.data
console.log(this.state.list)
this.state.loading=false
console.log(this.state.loading)
this.forceUpdate()
    })
}


onClick(e){

    axios.post('http://localhost:5000/section/predelete/'+e)
    .then(alert("Prerequisites for the course "+e+" Deleted !"))
}
add(e){
    e.preventDefault();
window.location='/prereqadd'

}






render() {
if(this.state.loading){
    console.log(this.state.loading)
      return( <ul>Loading.... </ul>)
}
  
    return (
      <div>
     
              
           
     <Table  style= {{width:'40%',left: '26%', top: '10%',position:'absolute'}} >
                    <thead class="table table-dark">
                      <tr>
                        <th>Course</th>
                        <th>Prerequisites</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody class="thead-light">
                  {this.state.list.map((item, key) => {
                    return (
                   
              
                      <tr>
                       
                        <th>{item.name}</th>
                       <th> {item.dependencies.map((item,key)=>{
                                return(

                                <li>{item} </li>
                                )

                       })}</th>
                       <th><button onClick={()=>this.onClick(item.name)} >Delete</button>   </th>
                      </tr>
                   
                
                    
                          
                           
                        
                      
                      
                    );
                  })}
                      </tbody>
                  </Table>
    

           <button onClick={this.add}   style={{left:'67%',position:'absolute'}} >Add a Prerequisite  </button>

    </div>
    

  
    
    )




}
  }
