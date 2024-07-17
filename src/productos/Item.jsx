import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';

const Item = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handleSumar = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1);
  }

  const handleAgregar = () => {
    agregarAlCarrito(producto, cantidad);
    setCantidad(1); 
    Swal.fire({
      title: 'Agregado',
      text: 'El producto ha sido agregado al carrito.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
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
              handleAgregar={handleAgregar}
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
 
