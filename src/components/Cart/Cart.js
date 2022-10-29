import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveItem}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please buy at least one item</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h3>Buy one for me</h3>
        </div>
    }
    else{
        message = <p>Thanks for buy</p>
    }

    return (
        <div>
            <h3 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summary</h3>
            <h5 className={`bold ${cart.length === 3 ? 'orange' : 'blue'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}>
                    {tshirt.name} 
                    <button onClick={()=> handleRemoveItem(tshirt)}>X</button>
                </p>)
                
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>you buy three item</p> : <p>you should buy more item</p> 
            }
            <p>AND operator</p>
            {cart.length === 2 && <h2>Double Item</h2>}
            <p>OR operaton</p>
            {cart.length ===4 || <h6>Not four item</h6>}
        </div>
    );
};

export default Cart;

/* 
1. simple if else
*/