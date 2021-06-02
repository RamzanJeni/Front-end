import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './showSearchResult.css'

class ShowSearchedUniversity extends Component {
    render() {
        return (
            <table className="table" >
                <tr>
                    <th>ID</th>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Program</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>PUCIT</td>
                    <td>Public</td>
                    <td>IT</td>
                </tr>
            </table>
        )
    }
}

export default ShowSearchedUniversity;