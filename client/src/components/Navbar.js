import React from 'react'
import {NavLink} from "react-router-dom"


export const Navbar = () => {

    return (
        <div>
            <nav>
                <div className="nav-wrapper blue">
                <a href="#!" className="brand-logo" style={{marginLeft: '15px'}}>VN Logistics</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/zdhj" >random stuff</NavLink></li>
                    <li><NavLink to="/" ></NavLink></li>
                    <li><NavLink to="/" ></NavLink></li>
                    <li><a href="/">logout</a></li>
                </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><NavLink to="/" ></NavLink></li>
                <li><NavLink to="/" ></NavLink></li>
                <li><NavLink to="/" ></NavLink></li>
                <li><a href="/">logout</a></li>
            </ul>
        </div>
    )
}