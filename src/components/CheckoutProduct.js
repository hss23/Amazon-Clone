/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useStateValue } from '../StateProvider'
import "./CheckoutProduct.css"
const CheckoutProduct = ({ id, title, image, price, rating, hideButton }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove item from cart
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className='checkoutProduct'>
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <h2 className="checkoutProduct__title">{title}</h2>

                <p className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </p>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from Cart</button>)}
            </div>
            <div className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </div>
        </div>
    )
}

export default CheckoutProduct
