import React from 'react';
import './PopUp_Confirm.css'

const PopUpConfirm = ({isOpen, onClose}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">

                <button className="modal-close-button" onClick={onClose}>
                &times;
                </button>

                <div className="modal-header">
                    <h2>Thank you!</h2>

                </div>
                <div className="modal-body">
                    <p>Your order is confirmed.</p>
                </div>
            </div>
        </div>
    );
};

export default PopUpConfirm;
