import React, { useState } from "react";
import "./Past.css";
import BookingCard from "./BookingCard.jsx"; 
import { NavLink } from 'react-router-dom';
import CarData from "./CarData"; // Import car data

function Past() {
  const [pastBookings, setPastBookings] = useState(
    CarData.filter(car => !car.booked && car.bookingStatus === "past")
  );

  const [showPopup, setShowPopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // Open popup when user clicks "Submit Rating"
  const handleOpenPopup = (booking) => {
    setSelectedBooking(booking);
    setShowPopup(true);
  };

  // Close popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedBooking(null);
    setRating(0);
    setComment("");
  };

  // Submit rating and update car data
  const handleSubmitRating = () => {
    if (!selectedBooking) return;

    const updatedBookings = pastBookings.map(car =>
      car.name === selectedBooking.name
        ? { ...car, rating: rating, userComment: comment }
        : car
    );

    setPastBookings(updatedBookings);
    handleClosePopup();
  };

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
          pastBookings.map((booking, index) => (
            <BookingCard 
              key={index} 
              booking={booking} 
              onRate={() => handleOpenPopup(booking)} // Pass function to BookingCard
            />
          ))
        ) : (
          <h4>No past bookings yet</h4>
        )}

        {/* Rating Popup */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Rate {selectedBooking?.name}</h3>

              {/* Star Rating */}
              <label>Rating:</label>
              <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                <option value={0}>Select</option>
                <option value={1}>⭐</option>
                <option value={2}>⭐⭐</option>
                <option value={3}>⭐⭐⭐</option>
                <option value={4}>⭐⭐⭐⭐</option>
                <option value={5}>⭐⭐⭐⭐⭐</option>
              </select>

              {/* Comment */}
              {/* Buttons */}
              <div className="popup-buttons">
                <button onClick={handleSubmitRating}>Submit</button>
                <button onClick={handleClosePopup}>Cancel</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Past;
