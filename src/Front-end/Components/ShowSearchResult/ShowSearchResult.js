import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './showSearchResult.css'
import axios from 'axios';


class ShowSearchedUniversity extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            Rank: "",
            Status: "",
            Faculty: "",
            City: "",
            Degree: "",
            Type: "",
            Recognized: "",
            Session: "",
        }
    };

    handleSearch = () => {
        axios.get("http://localhost:5000/searchUniversity").then((res => {
            console.log(JSON.stringify(JSON.stringify(res)));
            var uniObject = res.data.recordsets[0][0];
            console.log(JSON.stringify(uniObject))
            this.setState({
                Name: uniObject[0][0].name,
                Rank: uniObject[0][0].rank,
                Status: uniObject[0][0].status,
                Faculty: uniObject[0][0].faculty,
                City: uniObject[0][0].city,
                Degree: uniObject[0][0].degree,
                Type: uniObject[0][0].type,
                Recognized: uniObject[0][0].recognized,
                Session: uniObject[0][0].session,
            })

        }))
    }

    render() {
        return ( 
        <div className="container"> {this.handleSearch()}
            <table className = "table mainContainer" >
            <h4 className="university-name">You Searched for <span>{this.state.Name}</span></h4>
            <tr className="table-headings">
                <th>Name</th>
                <th>Rank</th>
                <th>Status</th>
                <th>Faculty</th>
                <th>City</th>
                <th>Degree</th>
                <th>Type</th>
                <th>Recognizeh from HEC</th>
                <th>Session</th>
            </tr>
            <tr>
                <td name="Name" >{this.state.Name}</td>
                <td name="Rank" >{this.state.Rank}</td>
                <td name="Status" >{this.state.Status}</td>
                <td name="Faculty" >{this.state.Faculty}</td>
                <td name="City" >{this.state.City}</td>
                <td name="Degree" >{this.state.Degree}</td>
                <td name="Type" >{this.state.Type}</td>
                <td name="Recognized"> {this.state.Recognized}</td>
                <td name="Session" >{this.state.Session}</td>
            </tr>
            </table>
        </div>
        
        )
    }
}

export default ShowSearchedUniversity;