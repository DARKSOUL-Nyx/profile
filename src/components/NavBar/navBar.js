import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        VSS NISHWAN 
                    </Link>
                    <div className='menu-icon' onClick={toggle}>
                        <FaBars />
                    </div>  
                    <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={toggle}>
                                Home
                            </Link>
                        </li>  
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link' onClick={toggle}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-link' onClick={toggle}>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-link' onClick={toggle}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link' onClick={toggle}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </IconContext.Provider>
    );
};

export default NavBar;
