import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Swal from 'sweetalert2';

const NavBar = () => {
    const handleHelpButtonClick = e => {
        e.preventDefault();
        Swal.fire({
          title: 'Do you need help?',
          text: 'You can contact us 24/7.',
          icon: 'question',
          customClass: {
            popup: 'custom-popup',
            title: 'custom-title',
            confirmButton: 'custom-button'
          }
        });
      };
      

    return (
        <div>
            <header className="header_nav">
                <NavLink to='/'>
                <div className="logo_nav">
                    <img src="/Logo.png" alt="🚗 FLEET" />
                </div>
                </NavLink>
                <div className="links_nav">
                    <NavLink to='/help' className="help_nav" onClick={handleHelpButtonClick}>Help</NavLink>
                    <NavLink to='/active' className="booking_nav">Booking</NavLink>
                    <NavLink to='/profile' className="profile_nav">👤</NavLink>
                </div>
            </header>
        </div>
    )
}

export default NavBar;