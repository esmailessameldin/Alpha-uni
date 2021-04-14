import React, { Component } from "react";
import axios from 'axios';
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

axios.get('http://localhost:5000/admins/viewallcourses').then(
    res=>{
        console.log(res.data)
        for(let i=0;i<res.data.length;i++)
        if(res.data[i].sections.length>0){
            for(let j=0;j<res.data[i].sections.length;j++)
       this.state. students.push(res.data[i].sections[j])}
        

    }
) 
setTimeout(function() { 
    console.log(this.state.students)
   
    this.setState({
            
            
        loading:false
    })
    console.log(this.state.loading)
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
                <ul>
                  {this.state.students.map((item, key) => {
                    return (
                        
                    <div>
                        
                          <h5 key={key} style={{ color: 'navy' }}>{item.name}</h5>
                       
                          
                           <li> Time: {item.time}</li>
                           <li>  Day: {item.day}</li>
                           <li> Capacity: {item.capacity}</li>
                           <li>Credits: {item.credits}</li>
                           <li>Teacher: {item.teacher}</li>
                           <li> Students: {item.students}</li>
                           <li>Building:  {item.building}</li>
                           <li> Room: {item.room}</li>
                           
                           <ul style={{color:'white'}}>     end    </ul>
                        </div>
                    );
                  })}
                </ul>
              </div>
            );
          }
        }