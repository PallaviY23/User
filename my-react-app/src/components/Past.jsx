import React from "react";
import "./Past.css";
import BookingCard from "./BookingCard.jsx";
import { NavLink } from 'react-router-dom';

function Past() {
  return (
    <div className="app-container_past">
      <div className='body_past'>

      {/* Tabs */}
      <div className="tabs_past">
        <NavLink to='/active' className="tab_past">Active</NavLink>
        <NavLink tp='/past' className="active_past">Past journey</NavLink>
      </div>

      {/* Booking Card */}
      <BookingCard />
      </div>
    </div>
  );
}

export default Past;