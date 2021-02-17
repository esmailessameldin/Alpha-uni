import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Old Westbury</Link>
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
          <li className="navbar-item">
          <Link to="https://www.oldwestbury.edu/academics/registrar/catalogs" className="nav-link">Catalog</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}