import React from 'react';
import {BrowserRouter as Router , Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import homepage from  "./components/homepage.component";
import navbar from "./components/navbar.component"
function App() {
  return (
    <Router>
    <div className="btngan">
    <Route path="/" exact component={navbar} />
    </div>
    </Router>

  );
}

export default App;
