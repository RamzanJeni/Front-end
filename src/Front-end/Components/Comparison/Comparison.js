import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap/esm/index'
import './Comparison.css'

class Comparison extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
    }

    handleComparison = () => {
        this.setState({
            show: true
        })
    }

    render() {

        if (this.state.show) {
            var myTable = <ComparisonTable />
        }


        return (
            <div className="container">
                <form className="compare-form">
                    <h4>Universities <span>Comparison</span></h4>
                    <Row>
                        <Col md="6">
                            <div className="text-left">
                                <label>Select University</label>
                                <select className="form-control">
                                    <option value="uni1">Punjab University</option>
                                    <option value="uni2">Comsats University</option>
                                </select>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="text-left">
                                <label>Select University</label>
                                <select className="form-control">
                                    <option value="uni1">Punjab University</option>
                                    <option value="uni2">Comsats University</option>
                                </select>
                            </div>
                        </Col>
                        <Col sm="12" md="12" className="mt-4">
                            <div>
                                <button type="button" className="btn btn-primary" onClick={this.handleComparison}>Compare</button>
                            </div>
                        </Col>

                    </Row>
                </form>

                <div className="mt-5 compare-table">
                    {myTable}
                </div>
            </div>
        )
    }
}

class ComparisonTable extends Component {
    render() {
        return (
            <table className="table table-bordered" cellSpacing='2px'>
                <tr>
                    <th>Description</th>
                    <td>University 1</td>
                    <td>University 2</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>Sahiwal</td>
                    <td>Multan</td>
                </tr>
                <tr>
                    <th>Institute Type</th>
                    <td>Govt.</td>
                    <td>Private</td>
                </tr>
                <tr>
                    <th>Student Faculty ratio</th>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <th>Foreign Affiliation</th>
                    <td>N/A</td>
                    <td>Cambridge University</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>abc@gmail.com</td>
                    <td>abc@gmail.com</td>
                </tr>
                <tr>
                    <th>Hostel Facility</th>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <th>Male Hostel</th>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <th>Female Hostel</th>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
                <tr>
                    <th>Internship</th>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <th>Wifi</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>Science Labs</th>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
            </table>
        )
    }
}

export default Comparison
