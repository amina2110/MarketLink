import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/clothes_banner.webp'
import women_banner from './Components/Assets/shoes_banner.jpg'
import kids_banner from './Components/Assets/accessories_banner.webp'
import Sidebar from "./Components/Sidebar/Sidebar";



function App() {
  return (
    <div>

        <BrowserRouter>
            <Navbar/>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<Shop/>}/>

                <Route path='/clothes' element={<ShopCategory banner={men_banner} category='clothes'/>}/>
                <Route path='/shoes' element={<ShopCategory banner={women_banner} category='shoes'/>}/>
                <Route path='/accessories' element={<ShopCategory banner={kids_banner} category='accessories'/>}/>

                <Route path='/product' element={<Product/>}>
                    <Route path=':productId' element={<Product/>}/>
                </Route>

                <Route path='/cart' element={<Cart/>}/>

                <Route path='/login' element={<LoginSignup/>}/>

            </Routes>

            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
