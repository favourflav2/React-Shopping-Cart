import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function FirstPage() {
  return (
    <div className='firstPage'>
        <Link to="/home"><button className='view'>View Catalog</button></Link>
      
    </div>
  )
}

export default FirstPage
