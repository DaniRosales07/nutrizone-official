import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'




const CartWidget = () => {

    const {cantidadProductos} = useContext (CartContext);

  return (
    <div className='carrito-navbar'>
        <Link to="/compras">
        <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/carrito.webp?alt=media&token=e061fdac-0181-43e1-846a-bc12df1004db" alt="" />
        <p>  {cantidadProductos()}</p>
        </Link>
    </div>
  )
}

export default CartWidget
