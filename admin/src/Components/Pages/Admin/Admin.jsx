import React from 'react';
import './Admin.css'
import Sidebar from "../../Sidebar/Sidebar.jsx";
import {Routes, Route} from "react-router-dom";
import AddProduct from "../../AddProduct/AddProduct.jsx";
import ListProduct from "../../ListProduct/ListProduct.jsx";
import Analytics from "../../Analytics/Analytics.jsx";

const Admin = () => {
    return (
        <div className='admin'>
            <Sidebar/>
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>}/>
                <Route path='/listproduct' element={<ListProduct/>}/>
                <Route path='/analytics' element={<Analytics/>}/>
            </Routes>

        </div>
    );
};

export default Admin;
