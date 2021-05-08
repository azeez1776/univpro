import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><button className="nav_but">Home</button></Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/Login"><button className="nav_but">Login</button></Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/Register"><button className="nav_but">Register</button></Link>
        </div>
    )
}

export default Nav
