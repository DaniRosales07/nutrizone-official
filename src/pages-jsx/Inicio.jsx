import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <section className='grid2'>
    <div>
      <h1 className='titulos'>Bienvenidos a Nutrizone</h1>
      <h4 className='espacios-verticales'>El lugar donde compras sano, rico y con la mejor calidad</h4>
      <Link to="/productos/frutos-secos" ><button className='boton-comenzar'>Comenzar</button> </Link>
    </div>
    <div>
    <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/imagen1.webp?alt=media&token=3bf94130-c90c-4ad4-a1f6-4e4c60a7aa69" alt="imagen inicio" />
    </div>

    </section>
  )
}

export default Inicio
