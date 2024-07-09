import React from 'react'
import imagen1 from '../../public/imagen1.webp'
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
    <img src={imagen1} alt="imagen inicio" />
    </div>

    </section>
  )
}

export default Inicio
