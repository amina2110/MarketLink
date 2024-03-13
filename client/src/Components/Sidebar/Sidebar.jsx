import React, {useState} from 'react';
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>

            <div className="sidebar-header">
                <h3>MarketLink</h3>
                <button className="close-button" onClick={onClose}>
                    &times; {/* This is the close icon */}
                </button>
            </div>

            <div className="sidebar-content">
                <ul>
                    <li>My Profile</li>
                    <li>My Orders</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
