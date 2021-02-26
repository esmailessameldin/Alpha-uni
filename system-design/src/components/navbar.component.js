import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Alpha university</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Academic Calendar for Spring</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Academic Calendar for Fall</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Master Schedule Spring</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Master Schedule Fall</Link>
          </li>
          
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Catalog
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="https://www.oldwestbury.edu/academics/registrar/catalogs/undergraduate-catalog">Undergraduate Catalogs</Dropdown.Item>
    <Dropdown.Item href="https://www.oldwestbury.edu/academics/registrar/catalogs/graduate-catalog">Graduate Catalogs</Dropdown.Item>
  </Dropdown.Menu>
    </Dropdown>
    
        </ul>
      
        </div>
        

      </nav>
      



      
    );
  }
}