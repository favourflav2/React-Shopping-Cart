import React, { useEffect } from 'react'
import { Col, ListGroup, ListGroupItem, Row, Image,Button } from 'react-bootstrap'
import { CartState } from '../Context/Context'

function Cart() {
    const {state:{cart}, dispatch} = CartState()
    

    const [total, setTotal] = React.useState(0)
    
    useEffect(()=>{
        setTotal(cart.reduce((a,c)=>{
            return a + Number(c.price) * c.qty
        },0))
    })
  return (
    <div className='cartPage'>
      <div className='productContainer2'>
        <ListGroup>
            {
                cart.map(value=>(
                    <ListGroup.Item key={value.id}>
                        <Row>
                            <Col md={2}>
                                <Image fluid rounded src={value.url}/>
                            </Col>

                            <Col md={2}>
                                <span>{value.name} </span>
                            </Col>

                            <Col md={2}>
                                <span>{value.price} </span>
                            </Col>

                            <Col md={2}>
                                <div className='btn'>
                                <Button style={{marginRight:10}} variant='danger' onClick={()=>dispatch({
                                    type:"DECREMENT",
                                    payload:value
                                })}> -</Button>
                                <span>{value.qty}</span>
                                <Button style={{marginLeft:10}} variant='success' onClick={()=>dispatch({
                                    type:"INCREMENT",
                                    payload:value
                                })}> +</Button>
                                </div>
                                
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
      </div>
      <div className='totalPage'>
      <span className='title'>
        Subtotal ({cart.length}) items
        </span>
        <span style={{fontWeight: 700, fontSize: 20}}>Total: ${total.toFixed(2)}</span>
        <Button type="button" disabled={cart.length === 0}>
        Proceed To Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart
