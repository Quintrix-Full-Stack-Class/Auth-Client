import React from 'react'
import '../CSS/NavBar.css'
import { useSelector, useDispatch } from 'react-redux'

function NavBar() {

    return (
        <div className="navbar">
            <h1> <a href='/'> YABT: Money Goals </a> </h1>
            <div className="links">
                <ul>
                    <li><a href='/register'> Register </a></li>
                    <li><a href='/dashboard'> Dashboard </a></li>
                    <li><a href='/MoneyGoals'> Goals </a></li>
                    <li><a href='/verification'> Verification </a></li>
                    <li><a className='SignInBtn' href='/login'>Log In</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;