import React from "react";
import "./Active.css";

function BookingCard() {
  return (
    <div className="booking-card_active">
      <div className="details_active">
      <div className="left_active">
        <h3>KTM RC 360</h3>
        <p>31/01/2025 &nbsp; 11:00</p>
        <p className="rental-company_active">SHREE SAI RENTALS</p>
      </div>

      <div className="middle_active">
        <p>3 days 3 hours</p>
      </div>

      <div className="right_active">
        <h3>Ram</h3>
        <p>03/02/2025 &nbsp; 14:00</p>
        <p>9000 INR</p>
      </div>
      </div>
    </div>
  );
}

export default BookingCard;