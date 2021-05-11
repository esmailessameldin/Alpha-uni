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
        export default class students extends Component {
            
          constructor(props) {
            super(props);
            this.smiteStudent=this.smiteStudent.bind(this);
            this.update=this.update.bind(this);
            this.transcript=this.transcript.bind(this);
            this.schedule=this.schedule.bind(this);
            this.audit=this.audit.bind(this);
            this.state = {
              students: [],
              loading:true,
              id:''
            };
          }
          editStudent(e){
            e.preventdefault()
            window.location='/updatestudent/'+this.props.match.params.id
          }
smiteStudent(e){
  console.log(e)
  let studentid=e
 console.log(studentid)
 axios({
  method: 'DELETE',
  url: 'http://localhost:5000/admins/smitestudent',
  data: {
    id:studentid
  }
}).then(alert("user "+studentid+" deleted"))


}
update(e){console.log(e)
  let studentid=e
 console.log(studentid)
 window.location="/studentupdate/"+studentid
  
}
transcript(e){
 
  window.location='/transcript/'+e
}
schedule(e){

  window.location='/calendar/'+e
}
audit(e){
axios.get('http://localhost:5000/users/'+e).then(res=>{
window.location='/audit/'+res.data.major+","+res.data.minor

})


}
componentDidMount(){

axios.get('http://localhost:5000/admins/viewallstudents').then(
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





      

          render() {
              if(this.state.loading){
                    return loading()
                      
              }
            
            return (
              <div>
                
                   <Table  style= {{width:'116%',left: '0%', top: '100%'}} >
                    <thead class="table table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Major</th>
                        <th>Minor</th>
                        <th>Birthday</th>
                        <th>Address</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Hold</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody class="thead-light">
                  {this.state.students.map((item, key) => {
                    if(!item.hold){
                      var h="Account clear"
                    }else{
                      var h=item.holdmessage
                    }
                    return (
                   
              
                      <tr>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.email}</th>
                        <th>{item.major}</th>
                        <th>{item.minor}</th>
                        <th>{item.birthday}</th>
                        <th>{item.address}</th>
                        <th>{item.year}</th>
                        <th>{item.status}</th>
                        <th>{h}</th>
                        <th> <button style= {{}} type="button"  onClick={() => this.update(item.id)}>
                         Update User
                        </button></th>
                        <th> <button  style= {{}}   type="button"  onClick={() => this.smiteStudent(item.id)}>
                         Delete User
                        </button>
                       </th>
                       <th><button  style= {{}}   type="button"  onClick={() => this.transcript(item.id)}>
                       View Transcript
                        </button> </th>
                        <th><button  style= {{}}   type="button"  onClick={() => this.audit(item.id)}>
                       View Audit
                        </button> </th>
                        <th><button  style= {{}}   type="button"  onClick={() => this.schedule(item.id)}>
                       View Schedule
                        </button> </th>
                       
                       
                      
                      </tr>
                   
                
                    
                          
                           
                        
                      
                      
                    );
                  })}
                      </tbody>
                  </Table>
                  </div>
            
            );
          }
        }