import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap/esm/index';
import './Scholarships.css'

function Scholarship() {
    return (
        <div className="scholarship-section">
            <h2>Recent <span>Scholarships</span></h2>
            <div className="container">
                <Row>
                    <Col md="4">
                        <a className="scholarship-link" href="https://www.incpak.com/education/ehsaas-undergraduate-scholarship-apply-online/">
                            <img src="images/lahore.jpg" alt="scholarship-image" />
                            <div className="scholar-caption">
                                <h3>Scholarships in Lahore</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="http://ww3.comsats.edu.pk/scholarships/StudentsScholarships.aspx">
                            <img src="images/nust1.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarships in Islamabad</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="https://www.ilmkidunya.com/edunews/scholarships-for-multan-intermediate-and-bachelor-maths-female-students-23183.aspx">
                            <img src="images/multan.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarships in Multan</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="https://careerhelpportal.com/hec-need-base-scholarship-program-2021-for-uaf-students/">
                            <img src="images/faisalabad.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarships in Faisalabad</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="https://www.arqumhouse.edu.pk/university-of-sahiwal-admission">
                            <img src="images/sahiwal.jpg" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarships in Sahiwal</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="scholarship-link" href="https://www.scholarshipsads.com/hec-need-based-scholarships-university-of-karachi/">
                            <img src="images/karachi.gif" alt="scholarship-image"/>
                            <div className="scholar-caption">
                                <h3>Scholarships in Karachi</h3>
                            </div>
                        </a>
                    </Col>

                </Row>
            </div>
        </div>
    )
}
export default Scholarship
