import React, {createContext, useEffect, useState} from "react";
import loginSignup from "../Pages/LoginSignup";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < 300+1; i++) {
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [all_product, setAllProduct] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart)

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data) => setAllProduct(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: ""
            }).then((response) => response.json())
                .then((data) => setCartItems(data))
        }
    }, [])


    const addToCart = (itemId, quantity) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+quantity}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "itemId": itemId
                })

            })
                .then((response) => response.json())
                .then((data) => console.log(data))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removeallfromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "itemId": itemId
                })

            })
                .then((response) => response.json())
                .then((data) => console.log(data))
        }
    }

    const removeAllFromCart = () => {
        setCartItems(getDefaultCart)
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },

            })
                .then((response) => response.json())
                .then((data) => console.log(data))
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        removeAllFromCart}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
