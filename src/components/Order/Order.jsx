import React from 'react';
import Cart from '../Cart/Cart';
import './Order.css'

const Order = () => {
    return (
        <div className='card-Detail'>
            <div>
                <h2>This is my product</h2>
            </div>
            <div>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;