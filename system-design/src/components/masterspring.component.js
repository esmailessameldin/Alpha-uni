import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
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
console.log(res.data[0].name)

this.setState({
students:res.data
})

}
) 
setTimeout(function() { 
console.log(this.state.students)

this.setState({
    
    
loading:false
})
console.log(this.state.loading)
console.log(this.state.students[0].name)
}.bind(this), 10000)



}





  handleClick(e) {
    console.log(e);
    window.location = "/majors/" + e;
  }

  
 
render() {
  if(this.state.loading){
    return loading()
      
}else return (
      <div><h1 style={{ color: 'navy',position: 'absolute', left: '32%' }}>Master Schedule Spring 2021</h1>
      <h2 style={{ color: 'navy', position: 'absolute', top: '20%', left: '28%', btm: '200%' }}>Priority Registration for Continuing Students:</h2>
      <h4 style={{ color: 'black', position: 'absolute', top: '50%', left: '5%', btm: '200%' }}>Review your academic record using Degree Works. Continuing students whose current academic standing is probation must seek academic advising. At or after your priority date, register on the WEB. Computers with internet access are available in the Library.  </h4>
       {
  
    <div handClickLogout={this.handClickLogout}>
    <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '39%',
    transform: 'translate(-50%, -50%)'}}>
    <thead>
      <tr>
        <th>Seniors</th>
        <th>Apr 5 2021</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Juniors</td>
        <td>Apr 8 2021</td>
      
      </tr>
      <tr>
        <td>Sophomores</td>
        <td>Apr 12 2021</td>
      
      </tr>
      <tr>
        <td>Freshman</td>
        <td>Apr 15 2021</td>
      
      </tr>
     
    </tbody>
  </Table>
    
  <h2 style={{ color: 'navy', position: 'absolute', top: '60%', left: '43%', btm: '200%'}}>Class Periods:</h2>  
  
  <h6 style={{ color: 'black', position: 'absolute', top: '67%', left: '45%', btm: '200%'}}>
  <List bulleted>
    <List.Item>- 8:00AM - 9:30AM</List.Item>
    <List.Item>- 9:40AM - 11:10AM</List.Item>
    <List.Item>- 11:20AM - 12:50PM</List.Item>
        <List.Item>- 1:00PM - 2:30PM</List.Item>
        <List.Item>- 2:40PM - 4:10PM</List.Item>
    <List.Item>- 4:20PM - 5:50PM</List.Item>
    <List.Item>- 6:00PM - 7:30PM</List.Item>
    <List.Item>- 7:40PM - 9:10PM</List.Item>
  </List></h6>

  <h2 style={{ color: 'navy', position: 'absolute', top: '90%', left: '42%', btm: '200%'}}>Days of the Week:</h2>  
  <h6 style={{ color: 'black', position: 'absolute', top: '95%', left: '35%', btm: '200%'}}>The letters for the seven days of the week are: M, T, W, R, F, S, and U.</h6>
  <h2 style={{ color: 'navy', position: 'absolute', top: '100%', left: '43%', btm: '200%'}}>Course Codes:</h2>  
  
  <h6 style={{ color: 'black', position: 'absolute', top: '105%', left: '10%', btm: '200%'}}>The course coding system consists of a department letter indicator, a numerical indicator, and a section indicator as follows: Department indicators (consists of the initials that identify the department offering the course):</h6>
  <h6 style={{ color: 'black', position: 'absolute', top: '110%', left: '45%', btm: '200%'}}><List bulleted>
    <List.Item>- AS American Studies</List.Item>
    <List.Item>- BS Biological Sciences</List.Item>
    <List.Item>- BU School of Business</List.Item>
        <List.Item>- CL Community Learning </List.Item>
        <List.Item>- CP Chemistry and Physics </List.Item>
    <List.Item>- CR Criminology </List.Item>
    <List.Item>- CS Computer Science </List.Item>
    <List.Item>- ED School of Education </List.Item>
    <List.Item>- EL English SY Sociology</List.Item>
    <List.Item>- HI History and Philosophy </List.Item>
    <List.Item>- IR Industrial and Labor Relations</List.Item>
        <List.Item>- LI Liberal Studies</List.Item>
        <List.Item>- MA Mathematics</List.Item>
    <List.Item>- ML Modern Languages</List.Item>
    <List.Item>- PE Politics, Economics and Law</List.Item>
    <List.Item>- PH Public Health</List.Item>
    <List.Item>- PS Professional Studies</List.Item>
        <List.Item>- PY Psychology</List.Item>
    <List.Item>- VA Visual Arts</List.Item>
    <List.Item>- WS Women’s Studies</List.Item>
    
  </List></h6>   
  <h2 style={{ color: 'navy', position: 'absolute', top: '165%', left: '33%', btm: '200%'}}>College Policy on Academic Standing:</h2>  
  <h7 style={{ color: 'black', position: 'absolute', top: '175%', left: '2%', btm: '200%'}}>On the recommendation of the college faculty, the following policy on academic standing is in effect.  From the Spring 1992 semester onward, good academic standing will be determined by this policy.</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '180%', left: '2%', btm: '200%'}}>* Academic Standing Policy</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '185%', left: '2%', btm: '200%'}}>All students are expected to maintain good academic standing at the College.  Academic standing is determined by the student’s semester and cumulative grade point averages (the student’s overall academic performance while attending the College at Alpha University).</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '195%', left: '2%', btm: '200%'}}>* Minimum Grade-Point Average (GPA) Requirements</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '205%', left: '2%', btm: '200%'}}>Students must maintain minimum semester and cumulative grade point averages of at least 2.00 to remain in good academic standing.  Students who fail to obtain a minimum semester grade point average of 2.00 in any particular semester will be placed on academic probation, which is a warning that their good academic standing is in jeopardy. Students who are on probation twice in succession and have attempted at least 32 credits are subject to suspension or dismissal (described below) at the point at which their cumulative GPA Springs below 2.00.</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '220%', left: '2%', btm: '200%'}}>Probation: Minimum Semester GPA less than 2.00 or Minimum Cumulative GPA less than 2.00</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '230%', left: '2%', btm: '200%'}}>Criteria for Academic Probation, Suspension, Dismissal</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '240%', left: '2%', btm: '200%'}}>* Academic Probation applies automatically to students who fail for the first time to meet minimum GPA requirements in a given semester.  The student is placed on probation for the subsequent semester.  The student must meet all semester and cumulative minimum GPA requirements in order to be taken off probation.  A student on probation is ineligible to participate on College committees or intercollegiate athletics.  Academic probation, including any accompanying constraints upon a student’s activities, is intended as a support measure designed to encourage students to focus on their studies in order that they satisfy academic standards.</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '255%', left: '2%', btm: '200%'}}>* Academic Suspension applies only to students who have attempted a minimum of 32 credits.  Students are automatically suspended from the College if already on probation and they fail to meet the minimum semester and cumulative GPA requirements. The suspended student may not re-register until one semester has elapsed.  Financial Aid, however, is not guaranteed.</h7>

  <h7 style={{ color: 'navy', position: 'absolute', top: '265%', left: '2%', btm: '200%'}}>* Academic Dismissal applies automatically to those students who were previously suspended, have returned, and again fail to meet the minimum semester and cumulative GPA requirements.  These students may not apply for reentrance until two semesters have elapsed from the semester of their last registration at the College.</h7>

  <h7 style={{ color: 'black', position: 'absolute', top: '275%', left: '2%', btm: '200%'}}>It should be noted that individual degree programs may require a higher GPA for courses in the major (see section on each academic department included in the catalog).  Students are advised to consult with their advisers regarding specific department requirements.</h7> 
  <h2 style={{ color: 'navy', position: 'absolute', top: '285%', left: '45%', btm: '200%'}}>Master Class List:</h2>   
  <h6 style={{ color: 'black', position: 'absolute', top: '293%', left: '45%', btm: '200%'}}><List bulleted>
  
  </List></h6> 
  <div>
                
                <Table  style= {{position:'absolute',left: '0%', top: '300%'}} >
                 <thead class="table table-dark">
                   <tr>
                     <th>Name</th>
                     <th>Teacher</th>
                     <th>Credits</th>
                     <th>CRN</th>
                     <th>Time</th>
                     <th>Day</th>
                     <th>Building</th>
                     <th>Room</th>
                    
                    
                   </tr>
                 </thead>
                 <tbody class="thead-light">
               {this.state.students.map((item, key) => {
                 return (
                
           
                   <tr>
                     <th>{item.name}</th>
                     <th>{item.teacher}</th>
                     <th>{item.credits}</th>
                     <th>{item.crn}</th>
                     <th>{item.time}</th>
                     <th>{item.day}</th>
                     <th>{item.building}</th>
                     <th>{item.room}</th>
                   
                    
                   
                   </tr>
                
             
                 
                       
                        
                     
                   
                   
                 );
               })}
                   </tbody>
               </Table>
               </div>
         
     
      </div>
    
}</div> 
    
      
    )
  }
}
