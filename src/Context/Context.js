import React, { createContext, useContext } from 'react'
import Data from '../componets/Data'
import cartReducer from './cartReducer'


const Cart = createContext()

function Context({children}) {

    const products = Data[0].data.map(item=>({
        id: item.id,
        url: item.avatar,
        price: Math.round(item.id * 5.2 * 100) / 100,
        name: item.first_name
    }))
    
    const [state, dispatch] = React.useReducer(cartReducer,{
        products: products,
        cart:[]
    })

  return (
    <Cart.Provider value={{state, dispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = ()=>{
    return useContext(Cart)
}