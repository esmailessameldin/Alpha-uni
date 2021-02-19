import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import login from  "./components/homepage.component";
import Navbar from "./components/navbar.component"
import test from "./components/test.component"

function App() {
  return (
    <Router>
          <Navbar />
          <br/>
    <div className="btngan">
    <Route path="/" exact component={login} />\
    <Route path="/student" exact component={test} />
    </div>
    </Router>

  );
}

export default App;
