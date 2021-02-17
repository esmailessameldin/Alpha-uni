import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import login from  "./components/homepage.component";
import Navbar from "./components/navbar.component"
function App() {
  return (
    <Router>
          <Navbar />
          <br/>
    <div className="btngan">
    <Route path="/" exact component={login} />
    </div>
    </Router>

  );
}

export default App;
