import React from 'react'
import Item from './Item'


const ItemList = ({productos, titulo}) => {
  return (
    <div className='container-productos fondo-blanco'>
      <h2 className='titulos'>{titulo}</h2>
      <h4 className='espacios-verticales centrar-contenido'>Recorda que todos los productos que aparecen, son por 1/2kg o por unidad</h4>

      <div className='productos'>
        {productos.map((prod) => <Item producto= {prod} key={prod.id}  />)}
      </div>
    </div>
  )
}

export default ItemList
