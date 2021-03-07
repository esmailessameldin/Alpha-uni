import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
const LoaderExampleIndeterminate = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader indeterminate>Preparing Files</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.sortLists=this.sortLists.bind(this);
    this.monday=this.monday.bind(this)
    this.state = {
      loading: true,
        listA:[],
        listB:[],
        listC:[],
        listD:[],
        listE:[],
        name:'asdasdas',
        day:'',
        time:'',
     
    }
  }

  async componentDidMount() {
    console.log(this.props.match.params.id)
    if(this.props.match.params.id==='100')
    window.location='/passerror'
     axios.get('http://localhost:5000/users/'+this.props.match.params.id)
      .then(async response => {
        console.log(response.data.sections)
    
          
          this.setState({
            listA:response.data.sections.map(sections => sections)
          })
          console.log(this.state.listA) 
          this.setState({
            loading:false

         })
         
          
      })
      .catch((error) => {
      
      })
    
  }

 sortLists(x){
    console.log(x[0])
    if(this.state.listA[0]){ 
           this.state.listB.push(this.state.listA[0].name,this.state.listA[0].day,this.state.listA[0].time)

     }
     if(this.state.listA[1]){ 
        this.state.listC.push(this.state.listA[1].name,this.state.listA[1].day,this.state.listA[1].time)

  }
  if(this.state.listA[2]){ 
    this.state.listD.push(this.state.listA[2].name,this.state.listA[2].day,this.state.listA[2].time)

}
if(this.state.listA[3]){ 
    this.state.listE.push(this.state.listA[3].name,this.state.listA[3].day,this.state.listA[3].time)

} 

console.log(this.state.listB.length,this.state.listC[0],this.state.listD,this.state.listE)
}
 monday(e,a){
   
 for(var i=0;i<this.state.listA.length;i++){
if(this.state.listA[i].time===e && this.state.listA[i].day===a ){
  console.log("success")
  return(this.state.listA[i].name)
                                            
}else{
  
}
 }

    
}
 

 
render() {
  if (this.state.loading) {
    return LoaderExampleIndeterminate() ;
}
     return(
    <div>
    <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'}}>
    <thead>
      <tr>
        <th>Day</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>8:00AM - 9:30AM</td>
        <td> {this.monday("8:00AM - 9:30AM","MW") || "Free"}</td>
        <td> {this.monday("8:00AM - 9:30AM","TR")|| "Free"} </td>
        <td>{this.monday("8:00AM - 9:30AM","MW")|| "Free"} </td>
        <td> {this.monday("8:00AM - 9:30AM","TR")|| "Free"}</td>
        <td> Free </td>
        
      
      </tr>
      <tr>
        <td>9:40AM - 11:10AM</td>
        <td> {this.monday("9:40AM - 11:10AM","MW")|| "Free"} </td>
        <td> {this.monday("9:40AM - 11:10AM","TR")|| "Free"} </td>
        <td> {this.monday("9:40AM - 11:10AM","MW")|| "Free"} </td>
        <td> {this.monday("9:40AM - 11:10AM","TR")|| "Free"} </td>
        <td>Free </td>

      
      </tr>
      <tr>
        <td>11:20AM - 12:50PM</td>
        <td> {this.monday("11:20AM - 12:50PM","MW")|| "Free"}</td>
        <td> {this.monday("11:20AM - 12:50PM","TR")|| "Free"} </td>
        <td>{this.monday("11:20AM - 12:50PM","MW")|| "Free"} </td>
        <td> {this.monday("11:20AM - 12:50PM","TR")|| "Free"}</td>
        <td>Free </td>
      
      </tr>
      <tr>
        <td>1:00PM - 2:30PM</td>
        <td> {this.monday("1:00PM - 2:30PM","MW")|| "Free"}</td>
        <td> {this.monday("1:00PM - 2:30PM","TR")|| "Free"} </td>
        <td> {this.monday("1:00PM - 2:30PM","MW")|| "Free"} </td>
        <td> {this.monday("1:00PM - 2:30PM","TR")|| "Free"} </td>
        <td>Free </td>
      
      </tr>
      <tr>
        <td>2:40PM - 4:10PM</td>
        <td> {this.monday("2:40PM - 4:10PM","MW")|| "Free"} </td>
        <td> {this.monday("2:40PM - 4:10PM","TR")|| "Free"} </td>
        <td> {this.monday("2:40PM - 4:10PM","MW")|| "Free"} </td>
        <td> {this.monday("2:40PM - 4:10PM","TR")|| "Free"}</td>
        <td>Free </td>
      
      </tr>
      <tr>
        <td>4:20PM - 5:50PM</td>
        <td> {this.monday("4:20PM - 5:50PM","MW")|| "Free"} </td>
        <td> {this.monday("4:20PM - 5:50PM","TR")|| "Free"} </td>
        <td> {this.monday("4:20PM - 5:50PM","MW")|| "Free"}</td>
        <td>{this.monday("4:20PM - 5:50PM","TR")|| "Free"} </td>
        <td> Free</td>
      
      </tr>
      <tr>
        <td>6:00PM - 7:30PM</td>
        <td> {this.monday("6:00PM - 7:30PM","MW")|| "Free"}</td>
        <td> {this.monday("6:00PM - 7:30PM","TR")|| "Free"}</td>
        <td>{this.monday("6:00PM - 7:30PM","MW")|| "Free"} </td>
        <td>{this.monday("6:00PM - 7:30PM","TR")|| "Free"} </td>
        <td>Free </td>
      
      </tr>
      <tr>
        <td>7:40PM - 9:10PM</td>
        <td> {this.monday("7:40PM - 9:10PM","MW")|| "Free"} </td>
        <td> {this.monday("7:40PM - 9:10PM","TR")|| "Free"} </td>
        <td>{this.monday("7:40PM - 9:10PM","MW")|| "Free"} </td>
        <td> {this.monday("7:40PM - 9:10PM","TR")|| "Free"}</td>
        <td>Free </td>
      
      </tr>
      
     
    </tbody>
  </Table>
            
             
  




  </div>
  )
      }}