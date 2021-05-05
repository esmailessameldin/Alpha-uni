import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import {Table}from 'react-bootstrap'
import axios from 'axios';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onchangename=this.onchangename.bind(this)
    this.deleteclass=this.deleteclass.bind(this)
    this.addsection=this.addsection.bind(this)
    

    this.state = { 
    name:'',
    time:'',
    day:'',
    capacity:20,
    credits: 4,
    students:0,
    building:'',
    room:0,
    teacher:'',
    crn:'',
    array:[],
    exists:false,
    search:false

    }
  }
  
 
  
 
  async onchangename(e){
    await  this.setState({

        name:e.target.value
      })
console.log(this.state.name)

  }

deleteclass(e){
e.preventDefault()
var result = window.confirm("Are you sure you want to delete this class with it's sections ?");
if(result){
    const newuser={
        name:this.state.name
    }
    axios.post('http://localhost:5000/classes/delete',newuser)
    .then(alert("The class and all of it's sections have been deleted."))
}else{
    alert("The class has not been deleted.")
}
console.log(result)
}


 async search(e){
      e.preventDefault()
      const user = {
        name:this.state.name,
      }
      console.log(user)
axios.post('http://localhost:5000/classes/findbyname',user)
.then( async res=>{
    console.log(res.data)
    if(res.data==="Class does not exist.Please try again."){
alert(res.data)
return  
    }
 await this.setState({
   name:res.data.name,
   major:res.data.major,
   id:res.data.id,
   teacher:res.data.teacher
})
await this.setState({
    search:true
})


})

  }
 addsection(e){
     e.preventDefault()
     window.location='/addsection/'+this.state.name+","+this.state.teacher
 }
  onSubmit(e) {
    e.preventDefault();
    this.state.array=this.props.match.params.name.split(",")
const test ={
      name:this.state.array[0],
    teacher:this.state.array[1],
    day:this.state.day,
    time:this.state.time,
    building:this.state.building,
    room:this.state.room,
    crn:this.state.crn
}
console.log(test)
axios.post('http://localhost:5000/admins/addsections',test)
.then(res=>{
alert(res.data)

})


  }
render() {
    if(!this.state.search){
return(
<form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Enter class name: </label>
            <input  type="text"
                required
                value={this.state.name}
                onChange={this.onchangename}
                className="form-control"
               
                />
          </div>
         
            <button type="button" style={{position: 'absolute', left: '46%', top: '60%'}} onClick={this.search}>
     Search classes
     </button>
  
        </form>









    )

    }
    return (<div>
        <Table  style= {{width:"80%",position:'absolute',left:'10%', top: '10%'}} >
               <thead class="table table-dark">
                 <tr>
                   <th>Name</th>
                   <th>Major</th>
                 </tr>
               </thead>
               <tbody class="thead-light">
                   <tr>
           <th> {this.state.name}    </th>
           <th>{this.state.major}</th>  
           </tr>
                 </tbody>
             </Table>
             <button type="button" style={{position: 'absolute', left: '51%', top: '60%'}} onClick={this.deleteclass }>
     Delete
     </button>   <button type="button" style={{position: 'absolute', left: '39%', top: '60%'}} onClick={this.addsection} >
     Add Section
     </button>
             </div>
    )
  }
}