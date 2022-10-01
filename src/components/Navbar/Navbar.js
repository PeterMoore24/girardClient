import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Navbar.css';
import { Link } from 'react-router-dom';
import React from "react";
import Button from '@material-ui/core/Button'
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {

    const { logout } = useAuth0();
    var loggedin = false;

    if(sessionStorage.getItem("email") != '')
    {
        loggedin = true;
    }

    if(loggedin){
        let content = (
        <div className="navbar">
            <div className="content">
                <span className="npo-heading">Girard Training Stables</span>
                <span className="filler"></span>
                <ul className="links">
                <div>
                    <Button color="primary" variant="text" onClick={() => logout({ returnTo: "https://girard-client.herokuapp.com" })} className="button" id="Log_Out_Button">Log Out</Button>
                </div>
                <li>
                    <Link to="/volunteer" style={{ textDecoration: 'none' }}>Calendar</Link>
                </li>
                <li>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
                </li>
                </ul>
                <AccountCircleIcon fontSize="default" style={{margin: '5px 15px', fontSize: '2.5rem'}}/>
            </div>
        </div>
        );
    return content; }

    else{
        let content = (
        <div className="navbar">
            <div className="content">
                <span className="npo-heading">Girard Training Stables</span>
                <span className="filler"></span>
                <ul className="links">
                <li>
                    <Link to="/login" style={{ textDecoration: 'none' }}>Log In</Link>
                </li>
                <li>
                    <Link to="/" style={{ textDecoration: 'none' }}>Sign Up</Link>
                </li>
                <li>
                    <Link to="/volunteer" style={{ textDecoration: 'none' }}>Calendar</Link>
                </li>
                <li>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
                </li>
                <Button color="primary" variant="text" onClick={() => logout({ returnTo: "https://girard-client.herokuapp.com" })} className="button" id="Log_Out_Button">Log Out</Button>
                </ul>
            </div>
        </div>
        );
        return content;
    }
}

export default Navbar;