import React from 'react'


const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

  return (
    <div className='contenedor-item-count'>
      <div className='item-count'>

        <div className='sumador'>

        <button className='boton-contador' onClick={ handleRestar}>-</button>
        <h4>{cantidad}</h4>
        <button className='boton-contador' onClick={handleSumar}>+</button>

        </div>

      </div>
      <button className='agregar-carrito' onClick={handleAgregar}>Agregar</button>
    </div>
  )
}

export default ItemCount
