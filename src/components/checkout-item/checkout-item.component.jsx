import './checkout-item.styles.scss'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({cartItem}) => {
    const { addItemToCart, removeItemFromCart} = useContext(CartContext);
    const {name, imageUrl, price, quantity,tax} = cartItem;

    const addItemHandler = () => addItemToCart(cartItem);
    const reomveItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => removeItemFromCart(cartItem, true);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={reomveItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price*quantity} + {Math.round(price*quantity*tax * 100)/100}</span>

            <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem