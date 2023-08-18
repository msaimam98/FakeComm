import {React, useState, useEffect} from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import storeItems from '../../assets/data/items.json';

const Thanks = () => {
    const { closeCart, cartItems, setCartItems } = useShoppingCart();
    const [newCartItems, setNewCartItems] = useState([]);

    useEffect(() => {
        setNewCartItems(cartItems)
        setCartItems([])

    }, []);

  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
        <h1 style={{ fontFamily: "monospace"}}> Your total was 
            ${ newCartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            }</h1> <br />
        <h3> Thank you so much for shopping with FakeEcomm :)</h3>
      
    </div>
  )
}

export default Thanks
