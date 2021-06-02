import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './Topbar.css'

class Topbar extends Component{
    render(){
         return(
             <div className="topbar">
                 <div className="container-custom">
                    <Row>
                        <Col>
                            <div className="left-column">
                                 <ul className="nav">
                                     <li className="nav-item">
                                        <i className="fa fa-map-marker mr-2"></i>
                                        <span>Main Ferozpur Road, Lahore</span>
                                     </li>
                                     <li className="nav-item">
                                        <a href="#">Have a Questions</a>
                                     </li>
                                 </ul>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <div className="right-column">
                                <ul className="nav">
                                     <li className="nav-item">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                     </li>
                                     <li className="nav-item">
                                        <a href="#">
                                            <i className="fa fa-user"></i> Login
                                        </a>
                                     </li>
                                     <li className="nav-item">
                                        <a href="#">
                                            <i className="fa fa-user"></i> Register
                                        </a>
                                     </li>
                                 </ul> 
                            </div>
                        </Col>
                    </Row>
                 </div>
          </div>
         );
        }   
    }

export default Topbar;
