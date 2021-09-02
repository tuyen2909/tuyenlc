import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Header extends Component {
    
    render() {
        const {branding} = this.props;
        return (
            <div>
                <nav className='navbar
                        navbar-expand-sm
                        navbar-dark
                        bg-danger
                        mb-3 py-0'>
                    <div className='container'>
                        <a href="/" className='navbar-brand'>{branding}</a>
                        <div>
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item'>
                                    <Link to="/" className='nav-link'>
                                        <i className='fas fa-home'/>
                                        HOME
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/about" className='nav-link'>
                                        <i className='fas fa-question'/>
                                        About
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/addcontact" className='nav-link'>
                                        <i className='fas fa-plus'/>
                                        Add Contact
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/album" className='nav-link'>
                                        <i className="fas fa-image">
                                            Album
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
