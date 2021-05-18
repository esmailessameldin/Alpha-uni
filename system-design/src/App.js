import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import login from  "./components/homepage.component";
import Navbar from "./components/navbar.component"
import classes from "./components/classes.component"
import studentscreen from "./components/student.component"
import majors from "./components/majors.component"
import sections from "./components/sections.components"
import passerror from "./components/passerror.component"
import calendar from "./components/calendar.component"
import faculty from "./components/faculty.component"
import calendar2 from "./components/calender2.component"
import mark2 from "./components/addnext.components"
import facultyhome from "./components/facultyhome.component"
import spring from "./components/spring.component"
import admin from"./components/adminlogin.component"
import adminhome from "./components/adminhome.component"
import audit from "./components/audit.component"
import grade from "./components/grading.components"
import hold from "./components/holds.components"
import prereq from "./components/prereqhomepage"
import masterspring from "./components/masterspring.component"
import updatefaculty from "./components/updatefaculty.component"
import masterfall from "./components/masterfall.component"
import register from "./components/register.component"
import mark from "./components/add.component"
import department from"./components/departments.component"
import newsections from "./components/newsemsterclasses.component"
import addfaculty from "./components/addfaculty.component"
import addsecondsection from "./components/addsecondsection"
import addstudent from "./components/addstudent.components"
import adminclasses from "./components/adminclasses.components"
import studentupdate from "./components/studentupdate.component"
import gradescreen from "./components/gradepage.component"
import adminnextclasses from "./components/adminnextclasses.components"
import adminhomepage from "./components/adminhomepage.component"
import adminfaculty from "./components/adminfaculty.component"
import transcript from "./components/transcript.component"
import classadd from"./components/addcourse.component"
import sectionadd from "./components/addclass.components"
import facultyviewstu from "./components/facultystudent.component"
import addsectionagain from "./components/addsection"
import researcherlogin from "./components/researcherlogin"
import researcherhomepage from "./components/researcherhomepage"
import attendance from "./components/attendance"
import timeslots from "./components/timeslots"
import updatecourse from "./components/updatecourse"
import preadd from "./components/prereqadd"
function App() {
  return (
    <Router>
          <Navbar />
          <br/>
    <div className="Pineapple">
    <Route path="/" exact component={login} />
    <Route path="/student/:id" exact component={studentscreen} />
    <Route path="/classes/:name" exact component={classes} />
    <Route path="/majors/:name" exact component={majors} />
    <Route path="/sections/:name" exact component={sections} />
    <Route path="/passerror" exact component={passerror} />
    <Route path="/calendar/:id" exact component={calendar} />
    <Route path="/spring" exact component={spring} />
    <Route path="/audit/:major" exact component={audit} />
    <Route path="/adddrop/:id" exact component={mark}/>
    <Route path="/masterfall" exact component={masterfall} />
    <Route path="/masterspring" exact component={masterspring} />
    <Route path="/register" exact component={register} />
    <Route path="/faculty" exact component={faculty}/>
    <Route path="/adminhome" exact component={adminhome} />
    <Route path="/facultyhome/:id" exact component={facultyhome}/>
    <Route path="/transcript/:id" exact component={transcript}/>
    <Route path="/adminLogin" exact component={admin}/>
    <Route path="/adminHomepage" exact component={adminhomepage}/>
    <Route path="/adminfaculty" exact component={adminfaculty}/>
    <Route path="/adminclasses" exact component={adminclasses}/>
    <Route path="/studentupdate/:id" exact component={studentupdate}/>
    <Route path="/addstudent" exact component={addstudent}/>
    <Route path="/addfaculty" exact component={addfaculty}/>
    <Route path="/updatefaculty/:id" exact component={updatefaculty}/>
    <Route path="/calendarnext/:id" exact component={calendar2} />
    <Route path="/adddropnext/:id" exact component={mark2}/>
    <Route path="/grade/:name" exact component={grade}/>
    <Route path="/gradescreen" exact component={gradescreen}/>
    <Route path="/addhold" exact component={hold}/>
    <Route path="/addclass" exact component={classadd}/>
    <Route path="/timeslots" exact component={timeslots}/>
    <Route path="/nextsections/:name" exact component={newsections}/>
    <Route path="/departments" exact component={department}/>
    <Route path="/adminnextclasses" exact component={adminnextclasses}/>
    <Route path="/addsection/:name" exact component={sectionadd}/>
    <Route path="/addsecondsection" exact component={addsecondsection}/>
    <Route path="/facultyviewstudent/:name" exact component={facultyviewstu}/>
    <Route path="/addsection/:name" exact component={addsectionagain}/>
    <Route path="/attendance/:name" exact component={attendance}/>
    <Route path="/researcherlogin" exact component={researcherlogin}/>
    <Route path="/researcherhomepage/:id" exact component={researcherhomepage}/>
    <Route path="/prereq" exact component={prereq}/>
    <Route path="/prereqadd" exact component={preadd}/>
    <Route path="/updatecourse" exact component={updatecourse}/>
    </div>
    </Router>

  );
}

export default App;
