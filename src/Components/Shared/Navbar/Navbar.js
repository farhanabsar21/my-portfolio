// import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo/FARHAN.png";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleMenu = () =>{
        if(!open){
            setOpen(true);
        }else{
            setOpen(false);
        }
    } 
    return (
        <Container>
            <nav>
                <div className="nav-container">
                    <div className="brand-logo">
                        <Link to="/home"><img src={logo} alt="brand-logo" /></Link>
                    </div>
                    <div className="menu" style={{ transform: open ? "translateX(0%)" : "" }}>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="menu-btn">
                        <FontAwesomeIcon onClick={handleMenu} icon={faBars} size="2x" color="white" />
                    </div>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;