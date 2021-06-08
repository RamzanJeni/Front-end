import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './Introduction.css'

class Introduction extends Component{
    render(){
         return(
            <div className="introSection">
                <div className="container">
                    <Row className="d-flex align-items-center">
                        <Col md="5">
                            <img src="./images/about-1.jpg" className="img-fluid"/>
                        </Col>
                        <Col md="7">
                            <div className="intro-content pl-3">
                                <h4>We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.</h4>
                                <p>The main purpose of this project is to make Admission Counselling System for students. This system will help the students in finding the appropriate university according to their degree and subject.</p>
                                <p>This system will also provide the information to the student in applying for the entry test and comparison of the different universities.</p>
                                <button className="btn btn-more mt-2 text-left">Read More</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }   
}

export default Introduction;