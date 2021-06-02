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
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error ut provident vel repellendus nihil atque possimus aliquam, mollitia tempora neque voluptate debitis illum veniam.Numquam blanditiis dignissimos laboriosam illum ut officia.</p>
                                <p>Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nulla sequi pariatur quam animi ipsum molestias assumenda cumque.</p>
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