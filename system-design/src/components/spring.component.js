import React, { Component } from 'react';
import axios from 'axios';
import {Table}from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react';

export default class CreateExercise extends Component {
 
render() {
  
    return (
      <div>
      <Table striped bordered hover size="sm"style = {{width:"100vh",position: 'absolute', left: '50%', top: '75%',
      transform: 'translate(-50%, -50%)'}}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Academic event </th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jan 25 2021 (All day) to Feb 1 2021 (All day)</td>
          <td>Add/Drop (no fee) / Late Registration ($50 fee) on the Web</td>
        
        </tr>
        <tr>
          <td>Jan 25 2021 (All day)</td>
          <td>First Day of Classes - All Remote</td>
        
        </tr>
        <tr>
          <td>Feb 8 2021 (All day)</td>
          <td>In-Person Course Sessions Begin</td>
        
        </tr>
        <tr>
          <td>Feb 15 2021 (All day)</td>
          <td>Presidents Day – no classes</td>
        
        </tr>
        <tr>
          <td>Mar 1 2021 (All day)</td>
          <td>Applications for Graduation (Registrar’s Office) due</td>
        
        </tr>
        <tr>
          <td>Mar 8 2021 (All day)</td>
          <td>Advising begins for Fall 2021 registration</td>
        
        </tr>
        <tr>
          <td>Mar 8 2021 (All day) to Mar 13 2021 (All day)</td>
          <td>Mid-term Week</td>
        
        </tr>
        <tr>
          <td>Mar 22 2021 (All day)</td>
          <td>Mid-term advisory grades due</td>
        
        </tr>
        <tr>
          <td>Mar 27 2021 (All day) to Apr 2 2021 (All day)</td>
          <td>Wellness Week 2021</td>
        
        </tr>
        <tr>
          <td>Apr 5 2021 (All day)</td>
          <td>Fall 2021 registration for Seniors on the Web</td>
        
        </tr>
        <tr>
          <td>Apr 8 2021 (All day)</td>
          <td>Fall 2021 registration for Juniors on the Web</td>
        
        </tr>
        <tr>
          <td>Apr 12 2021 (All day)</td>
          <td>Fall 2021 registration for Sophomores on the Web</td>
        
        </tr>
        <tr>
          <td>Apr 15 2021 (All day)</td>
          <td>Fall 2021 registration for First-Years on the Web</td>
        
        </tr>
        <tr>
          <td>Apr 16 2021 (All day)</td>
          <td>Continuing Registration for Fall 2021 for all students</td>
        
        </tr>
        <tr>
          <td>Apr 29 2021 (All day)</td>
          <td>Honors Convocation</td>
        
        </tr>
        <tr>
          <td>May 11 2021 (All day) to May 12 2021 (All day)</td>
          <td>Study/Make-Up Days</td>
        
        </tr>
        <tr>
          <td>May 13 2021 (All day) to May 19 2021 (All day)</td>
          <td>Final Exams</td>
        
        </tr>
        <tr>
          <td>May 19 2021 (All day)</td>
          <td>Spring Semester Ends</td>
        
        </tr>
        <tr>
          <td>May 23 2021 (All day)</td>
          <td>Commencement</td>
        
        </tr>
        
     
       
       
       
       
      </tbody>
    </Table>
  
    </div>
    

  
    
    )
  }
}