import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCard = useLoaderData()
    const [card, setCard] = useState(saveCard)
    const handleDelete=(id)=>{
        const remaining = card.filter(pd=>pd.id!==id)
        setCard(remaining)
        removeFromDb(id)
    }
    return (
        <div className='card-Detail'>
            <div >
                {
                    card.map(Product=><ReviewItem product={Product} key={Product.id} handleDelete={handleDelete}></ReviewItem>)
                }
            </div>
            <div className='cart-part'>
                <Cart cart={card}></Cart>
            </div>
        </div>
    );
};

export default Order;