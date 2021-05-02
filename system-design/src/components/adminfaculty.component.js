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
            this.smiteFaculty=this.smiteFaculty.bind(this);
            this.updatefaculty=this.updatefaculty.bind(this)
            this.state = {
              students: [],
              loading:true
            };
          }
 
updatefaculty(e){
  let studentid=e
  console.log(studentid)

  window.location='/updatefaculty/'+studentid
}




          smiteFaculty(e){
            console.log(e)
            let studentid=e
           console.log(studentid)
           axios({
            method: 'DELETE',
            url: 'http://localhost:5000/admins/smitefaculty',
            data: {
              id:studentid
            }
          }).then(alert("Faculty Member "+studentid+" deleted"))
          
          
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
                
                   <Table  style= {{ width:'100%',left: '0%', top: '100%'}} >
                    <thead class="table table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Birthday</th>
                        <th>Office building</th>
                        <th>Office room number</th>
                        <th>Class</th>
                        <th>Enrolled</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody class="thead-light">
                  {this.state.students.map((item, key) => {
                    return (
                   
              
                      <tr>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.email}</th>
                        <th>{item.address}</th>
                        <th>{item.birthday}</th>
                        <th>{item.office_building}</th>
                        <th>{item.office_room_number}</th>
                        <th>{item.class}</th>
                        <th>{item.enrolled.map((item, key) => {
            
            
            
                    return (<form>
                      <li key={key}>
                        {item}
                        
                      </li>
                     
                      </form>
                    );
                     })}</th>
                        <th> <button style= {{}} type="button"  onClick={() => this.updatefaculty(item.id)}>
                         Update User
                        </button></th>
                        <th> <button  style= {{}}   type="button"  onClick={() => this.smiteFaculty(item.id)}>
                         Delete User
                        </button>
                       </th>
                       
                       
                      
                      </tr>
                   
                
                    
                          
                           
                        
                      
                      
                    );
                  })}
                      </tbody>
                  </Table>
                  </div>
            
            );
          }
        }