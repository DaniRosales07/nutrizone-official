import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import imagen1 from '../../public/imagen1.webp'

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleFinalizarCompra = () => {
    const numeroTelefono = '+5492615022513';
    let mensaje = 'Hola, vengo del sitio web de Nutrizone, para realizar mi compra. Detalles de la compra:%0A';

    carrito.forEach(prod => {
      mensaje += `Producto: ${prod.titulo}%0APrecio Unitario: $${prod.precio}%0ACantidad: ${prod.cantidad}%0APrecio Total: $${prod.precio * prod.cantidad}%0A%0A`;
    });

    mensaje += `Total de la compra: $${precioTotal()}`;

    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <section>
      <div className='centrar-contenido'>
      <h1 className='titulos'>Tus Compras</h1>
      <h4 className='espacios-verticales titulos'>Recorda que todos los productos que aparecen, son por 1/2kg o por unidad</h4>
      </div>
      <div className='grid2'>
      <div>
      {
        carrito.map((prod) => (
          <div className='carrito-container' key={prod.id}>
            <h4>{prod.titulo}</h4>
            <p>Precio Uni: $ {prod.precio}</p>
            <p>Cant: {prod.cantidad}</p>
            <p>Precio Total: $ {prod.precio * prod.cantidad}</p>
            <br />
          </div>
        ))
      }
      {
        carrito.length > 0 ?
          <div className='total-compra'>
            <h3>Total Compra: $ {precioTotal()}</h3>
            <button className='boton-contador' onClick={handleFinalizarCompra}>Realizar Compra</button>
            <button className='boton-contador' onClick={handleVaciar}>Vaciar Carrito</button>
          </div> :
          <h2 className='titulos'>Aprovecha nuestras Ofertas</h2>
      }
      </div>
      <div>
      <img src={imagen1} alt="imagen inicio" />
    </div>
    </div>

    </section>
  );
};

export default Carrito;
