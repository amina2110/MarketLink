import React, { useState } from 'react';
import BurgerMenu from 'react-burger-menu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = (state) => {
        setIsOpen(state.isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <BurgerMenu
                isOpen={isOpen}
                onStateChange={handleStateChange}
                right={false}
                width={200}
                height={50}
                customBurgerIcon={<img src="your-icon-source" alt="icon" />}
                styles={{
                    bmBurgerButton: {
                        position: 'fixed',
                        width: '36px',
                        height: '30px',
                        right: '36px',
                        top: '36px',
                    },
                    bmBurgerBars: {
                        background: '#373a47',
                    },
                    bmCrossButton: {
                        height: '24px',
                        width: '24px',
                    },
                    bmCross: {
                        background: '#bdc3c7',
                    },
                    bmMenuWrap: {
                        position: 'fixed',
                        height: '100%',
                    },
                    bmMenu: {
                        background: '#373a47',
                        padding: '2.5em 1.5em 0',
                        fontSize: '1.15em',
                    },
                    bmMorphShape: {
                        fill: '#373a47',
                    },
                    bmItemList: {
                        color: '#b8b7ad',
                        padding: '0.8em',
                    },
                    bmItem: {
                        display: 'block',
                        padding: '0.5em',
                    },
                    bmOverlay: {
                        background: 'rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <div className="sidebar-item">
                    <i className="icon icon-home" />
                    <span className="item-name">Home</span>
                </div>
                <div className="sidebar-item">
                    <i className="icon icon-settings" />
                    <span className="item-name">Settings</span>
                </div>
                <div className="sidebar-item">
                    <i className="icon icon-help" />
                    <span className="item-name">Help</span>
                </div>
            </BurgerMenu>
            <div id="page-wrap" onClick={closeSidebar}>
                {/* Your main content goes here */}
            </div>
        </div>
    );
};

export default Navbar;
