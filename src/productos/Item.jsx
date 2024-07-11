import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (
    <div className='producto'>
      <img src={producto.imagen}/>
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: $ {producto.precio}</p>
        <div className='centrar-contenido'>
        <button className='boton-productos'> 
        <Link className='vermas' to={`/item/${producto.id}`}>Ver más</Link>   
        </button>
        </div>
      </div>
    </div>
  )
}

export default Item
