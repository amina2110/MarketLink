import React, {useContext, useRef, useState} from 'react';
import './Navbar.css'
import logo from '../Assets/Снимок экрана 2024-02-14 191456.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext";
import nav_dropdown from "../Assets/dropdown_icon.png"
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

    const [menu, setMenu] = useState("Shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef(null)

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <div className='navbar'>

            <button className="burger-button" onClick={toggleSidebar}>
                &#9776; {/* This is the burger icon */}
            </button>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />




            <div className="nav-logo">
                <img src={logo} alt=''/>
                {/*<p>Duken</p>*/}
            </div>

            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>

            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("clothes")}}><Link style={{ textDecoration: 'none' }} classname='link' to='/clothes'>Clothes</Link> {menu==="clothes"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("shoes")}}><Link style={{ textDecoration: 'none' }} classname='link' to='/shoes'>Shoes</Link> {menu==="shoes"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("accessories")}}><Link style={{ textDecoration: 'none' }} classname='link' to='/accessories'>Accessories</Link> {menu==="accessories"?<hr/>:<></>}</li>
            </ul>

            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?
                    <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>
                    Logout
                    </button>
                :
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                }



                <Link to='/cart'>
                    <img src={cart_icon} alt=''/>
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>



        </div>
    );
};

export default Navbar;
