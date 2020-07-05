import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Click from './pages/link';

class Navigation extends Component {

    render() {
        return (

            <div>

                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/link" className="nav-link">Link</Link>
                </li>



                <center><h1 className="navbar">Navigation</h1></center>


                <div class="card">


                </div>

            </div>

        );
    }
}

export default Navigation;