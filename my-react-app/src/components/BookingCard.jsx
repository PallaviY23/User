import React from "react";
import "./Past.css";

function BookingCard() {
  return (
    <div className="booking-card_past">
      <div className="details_past">
      <div className="left_past">
        <h3>KTM RC 360</h3>
        <p>31/01/2025 &nbsp; 11:00</p>
        <p className="rental-company_past">SHREE SAI RENTALS</p>
      </div>

      <div className="middle_past">
        <p>3 days 3 hours</p>
      </div>

      <div className="right_past">
        <h3>Ram</h3>
        <p>03/02/2025 &nbsp; 14:00</p>
        <p>9000 INR</p>
      </div>
      </div>
      <div className="feedback_past">
      <button className="feedback-btn_past">Submit feedback</button>
      </div>
    </div>
  );
}

export default BookingCard;