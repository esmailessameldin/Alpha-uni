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
import spring from "./components/spring.component"
function App() {
  return (
    <Router>
          <Navbar />
          <br/>
    <div className="btngan">
    <Route path="/" exact component={login} />
    <Route path="/student/:id" exact component={studentscreen} />
    <Route path="/classes/:id" exact component={classes} />
    <Route path="/majors/:name" exact component={majors} />
    <Route path="/sections/:name" exact component={sections} />
    <Route path="/passerror" exact component={passerror} />
    <Route path="/calendar/:id" exact component={calendar} />
    <Route path="/spring" exact component={spring} />
    </div>
    </Router>

  );
}

export default App;
