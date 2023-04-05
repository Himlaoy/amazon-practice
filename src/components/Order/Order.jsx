import React from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const card = useLoaderData()
    return (
        <div className='card-Detail'>
            <div >
                <h2>Product length : {card.length}</h2>
            </div>
            <div className='cart-part'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;