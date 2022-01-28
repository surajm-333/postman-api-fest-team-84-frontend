import React, { PureComponent } from 'react';
import BookLogo from './BookLogo.jpg';
import BookLogo1 from './BookLogo1.png';
import './NavBarStyle.css';
function NavBar() {
    return (
        <div className="NavBar">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <a className="navbar-brand" href="#">
                        <img src={BookLogo1} alt="" width="38" height="38" className="d-inline-block align-text-top"/>
                            <span className='TitleText'>
                            <b>E-Library</b>
                                </span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Genera
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Sci-fi</a></li>
                                    <li><a className="dropdown-item" href="#">Comics</a></li>
                                    <li><a className="dropdown-item" href="#">Self-help</a></li>
                                    {/* <li><hr className="dropdown-divider" /></li> */}
                                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link disabled">Disabled</a> */}
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;