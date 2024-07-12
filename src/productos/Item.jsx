import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from "../context/CartContext";

const Item = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handleSumar = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1);
  }

  return (
    <div className='producto'>
      <img src={producto.imagen} alt={producto.titulo} />
      <div className='centrar-contenido'>
        <p>{producto.titulo}</p>
        <h3>$ {producto.precio}</h3>
        <div className='div-carrito'> 
        <div className='centrar-contenido'>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => agregarAlCarrito(producto, cantidad)}
          />
          <button className='boton-productos'>
          <Link className='vermas' to={`/item/${producto.id}`}>Ver más</Link> 
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Item;
