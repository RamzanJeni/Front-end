import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './videoSection.css'
import Axios from 'axios'
import ShowSearchedUniversity from '../ShowSearchResult/ShowSearchResult'
import axios from 'axios';

class VideoSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            universityType: "",
            universityName: "",
            program: "",
            showResult: false,
        }

        this.handleInputOnChnage = this.handleInputOnChnage.bind(this);
    };

    handleInputOnChnage = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    getUniversities = (e) => {

        e.preventDefault();

        let formData = {
            universityType: this.state.universityType,
            universityName: this.state.universityName,
            program: this.state.program,
        };

        alert(JSON.stringify(formData));

        Axios.get("http://localhost:5000/searchUniversity", formData)
            .then(() => console.log('data sent'))
            .catch(err => {
                console.error(err);
            });

    };

    handleSearch = () => {
        this.setState({
            showResult: true
        })
        axios.get("http://localhost:5000/searchUniversity").then((res => {
            console.log(JSON.stringify(res));
        }))
    }


    render() {

        if (this.state.showResult) {
            <ShowSearchedUniversity />
        }

        return (
            <section className="video-section">
                <video loop autoPlay muted className="bg-video">
                    <source src="images/typing-video.mp4"></source>
                </video>
                <div className="container">
                    <Row>
                        <Col md="6" className="d-block mx-auto serach-column">
                            <h4><span>Search</span> & Choose your Dream University</h4>
                            <form onSubmit={this.getUniversities}>
                                <div className="form-group">
                                    <label>Select University Type</label>
                                    <select className="form-control" name="universityType" value={this.state.universityType} onChange={this.handleInputOnChnage}>

                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                        <option value="SemiGovernment">Semi-Government</option>

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Select Degree</label>
                                    <select className="form-control" name="universityName" value={this.state.universityName} onChange={this.handleInputOnChnage}>
                                        <option value="PunjabUniversity">Punjab University</option>
                                        <option value="SemiGovernment">NUST</option>
                                    </select>
                                </div>
                                <div className="form-group mb-2r">
                                    <label>Select Program</label>
                                    <select className="form-control" name="program" value={this.state.program} onChange={this.handleInputOnChnage}>
                                        <option>IT</option>
                                        <option>CS</option>
                                        <option>SE</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-block mt-3" onClick={this.handleSearch} >Search</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}
export default VideoSection;