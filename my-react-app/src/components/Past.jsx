import React from "react";
import "./Past.css";
import BookingCard from "./BookingCard.jsx"; 
import { NavLink } from 'react-router-dom';
import CarData from "./CarData"; // Import car data

function Past() {
  const pastBookings = CarData.filter(car => !car.booked && car.bookingStatus === "past");

  return (
    <div className="app-container_past">
      <div className="body_past">

        {/* Tabs */}
        <div className="tabs_past">
          <NavLink to='/active' className="tab_past">Active</NavLink>
          <NavLink to='/past' className="active_past">Past journey</NavLink>
        </div>

        {/* Booking Cards */}
        {pastBookings.length > 0 ? (
          pastBookings.map((booking, index) => <BookingCard key={index} booking={booking} />)
        ) : (
          <h4>No past bookings yet</h4>
        )}

      </div>
    </div>
  );
}

export default Past;
