import { Action } from '@remix-run/router'
import React from 'react'
import { useActionData } from 'react-router-dom'

function cartReducer(state,action) {
  switch(action.type){
    case "ADD_TO_CART":
        return {
            ...state,
            cart:[...state.cart,{...action.payload, qty:1}]
        }
        case "REMOVE_FROM_CART":
            // if the action.payload. id !== cartVal.id... this simply means... we are going to take the action.payload(the value we click) and we are going to check if the value we click doesnt equal what is in the array
            //! the filter method is going to return all truthy values.... so if we have an array of [1,2,3,4] and we click on 4
            //* filter is going to check if 4 !== 1, that is true so we are going to return true.... we do this for every value
            // However since 4 !==4 is false we dont return 4... so our new array is going to be [1,2,3] 
            return{
                ...state,
                cart:state.cart.filter(cartVal=> cartVal.id !== action.payload.id)
            }
            case "INCREMENT":
                return {
                    ...state,
                    cart: state.cart.map(item=>{
                        if(item.id === action.payload.id){
                            item.qty += 0.5
                        }
                        return item
                    })
                }
                case "DECREMENT":
                    return{
                        ...state,
                        cart:state.cart.map(item=>{
                            if(item.id === action.payload.id){
                                if(item.qty > 0){
                                    item.qty += -0.5
                                }
                            }
                            return item
                        })
                    }
    default:
        return state
  }
}

export default cartReducer
