import React, { useState } from "react";
import {
  FaArrowLeft,
  FaUserCircle,
  FaCog,
  FaBell,
  FaUser,
  FaUsers,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Test.css";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ff4655");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleBack = () => {
    if (showSettings) {
      setShowSettings(false);
    } else {
      setOpen(false);
    }
  };

  const handleSettingsClick = () => {
    setShowSettings(true);
  };

  const handleSignOut = () => {
    alert("You have been signed out!");
  };

  return (
    <div className="profile-menu-wrapper">
      {/* Profile Icon */}
      <div className="profile-icon" onClick={() => setOpen(!open)}>
        <FaUserCircle size={40} color={selectedColor} />
      </div>

      {/* Slide Down Menu */}
      {open && !showSettings && (
        <div className="profile-dropdown">
          <div className="profile-header">
            <FaArrowLeft className="back-arrow" onClick={handleBack} />
            <h3>Profile Settings</h3>
          </div>

          <div className="profile-options">
            <div className="profile-item">
              <h4>Manage Profile</h4>
              <p>Edit your personal details and preferences.</p>
            </div>

            <div className="profile-item">
              <h4>Email Address</h4>
              <p>user@email.com</p>
            </div>

            <div className="profile-item">
              <h4>Change Profile Icon</h4>
              <div className="color-options">
                {["#ff4655", "#007bff", "#00c851", "#ffbb33", "#9b59b6"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`color-circle ${
                        selectedColor === color ? "selected" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorSelect(color)}
                    ></div>
                  )
                )}
              </div>
            </div>

            <div
              className="profile-item settings-item"
              onClick={handleSettingsClick}
            >
              <FaCog className="settings-icon" />
              <div>
                <h4>Settings</h4>
                <p>Open account settings and preferences.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Account Settings Page */}
      {showSettings && (
        <div className="account-settings-page">
          <div className="overlay">
            <div className="account-settings-container">
              <div className="header">
                <FaArrowLeft className="back-arrow" onClick={handleBack} />
                <h2>Account Settings</h2>
              </div>

              <div className="settings-options">
                <div className="setting-item">
                  <FaBell className="icon" />
                  <div>
                    <h3>Allow Notifications</h3>
                    <p>Receive updates and movie recommendations.</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="setting-item">
                  <FaUser className="icon" />
                  <div>
                    <h3>Account</h3>
                    <p>Manage your login and personal details.</p>
                  </div>
                </div>

                <div className="setting-item">
                  <FaUsers className="icon" />
                  <div>
                    <h3>Manage Profiles</h3>
                    <p>Edit or add new user profiles.</p>
                  </div>
                </div>

                <div className="setting-item">
                  <FaQuestionCircle className="icon" />
                  <div>
                    <h3>Help</h3>
                    <p>Get support and FAQs for your account.</p>
                  </div>
                </div>

                <div className="setting-item signout" onClick={handleSignOut}>
                  <FaSignOutAlt className="icon" />
                  <div>
                    <h3>Sign Out</h3>
                    <p>Exit your current session safely.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
