import React, { Component } from 'react';
import axios from 'axios';
import {Form} from 'semantic-ui-react';
import {ResponsiveEmbed, Table}from 'react-bootstrap'
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.calculatecredits=this.calculatecredits.bind(this)
    
    this.state = {
        years:[],
        courses:[],
        name:'',
        id:'',
        day:'',
        CRN:[]
      }
   
  }
  
        




  componentDidMount() {
    console.log(this.props.match.params.id)
    axios.get('/api/users/transcript/'+this.props.match.params.id)
      .then(response => {
        console.log(response.data)
       
        for (let i = 0; i < response.data.length; i++) { 
        this.state.years.push(response.data[i])
        this.setState({
          id:response.data[0].year
        })
        };
      
           console.log(this.state.years)
          
      })
      .catch((error) => {
        console.log(error);
      })

  }

calculatecredits(e){

  var x=0
      for(let i=0;i<e.length;i++){
        if(e[i].class_one){
        x=x+4
        }
        if(e[i].class_two){
          x=x+4
          }
          if(e[i].class_three){
            x=x+4
            }
            if(e[i].class_four){
              x=x+4
              }


      }
      return x;



}

  

 
render() {
  
    return (
     
<div>



       <Table striped bordered hover style = {{width:"135vh",position: 'absolute', left: '50%',
      transform: 'translate(-40%, -1%)'}}>
       
        <thead>
        <tr>
          <th>Semester</th>
          
          <th>
          Grades
                </th>
         
          
        </tr>
      </thead>
      {this.state.years.map((item, key) => {
                    return (
                      <tr>
                      <th key={key}>
                        {item.year}
                        
                      </th> 

                      <th><li key={key}>
                        {item.class_one}
                        
                      </li>
                      <li key={key}>
                        {item.class_two}
                        
                      </li>
                
                      <li key={key}>
                        {item.class_three}
                        
                      </li>
                      <li key={key}>
                        {item.class_four}
                        
                      </li>
                      
                      </th>
                      
                      </tr>
                    );
                  })}
   
                </Table>
                  
                <ul>You need 128 credits to Graduate </ul>
                <ul>You have {this.calculatecredits(this.state.years) } credits completed</ul>
                <ul>You still need {128-this.calculatecredits(this.state.years)} credits</ul>

              </div>


  
    
    )
  }
}