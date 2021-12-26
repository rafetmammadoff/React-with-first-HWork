import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/logo.png'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light my-navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"> Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">VOIP Price</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Support</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Contact</a>
                  </li>
                </ul>
                <form className="d-flex">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </form>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar
