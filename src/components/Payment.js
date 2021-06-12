import React, { useState, useEffect } from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom'
import './Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from '../Reducer'
import axios from '../axios';
import { db } from '../firebase';
const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();

    const stripe = useStripe();
    const elememts = useElements();

    const [error, setError] = useState(null);
    const [disabled, setdisabled] = useState(true);
    const [processing, setprocessing] = useState('');
    const [succeeded, setsucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in currency
                url: `/payments/create?total=${(getBasketTotal(basket) * 100)} `
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log('the secret', clientSecret)
    console.log('user', user.uid)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setprocessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elememts.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment is the payment confirmation
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setsucceeded(true);
            setError(null);
            setprocessing(false);
            dispatch({
                type: "EMPTY_BASKET",
            })
            history.replace('/orders');
        })

    }
    const handleChange = (e) => {
        setdisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className='payment__container'>
                <h1>Checkout ({<Link to="/checkout">{basket?.length} items</Link>})</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>lorem ip aser</p>
                        <p>ipcse spee, raer</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/*stfu*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement className="payment__card" onChange={handleChange} />
                            <div className='payment__pricecontainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"} />
                                <button className="payment__button" type="submit" disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors*/}
                            {error && <div>{error}</div>}
                            <h3>Sample Card: <span> 4242424242424242</span></h3>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Payment
