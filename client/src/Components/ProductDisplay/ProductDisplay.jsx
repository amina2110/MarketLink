import React, {useContext, useState} from 'react';
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import {ShopContext} from "../../Context/ShopContext";

const ProductDisplay = (props) => {

    const {product} = props
    const {addToCart} = useContext(ShopContext)

    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">

                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt=""/>
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>

                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel felis id leo volutpat fermentum eget vitae urna. Phasellus tristique sed justo eleifend pellentesque. Sed sit amet nunc ut nunc posuere consequat a quis libero. Proin semper laoreet venenatis. Aenean quis tortor rhoncus, rutrum tellus posuere, feugiat tellus. Morbi tempor in dolor non scelerisque.
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>



                <div className={'productdisplay-add-to-cart'}>
                    <button className={'productdisplay-change-quantity'} onClick={decreaseQuantity}>-</button>

                 <input
                    className={'productdisplay-quantity'}
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} />

                    <button className={'productdisplay-change-quantity'} onClick={increaseQuantity}>+</button>

                <button className={'productdisplay-addtocart'} onClick={() => addToCart(product.id, quantity)}>ADD TO CART</button>
                </div>


                <p className='productdisplay-right-category'>
                    <span>Category:
                    <span>
                        T-shirt Top
                    </span>
                    </span>
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags:
                    <span>
                        Modern, Latest
                    </span>
                    </span>
                </p>
            </div>

        </div>
    );
};

export default ProductDisplay;
