import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" to='/'>React</a>
                                <button className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse"
                                    id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: "auto" }}>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact activeClassName="active" aria-current="page" to='/'>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact activeClassName="active" to='/service'>Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact activeClassName="active" to='/about'>About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact activeClassName="active" to='/contact'>Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;