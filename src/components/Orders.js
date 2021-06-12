import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import './Orders.css';
import { useStateValue } from '../StateProvider';
import Order from './Order';
export const Orders = () => {
    const [orders, setorders] = useState([])
    const [{ basket, user }, dispatch] = useStateValue();
    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setorders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setorders([])
        }
    }, [user])
    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}
