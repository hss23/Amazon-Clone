/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Product.css"
function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log("this is >>", basket);
    const addToBasket = () => {

        //dispatch data to datalayer
        dispatch({

            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>

                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
                </div>
            </div>

            <img src={image} />
            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product
