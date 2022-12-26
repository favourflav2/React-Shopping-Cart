import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Context/Context'

function SingleCard({product}) {
    const {state: {cart}, dispatch} = CartState()
    
  return (
    <div className='product'>
        <Card>
            <Card.Img  variant='top' src={product.url}/>
            <Card.Body>
                <Card.Title >{product.name}</Card.Title>
                <Card.Subtitle style={{paddingBottom: 10}}>
                    <span>${product.price}</span>
                </Card.Subtitle>
                {
                    //! We are going to loop through the cart using some... if the item from the cart matches the card that is being displayed we are going to change the display of the button
                    //* If the cart and card being displayd match it means that the card that matches is in the cart.. so we want change the button too remove from cart
                }
                {

                cart.some(newItem => newItem.id === product.id)?
                (<Button onClick={()=>dispatch({
                    type:"REMOVE_FROM_CART",
                    payload: product
                })}>Remove From Cart</Button>)
                :
                (<Button onClick={()=>dispatch({
                    type:"ADD_TO_CART",
                    payload: product
                })}>Add To Cart</Button>)

                }
            </Card.Body>
        </Card>
    </div>
  )
}

export default SingleCard
