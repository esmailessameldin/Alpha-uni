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
            this.smiteStudent=this.smiteStudent.bind(this);
            this.update=this.update.bind(this);
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
                <ul>
                  {this.state.students.map((item, key) => {
                    return (
                    <div>
                          <h5 key={key} style={{ color: 'navy' }}>{item.name}</h5>
                        
                            <li>
                           ID: {item.id} </li>
                           <li> Email: {item.email}</li>
                           <li>  Major: {item.major}</li>
                           <li> Birthday: {item.birthday}</li>
                           <li>Address: {item.address}</li>
                           <li> Year: {item.year}</li>
                           <li>Status:  {item.status}</li> 
                           <ul style={{color:'white'}}>     end    </ul>
                           <button type="button" style={{position: 'absolute', left: '5%'}} onClick={() => this.smiteStudent(item.id)}>
                         Delete User
                        </button>
                        <ul style={{color:'white'}}>     end    </ul>
                        <ul style={{color:'white'}}>     end    </ul>
                        <button type="button" style={{position: 'absolute', left: '5%'}} onClick={() => this.update(item.id)}>
                         Update User
                        </button>
                        <ul style={{color:'white'}}>     end    </ul>
                        <ul style={{color:'white'}}>     end    </ul>
                        <ul style={{color:'white'}}>     end    </ul>
                      
                        </div>
                    );
                  })}
                </ul>
              </div>
            );
          }
        }