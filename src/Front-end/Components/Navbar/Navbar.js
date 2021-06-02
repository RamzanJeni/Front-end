import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Navbar,Nav} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css'

import { Link } from 'react-router-dom'

class primaryNav extends Component{
    render(){
         return(
            <div className="navbar-main">
                <div className="container-fluid">
                    <Row>
                      <Col>
                        <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link to='/'>
                                        <Nav.Link href='/'>Home</Nav.Link>
                                    </Link>
                                    <Link to="/Admissions">
                                        <Nav.Link href="Admissions" >Admissions</Nav.Link>                                        
                                    </Link>
                                    <Link to="/Scholarships">
                                        <Nav.Link href="Scholarships">Scholarships</Nav.Link>                                        
                                    </Link>
                                    <Link to="/Comparison">
                                        <Nav.Link href='Comparison'>Comparison</Nav.Link>
                                    </Link>
                                    <Link to="/contactUs">
                                        <Nav.Link href="contactUs" >Contact Us</Nav.Link>
                                    </Link>
                                    <Link to="/aboutUs">
                                    <   Nav.Link href='aboutUs'>About Us</Nav.Link>
                                    </Link>
                                    <Link to="/FAQs">
                                        <Nav.Link href="FAQs" >FAQs</Nav.Link>
                                    </Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                       </Col>
                    </Row>
                </div>
            </div>
        );
    }   
}

export default primaryNav;