import { useState } from 'react'
import './Profile.css'

function Profile() {

 
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    address: "",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log("Saved Data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
    
    
    
      <div className="profile-container">
        <div className="profile-card">
          <div className="avatar-container">
            <img src={profilePic || "default-avatar.png"} alt="Profile" className="avatar" />
          </div>
         
         
          <div className="input-container">
            <button className="edit-button-above" onClick={handleEditClick}>✏</button>
            <h6>Full Name</h6>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className={`input-field ${isEditing ? "editing" : "disabled"}`}
              value={formData.fullName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <h6>Phone Number</h6>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className={`input-field ${isEditing ? "editing" : "disabled"}`}
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={!isEditing}
          />
            <h6>Email</h6>
          <input
            type="mail"
            name="email"
            placeholder="Email"
            className={`input-field ${isEditing ? "editing" : "disabled"}`}
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <h6>Date of Birth</h6>
          <input
            type="date"
            name="dateOfBirth"
            className={`input-field ${isEditing ? "editing" : "disabled"}`}
            value={formData.dateOfBirth}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <h6>Address</h6>
          <input
            type="text"
            name="address"
            placeholder="Address"
            className={`input-field ${isEditing ? "editing" : "disabled"}`}
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
          />
          {isEditing && (
            <button className="save-button" onClick={handleSaveClick}>Save</button>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default Profile