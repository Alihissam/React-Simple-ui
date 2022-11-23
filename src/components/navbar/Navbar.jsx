import React, { useState } from 'react'
import './navbar.css'
import { HashLink as Link, NavHashLink, HashLink, } from 'react-router-hash-link';
import logo from '../../images/logo.svg'
import { IoIosFingerPrint } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {

    const [isopen, setIsopen] = useState(false);

    return (
        <>
            <div className="navbar fixed-top" expand="lg">
                <nav className="container " expand="lg">
                    <div className="navbar_logo">
                        <Link to="/#"> <IoIosFingerPrint className="logo" /></Link>
                    </div>
                    <div className={isopen ? "nav_menu-mobile" : "nav_menu"}
                        onClick={() => setIsopen(false)}>
                        <ul className="nav_links">
                            <li>
                                <NavHashLink activeClassName="active" className="nav-item" to="/#">Home</NavHashLink>
                                <NavHashLink activeClassName="active" className="nav-item" to="/#about">About</NavHashLink>
                                <NavHashLink activeClassName="active" className="nav-item" to="/#services">Services</NavHashLink>
                                <NavHashLink activeClassName="active" className="nav-item" to="/#products">Products</NavHashLink>

                                <button className=" login-button" style={{ width: "90px", height: "33px" }}>Log in</button>

                            </li>
                        </ul>
                    </div>
                    <div className="menu_button" onClick={() => setIsopen(!isopen)}>
                        {isopen ? (<FaTimes />) : (< GiHamburgerMenu />)}
                    </div>
                </nav>
            </div >
        </>
    )
}

export default Navbar
