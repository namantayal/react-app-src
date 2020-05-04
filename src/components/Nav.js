import React from "react"
import {Link} from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <nav className='nav-bar'>
            <h3 className='title'>Assignment</h3>
            <ul className='nav-links'>
                <Link className='links' to="/">
                    <li>Home</li>
                </Link>
                <Link className='links' to="/student">
                    <li>Student</li>
                </Link>
                <Link className='links' to="/teacher">
                    <li>Teacher</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;