import React from "react";
import "./Active.css";
import BookingCard1 from "./BookingCard1.jsx";
import { NavLink } from 'react-router-dom';

function Active() {
  return (
    <div className="app-container_active">
      <div className="body_active">

      {/* Tabs */}
      <div className="tabs_active">
        <NavLink to='/active' className="active_active">Active</NavLink>
        <NavLink to='/past' className="past_active">Past journey</NavLink>
      </div>

      {/* Booking Card1 */}
      <BookingCard1 />
      </div>
    </div>
  );
}

export default Active;