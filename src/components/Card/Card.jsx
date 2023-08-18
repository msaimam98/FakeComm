import React from 'react'
import {Button, Card as CardBS} from 'react-bootstrap'
import { useContext } from 'react'
import AuthContext from '../../context/context'
import './card.css'
import { useShoppingCart } from '../../context/ShoppingCartContext'

const Card = ({id, title, price, description, image}) => {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()
      const quantity = getItemQuantity(id)

    const { itemTracker, setItemTracker } = useContext(AuthContext);

  return (
    <div>
        <CardBS style={{
            height: "100vh"
        }} className=''>
            <CardBS.Img variant='top' src={image} height="200px" style={{objectFit: "cover"}} />
            <CardBS.Body className='d-flex flex-column h-100'>
                <CardBS.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
                     <span className='fs2'>{title}</span>
                     <span className='ms-2 text-muted'>${price}</span>
                </CardBS.Title>
                <CardBS.Text>{description} </CardBS.Text>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button variant="outline-primary" onClick={() => increaseCartQuantity(id)} className=""> Add To Bag</Button>

                    ) : (
                        <>
                        <div className='d-flex align-items-center flex-column' style={{gap: ".5rem"}}>
                            <div className='d-flex align-items-center'>
                                <Button className="m-3" onClick={() => decreaseCartQuantity(id)}>-</Button>
                                    {quantity}
                                <Button className='m-3' onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                        </div>
                        {/* <div className='d-flex align-items-center justify-content-flex-end'>
                          <Button variant='outline-danger'>Remove</Button>
                        </div> */}
                        </>
                    )}

                </div>
                <div></div>





            </CardBS.Body>


        </CardBS>
      
    </div>
  )
}

export default Card
