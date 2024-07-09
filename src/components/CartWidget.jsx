import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'




const CartWidget = () => {

    const {cantidadProductos} = useContext (CartContext);

  return (
    <div className='carrito-navbar'>
        <Link to="/compras">
        <img src="../public/carrito.png" alt="" />
        <p>  {cantidadProductos()}</p>
        </Link>
    </div>
  )
}

export default CartWidget
