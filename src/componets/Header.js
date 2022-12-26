import React from 'react'
import { Container, Navbar,NavDropdown, Nav, Button,FormControl, Dropdown,Badge } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import { CartState } from '../Context/Context'
import { AiFillDelete } from 'react-icons/ai'


function Header() {

    const {state:{cart}, dispatch} = CartState()
    
  return (
    <Navbar className='navBar' bg='dark' variant='dark' style={{height: 80}}>
        <Container>
            <Navbar.Brand>
                <div className='links'>
                <div className='link1'>
                <Link to="/">Home</Link>
                </div>
                <div className='link2'>
                <Link to="/home">Shopping Cart</Link>
                </div>
                </div>
                

            </Navbar.Brand>

            <Navbar.Text className='search'>
                <FormControl 
                style={{ width: 500}}
                placeholder="Search a product"
                className='m-auto'
                />
            </Navbar.Text>

            <Nav>
                <Dropdown align="right">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            cart.length > 0? 
                            (
                                <>
                                {
                                cart.map(item=>(
                                    <span className='cartItem' key={item.id}>
                                        <img src={item.url} className="cartImg"></img>
                                        <div className='cartItemDetail'>
                                            <span>{item.name}</span>
                                            <span>${item.price}</span>
                                        </div>
                                        <AiFillDelete onClick={()=>dispatch({
                                            type:"REMOVE_FROM_CART",
                                            payload: item
                                        })} />
                                    </span>
                                ))
                            }
                            <Link to="/cart">
                                <Button style={{ width: "90%", margin: "0 10px"}}>
                                    Go To Cart
                                </Button>
                            </Link>
                            </>
                            ) 
                            
                            
                            : (<span>The cart is empty</span>)
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>

    </Navbar>
  )
}

export default Header
