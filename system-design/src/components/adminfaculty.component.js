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

axios.get('http://localhost:5000/admins/viewallfaculty').then(
    res=>{
        console.log(res.data)
        this.setState({
            students:res.data,
            loading:false
        })

    }
) 
setTimeout(function() { 
    console.log(this.state.students)
    console.log(this.state.loading)
}.bind(this), 20000)
    

 
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
                         

                           <li> ID: {item.id}</li>
                           <li>  Email: {item.email}</li>
                           <li> Birthday: {item.birthday}</li>
                           <li>Address: {item.address}</li>
                           <li> Office_Building: {item.office_building}</li>
                           <li>Office_Room_Number:  {item.office_room_number}</li>
                           <li> Class: {item.class}</li>
                           <li> Teacher: {item.teacher}</li>
                           <li> CRN: {item.crn}</li>
                           <ul style={{color:'white'}}>     end    </ul>
                        </div>
                    );
                  })}
                </ul>
              </div>
            );
          }
        }