import React from 'react'
import { CartState } from '../Context/Context'
import SingleCard from './SingleCard'

function Home() {
    
    const {state:{products}} =  CartState()
    
    
  return (
    <div className='home'>
        <div className='productContainer'>
            {products.map((item)=>{
                return <SingleCard product={item} key={item.id}/>
            })}
        </div>
      
    </div>
  )
}

export default Home
