import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-xl" style={{width:"117%"}}>
        <Link to="/" className="navbar-brand">Alpha university</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/spring" className="nav-link">Academic Calendar for Spring</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Academic Calendar for Fall</Link>
          </li>
          <li className="navbar-item">
          <Link to="/masterspring" className="nav-link">Master Schedule Spring</Link>
          </li>
          <li className="navbar-item">
          <Link to="/masterfall" className="nav-link">Master Schedule Fall</Link>
          </li>
          <li className="navbar-item">
          <Link to="/departments" className="nav-link">Catalog</Link>
          </li>
          
        
    
        </ul>
      
        </div>
        

      </nav>
      



      
    );
  }
}