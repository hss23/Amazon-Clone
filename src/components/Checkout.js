/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move'
const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            {/* <div className="carousal">
                <img className="adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg" />
            </div> */}
            <div className="checkout__left">
                <div className="checkout__title">
                    <h3>Checkout {user ? user.email : 'Guest'}</h3>
                    <h2>Shopping Cart</h2>

                </div>

                {
                    basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))
                }
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
