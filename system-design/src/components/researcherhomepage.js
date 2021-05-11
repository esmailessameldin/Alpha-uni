import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react';
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
    this.handleClickAudit=this.handleClickAudit.bind(this)
    this.handleClickDegree=this.handleClickDegree.bind(this)
    this.handleClickCalendar=this.handleClickCalendar.bind(this)
    this.handeClickAdd=this.handeClickAdd.bind(this)
    this.handClickLogout = this.handClickLogout.bind(this);
    this.onClick = this. onClick.bind(this);
    this.handleClickTranscript=this.handleClickTranscript.bind(this)
    this.state = {
      name: '',
      email: '',
      id: '',
      major:'',
      birthday:'',
      address:'',
      year:'',
      status:'',
      array2:[],
      array7:[],
      array6:[],
      array5:[],
      array4:[],
      array3:[],
      loading:true
     
    }
  }
  handleClickTranscript(e){
e.preventDefault();
window.location='/transcript/'+this.props.match.params.id
  }
  handeClickAdd(e){
    e.preventDefault();
    window.location='/adddrop/'+this.props.match.params.id
  }

  handleClickCalendar(e){
    e.preventDefault();
 window.location='/calendar/'+this.props.match.params.id

  }
  handleClickDegree(e){
    e.preventDefault(); 

  }

  handleClickAudit(e){
    e.preventDefault();
    window.location='/audit/'+this.state.major+","+this.state.minor
  }
   handClickLogout(e){
    e.preventDefault();
    window.location='/'
   }
   onClick(e){
    e.preventDefault();
    window.location='/departments'

   }
  componentDidMount() {
    console.log(this.props.match.params.id)
    if(this.props.match.params.id==='100')
    window.location='/passerror'
    const user={
        id:this.props.match.params.id
    }
    axios.post('http://localhost:5000/users/getinfo',user)
      .then(response => {
        console.log(response)
          this.setState({
            
            name: response.data.name,
            email:response.data.email,
            id:response.data.id,
          })
          const user={
name:"History Department"
                                
          }
        axios.post('http://localhost:5000/section/getnumber',user)
        .then( async res=>{
       this.setState({
           array:res.data
       })
        console.log(this.state.array)
        })
        
         const user2={
name:"Math and Computer Science Department"
                                
          }
        axios.post('http://localhost:5000/section/getnumber',user2)
        .then( async res=>{
       this.setState({
           array2:res.data
       })
       
        })
           

         const user3={
name:"Health and Science Department"
                                
          }
        axios.post('http://localhost:5000/section/getnumber',user3)
        .then( async res=>{
       this.setState({
           array3:res.data
       })
        console.log(this.state.array)
        })

         const user4={
name:"Language and General Education Department"
                                
          }
        axios.post('http://localhost:5000/section/getnumber',user4)
        .then( async res=>{
       this.setState({
           array4:res.data
       })
      
        })

         const user5={
name:"Business Department"
                                
          }
        axios.post('http://localhost:5000/section/getnumber',user5)
        .then( async res=>{
       this.setState({
           array5:res.data
       })
      
        })
         const user6={
name:"Education Department"
                                
          }
        axios.post('http://localhost:5000/section/getnumber',user6)
        .then( async res=>{
       this.setState({
           array6:res.data
       })
        console.log(this.state.array)
        }) 
        const user7={
name:"Liberal Arts"
                                
          }
        axios.post('http://localhost:5000/section/getnumber',user7)
        .then( async res=>{
       this.setState({
           array7:res.data,
           
       })
       
     setTimeout(()=>{
      console.log(this.state.array)
      this.setState({
        loading:false

     })
   }, 25000);
      
        })
        
      }) 

      .catch((error) => {
        console.log(this.props.match.params.id);
      })

  }



  

 
render() {if(this.state.loading){

  return(
    <ul>loading data</ul>
  )
}
return (
      <div handClickLogout={this.handClickLogout}>
    
               <ul>  </ul>
               
               <Table class="table table-dark" size="sm"style = {{width:"40%",position: 'absolute', left: '50%', top: '30%',
      transform: 'translate(-50%, -50%)'}}>
      <thead class="table table-dark">
        <tr>
          <th>Department</th>
          <th>{this.state.array[0].name}</th>
          
          
        </tr>
        <tr><th>Number of Students</th>
          <th>{this.state.array[0].students}</th></tr>
      </thead>
      <tbody class="table table-dark">
        <tr>
          <th>Major</th>
          <th>Number of Students</th>
        </tr>
        
        {this.state.array[1].map((item,key)=>{
         return(
          <tr>
          <th> {item.name} </th>
          <th>{item.students} </th>
          </tr>

         )
                

        })}
      
      </tbody>
    </Table>
               <ul>  </ul>

                  
               <Table class="table table-dark" size="sm"style = {{width:"40%",position: 'absolute', left: '50%', top: '80%',
      transform: 'translate(-50%, -50%)'}}>
      <thead class="table table-dark">
        <tr>
          <th>Department</th>
          <th>{this.state.array2[0].name}</th>
          
          
        </tr>
        <tr><th>Number of Students</th>
          <th>{this.state.array2[0].students}</th></tr>
      </thead>
      <tbody class="table table-dark">
        <tr>
          <th>Major</th>
          <th>Number of Students</th>
        </tr>
        
        {this.state.array2[1].map((item,key)=>{
         return(
          <tr>
          <th> {item.name} </th>
          <th>{item.students} </th>
          </tr>

         )
                

        })}
      
      </tbody>
    </Table>
               <ul>  </ul>

                  
               <Table class="table table-dark" size="sm"style = {{width:"40%",position: 'absolute', left: '50%', top: '150%',
      transform: 'translate(-50%, -50%)'}}>
      <thead class="table table-dark">
        <tr>
          <th>Department</th>
          <th>{this.state.array3[0].name}</th>
          
          
        </tr>
        <tr><th>Number of Students</th>
          <th>{this.state.array3[0].students}</th></tr>
      </thead>
      <tbody class="table table-dark">
        <tr>
          <th>Major</th>
          <th>Number of Students</th>
        </tr>
        
        {this.state.array3[1].map((item,key)=>{
         return(
          <tr>
          <th> {item.name} </th>
          <th>{item.students} </th>
          </tr>

         )
                

        })}
      
      </tbody>
    </Table>
               <ul>  </ul>
                  
               <Table class="table table-dark" size="sm"style = {{width:"40%",position: 'absolute', left: '50%', top: '200%',
      transform: 'translate(-50%, -50%)'}}>
      <thead class="table table-dark">
        <tr>
          <th>Department</th>
          <th>{this.state.array4[0].name}</th>
          
          
        </tr>
        <tr><th>Number of Students</th>
          <th>{this.state.array4[0].students}</th></tr>
      </thead>
      <tbody class="table table-dark">
        <tr>
          <th>Major</th>
          <th>Number of Students</th>
        </tr>
        
        {this.state.array4[1].map((item,key)=>{
         return(
          <tr>
          <th> {item.name} </th>
          <th>{item.students} </th>
          </tr>

         )
                

        })}
      
      </tbody>
    </Table>
               <ul>  </ul>
                  
               <Table class="table table-dark" size="sm"style = {{width:"40%",position: 'absolute', left: '50%', top: '250%',
      transform: 'translate(-50%, -50%)'}}>
      <thead class="table table-dark">
        <tr>
          <th>Department</th>
          <th>{this.state.array5[0].name}</th>
          
          
        </tr>
        <tr><th>Number of Students</th>
          <th>{this.state.array5[0].students}</th></tr>
      </thead>
      <tbody class="table table-dark">
        <tr>
          <th>Major</th>
          <th>Number of Students</th>
        </tr>
        
        {this.state.array5[1].map((item,key)=>{
         return(
          <tr>
          <th> {item.name} </th>
          <th>{item.students} </th>
          </tr>

         )
                

        })}
      
      </tbody>
    </Table>
               <ul>  </ul>
                  
               <Table class="table table-dark" size="sm"style = {{width:"40%",position: 'absolute', left: '50%', top: '300%',
      transform: 'translate(-50%, -50%)'}}>
      <thead class="table table-dark">
        <tr>
          <th>Department</th>
          <th>{this.state.array6[0].name}</th>
          
          
        </tr>
        <tr><th>Number of Students</th>
          <th>{this.state.array6[0].students}</th></tr>
      </thead>
      <tbody class="table table-dark">
        <tr>
          <th>Major</th>
          <th>Number of Students</th>
        </tr>
        
        {this.state.array6[1].map((item,key)=>{
         return(
          <tr>
          <th> {item.name} </th>
          <th>{item.students} </th>
          </tr>

         )
                

        })}
      
      </tbody>
    </Table>
               <ul>  </ul>
                  
               <Table class="table table-dark" size="sm"style = {{width:"40%",position: 'absolute', left: '50%', top: '350%',
      transform: 'translate(-50%, -50%)'}}>
      <thead class="table table-dark">
        <tr>
          <th>Department</th>
          <th>{this.state.array7[0].name}</th>
          
          
        </tr>
        <tr><th>Number of Students</th>
          <th>{this.state.array7[0].students}</th></tr>
      </thead>
      <tbody class="table table-dark">
        <tr>
          <th>Major</th>
          <th>Number of Students</th>
        </tr>
        
        {this.state.array7[1].map((item,key)=>{
         return(
          <tr>
          <th> {item.name} </th>
          <th>{item.students} </th>
          </tr>

         )
                

        })}
      
      </tbody>
    </Table>
               <ul>  </ul>

          
   
    </div>
    

  
    
    )
  }
}