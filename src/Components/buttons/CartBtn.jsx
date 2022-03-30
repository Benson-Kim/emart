import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  // geta state of the addItems
  
  const state = useSelector((state) => state.addItem)
  return (
      <>
          <Link to="/cart" className='btn btn-outline-primary ms-2'>
        {/* <span className='fa fa-shopping-cart me-1'></span>Cart({state.length}) */}
        <i class="bi bi-bag me-1"></i>Cart(0)
          </Link>
    </>
  )
}

export default CartBtn