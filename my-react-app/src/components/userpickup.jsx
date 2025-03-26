import React from "react";
import "./userpickup.css";
import Logo from "./fulllogo.jpg";
import Map from "./map.jpg";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Userpickup() {
  const location = useLocation();
  const { bookingType, deliveryOption } = location.state || {};

  const placeholderText = bookingType === 'own' && deliveryOption === 'Delivery'
    ? 'Enter Delivery Address'
    : 'Enter Pickup Location';

  return (
    <div className="pickup_body">
      <div className="pickup_logo-container">
        <img src={Logo} className="pickup_logo-image" alt="Logo" />
      </div>
      <div className="pickup_location">
        <div className="pickup_location-1">
          <img src={Map} alt="Map Logo" />
          <input
            type="text"
            name="pickup"
            placeholder={placeholderText}
            className="pickup_input-field"
          />
        </div>
        <NavLink to='/userpayment' className="pickup_next-button">Next</NavLink>
      </div>
    </div>
  );
}

export default Userpickup;