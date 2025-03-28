import React, { useState } from "react";
import "./TermsAndConditions.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingType, deliveryOption } = location.state || {};
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleAgree = () => {
    if (bookingType === "own" && deliveryOption === "Pickup") {
      setShowPopup(true); // Show the booking confirmation popup
    } else if (bookingType === "own" && deliveryOption === "Delivery") {
      navigate("/userpickup", { state: { bookingType, deliveryOption: "Delivery" } });
    } else {
      alert("Invalid booking type or delivery option.");
    }
  };

  const handlePopupOk = () => {
    setShowPopup(false); // Close the popup
    navigate("/active"); // Redirect to the active bookings page
  };

  return (
    <div className="body_tc">
      <div className="container_tc">
        <h1 className="h1_tc">Terms and Conditions</h1>
        <section>

            <h2 className="h2_tc">1. User Agreement</h2>
            <p className="p_tc">By using the Fleet platform, the customer agrees to abide by all terms and conditions stated here.</p>
            <ul className="ul_tc">
            <li className="li_tc">The customer must be at least 18 years old (or the legal driving age in their region) to rent a vehicle.</li>
            <li>A valid government-issued ID and driver's license must be provided for verification.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="h2_tc">2. Account Registration</h2>
            <ul className="ul_tc">
            <li className="li_tc">Customers must register an account using a valid email ID and phone number.</li>
            <li className="li_tc">The platform reserves the right to suspend or terminate any account found to be engaging in fraudulent activities.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="h2_tc">3. Vehicle Booking and Rental</h2>
            <ul className="ul_tc">
            <li className="li_tc">All vehicle bookings must be made through the official platform.</li>
            <li className="li_tc">Customers must provide accurate information regarding rental dates, pickup, and return locations.</li>
            <li className="li_tc">Late returns may incur additional charges as per the pricing policy.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="h2_tc">4. Payment Terms</h2>
            <ul className="ul_tc">
            <li className="li_tc">All payments must be made in advance or as per the agreed payment schedule.</li>
            <li className="li_tc">Refunds are subject to the platform's refund policy and may take 5-7 business days to process.</li>
            <li className="li_tc">Additional charges for damages or violations will be billed separately.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="h2_tc">5. License and Documentation</h2>
            <ul className="ul_tc">
            <li className="li_tc">Customers must possess a valid driver's license when renting a vehicle without a driver.</li>
            <li className="li_tc">The platform and vehicle owners reserve the right to verify all documents before allowing rentals.</li>
            <li className="li_tc">If the customer is found driving without a valid license, the booking may be immediately canceled without a refund.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="h2_tc">6. Insurance and Liability</h2>
            <ul className="ul_tc">
            <li className="li_tc">Basic insurance is included in the rental price, but customers may opt for additional coverage.</li>
            <li className="li_tc">Customers are liable for any damages beyond the insurance coverage.</li>
            <li className="li_tc">The platform is not responsible for personal belongings left in the vehicle.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="h2_tc">7. Vehicle Condition and Maintenance</h2>
            <ul className="ul_tc">
            <li className="li_tc">Vehicles are maintained according to standard safety protocols.</li>
            <li className="li_tc">Customers must report any issues or damages immediately upon discovery.</li>
            <li className="li_tc">Regular maintenance is the responsibility of the vehicle owner.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="h2_tc">8. Cancellation Policy</h2>
            <ul className="ul_tc">
            <li className="li_tc">Cancellations made 24 hours before pickup are eligible for a full refund.</li>
            <li className="li_tc">Late cancellations may incur a cancellation fee.</li>
            <li className="li_tc">No-shows will be charged the full rental amount.</li>
            </ul>
        </section>
        
        <section>
            <h2 className="h2_tc">9. Privacy and Data Protection</h2>
            <ul className="ul_tc">
            <li className="li_tc">Customer data is protected according to privacy laws and regulations.</li>
            <li className="li_tc">Personal information is only used for booking and verification purposes.</li>
            <li className="li_tc">Customers can request their data to be deleted at any time.</li>
            </ul>
=======
          <h2 className="h2_tc">1. User Agreement</h2>
          <p className="p_tc">
            By using the Fleet platform, the customer agrees to abide by all terms and conditions stated here.
          </p>
          <ul className="ul_tc">
            <li className="li_tc">
              The customer must be at least 18 years old (or the legal driving age in their region) to rent a vehicle.
            </li>
            <li>
              A valid government-issued ID and driver’s license must be provided for verification.
            </li>
          </ul>

        </section>

        {/* Other sections remain unchanged */}

        <div className="button-container_tc">

            <NavLink to='/home/userpickup' className="agree-button_tc">I Agree</NavLink>
            <NavLink to='/home/vehicles' className="cancel-button_tc">Cancel</NavLink>
=======
          <button onClick={handleAgree} className="agree-button_tc">
            Agree and Confirm
          </button>
          <NavLink to="/vehicles" className="cancel-button_tc">
            Cancel
          </NavLink>

        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Booking Confirmed</h3>
            <p>Your booking has been successfully confirmed!</p>
            <button onClick={handlePopupOk} className="popup-ok-button">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsAndConditions;