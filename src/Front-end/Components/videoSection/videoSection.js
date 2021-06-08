import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap/esm/index';
import 'font-awesome/css/font-awesome.min.css';
import './videoSection.css'
import Axios from 'axios'
import ShowSearchedUniversity from '../ShowSearchResult/ShowSearchResult'

class VideoSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            universityType: "Public",
            universityName: "PUCIT",
            program: "IT",
            showResult: false,
            universityObject: {},
            names: []
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

        this.setState({
            showResult: true
        });

        let formData = {
            universityType: this.state.universityType,
            universityName: document.getElementById("uniNames").value,
            program: this.state.program,
        };

        alert(JSON.stringify(formData));

        Axios.post("http://localhost:5000/searchUniversity", formData)
            .then((res) => {
                console.log(JSON.stringify(res.data.recordsets.length));
            })
            .catch(err => {
                console.error(err);
            }
        );

    };

    getUniversitiesName = (e) => {
        var uniNames;

         Axios.get("http://localhost:5000/getSearchedData")
        // {
        //     console.log(response.data.recordsets[0][0]);

        //     this.setState.universityObject = response;
        //     var len = response.data.recordsets;
        //     console.log(len);
        //     for (var i=0; i< len; i++) {
        //         for(var j=0; j<3; j++) {
        //             console.log(response.data.recordsets[i][j].name);
        //         }
        //     }
        // })
            .then((response) => {
                console.log(JSON.stringify(response));
                debugger;

                uniNames = response.data;
                console.log(document.getElementById("uniNames").length);
                document.getElementById("uniNames").innerHTML = uniNames;
                //this.setState.universityObject = response;
                // var len = response.data.recordsets.length;
                // console.log(len);
                // for (var i=0; i< len; i++) {
                //     for(var j=0; j<len; j++) {
                //         console.log(response.data.recordsets[i][j].name);
                //     }
                // }
            })
            .catch(error => {
                console.log(error);
            });
    }

   
    // handleSearch = () => {
    //     this.setState({
    //         showResult: true
    //     })
    //     axios.get("http://localhost:5000/searchUniversity").then((res => {
    //         this.setState({
    //             universityObject: res.data.recordsets,
    //         })
    //         console.log(JSON.stringify(this.state.universityObject))
    //         console.log(JSON.stringify("test2" + JSON.stringify(res)));
    //         console.log('The uni id is:' + this.state.universityObject[0][0].uni_ID);

    //     }))
    // }

    // createSelectUniversityName() {
    //     var university = [];         
    //     for (var i = 0; i <= this.state.universityObject.length; i++) {             
    //         university.push(<option key={i} value={i}>{i}</option>);
    //         console.log(this.state.universityObject.name={i})
    //     }
    //     return university;
    // }  

    render() {

        if (this.state.showResult) {
            var searchResult = <ShowSearchedUniversity />
        }

        return (
            <div>
                {this.getUniversitiesName}
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
                                            {/* {this.createSelectUniversityName()} */}
                                            <option value="Public">Public</option>
                                            <option value="Private">Private</option>
                                            <option value="SemiGovernment">SemiGovernment</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Select University</label>
                                        <select id="uniNames"className="form-control " name="universityName" >
                                        
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
                                        <button type="submit" className="btn btn-block mt-3" >Search</button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </section>
                <div>
                    {searchResult}
                </div>
                {this.getUniversitiesName()}
            </div>
        );
    }
}
export default VideoSection;
