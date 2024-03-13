import React, {useContext, useState} from 'react';
import './CartItems.css'
import {ShopContext} from "../../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'
import PopUpConfirm from "../PopUp_Confirm/PopUp_Confirm";


const CartItems = () => {

    let {all_product, cartItems, removeFromCart, getTotalCartAmount, removeAllFromCart} = useContext(ShopContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleConfirmOrder = () => {
        setIsModalOpen(true);
        removeAllFromCart()
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                  <p>Products</p>
                  <p>Title</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                if(cartItems[e.id]>0){
                 return <div>
                           <div className="cartitems-format cartitems-format-main">
                               <img src={e.image} alt="" className='carticon-product-icon'/>
                               <p>{e.name}</p>
                               <p>${e.new_price}</p>
                               <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                               <p>${e.new_price*cartItems[e.id]}</p>
                               <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
                           </div>

                           <hr/>
                       </div>
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>
                                Subtotal
                            </p>
                            <p>
                                ${getTotalCartAmount()}
                            </p>
                        </div>

                        <hr/>
                       <div className="cartitems-total-item">
                           <p>
                               Shipping Fee
                           </p>
                           <p>
                               Free
                           </p>
                       </div>

                        <hr/>
                           <div className="cartitems-total-item">
                               <h3>Total</h3>
                               <h3>${getTotalCartAmount()}</h3>
                           </div>
                    </div>

                    <button className={'cartitems-proceed-to-checkout'} onClick={handleConfirmOrder} disabled={getTotalCartAmount() === 0}>{
                        getTotalCartAmount() === 0 ? <p>NO ITEMS IN CART</p> :
                        <p>PROCEED TO CHECKOUT</p>
                    }</button>
                    <PopUpConfirm isOpen={isModalOpen} onClose={closeModal}/>

                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default CartItems;
