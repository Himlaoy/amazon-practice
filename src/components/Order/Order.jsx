import React from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const card = useLoaderData()
    return (
        <div className='card-Detail'>
            <div >
                {
                    card.map(Product=><ReviewItem product={Product} key={Product.id}></ReviewItem>)
                }
            </div>
            <div className='cart-part'>
                <Cart cart={card}></Cart>
            </div>
        </div>
    );
};

export default Order;