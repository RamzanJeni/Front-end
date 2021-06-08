import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap/esm/index';
import './Admissions.css';

class Admissions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showList: false
        }
    }

    handleSearch = () => {
        this.setState({
            showList: true
        })
    }
    
    render() {
        let showList
        if(this.state.showList){
            showList = <AdmissionList/>
        }
        return (
            <div className="admission-section">
                <h2>Universities <span>Admission News</span></h2>
                <div className="container">
                    <Row>
                        <Col>
                           <form className="row justify-content-center">
                               <div className="form-group col-md-4">
                                   <label>Select City</label>
                                   <select className="form-control">
                                       <option value="mlt">Multan</option>
                                       <option value="lhr">Lahore</option>
                                       <option value="isl">Islamabad</option>
                                   </select>
                               </div>
                               <div className="form-group col-md-4">
                                   <label>Select Institute</label>
                                   <select className="form-control">
                                       <option value="clg">College</option>
                                       <option value="uni">University</option>
                                   </select>
                               </div>
                               <div className="form-group col-md-2 d-flex align-items-end">
                                   <button type="button" className="btn btn-primary mt-2" onClick={this.handleSearch}>Search</button>
                               </div>
                           </form>
                           {showList}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

class AdmissionList extends Component{
    render() {
        return(
            <div className="admission-list">
                <h1>Universities <span>List</span></h1>
                <div className="container">
                <Row>
                    <Col md="4">
                        <a className="admission-link" href="https://pucit.edu.pk/programs/">
                            <img src="images/fcit-admission.jpg" alt="admission-image" />
                            <div className="uni-name-caption">
                                <h3>FCIT</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="admission-link" href="https://nust.edu.pk/admissions/">
                            <img src="images/nust-admission.jpg" alt="scholarship-image"/>
                            <div className="uni-name-caption">
                                <h3>NUST</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="admission-link" href="https://lahore.comsats.edu.pk/admissions.aspx">
                            <img src="images/comsats-admission.jpg" alt="scholarship-image"/>
                            <div className="uni-name-caption">
                                <h3>COMSATS</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="admission-link" href="https://www.ucp.edu.pk/admissions/">
                            <img src="images/ucp-admission.jpg" alt="scholarship-image"/>
                            <div className="uni-name-caption">
                                <h3>UCP</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="admission-link" href="https://lums.edu.pk/admissions">
                            <img src="images/lums-admission.jpg" alt="scholarship-image"/>
                            <div className="uni-name-caption">
                                <h3>LUMS</h3>
                            </div>
                        </a>
                    </Col>

                    <Col md="4">
                        <a className="admission-link" href="https://www.uet.edu.pk/faculties/facultiesinfo/department?RID=introduction&id=8">
                            <img src="images/uet-admission.jpg" alt="scholarship-image"/>
                            <div className="uni-name-caption">
                                <h3>UET</h3>
                            </div>
                        </a>
                    </Col>

                </Row>
            </div>
            </div>
        )
    }
}

export default Admissions
