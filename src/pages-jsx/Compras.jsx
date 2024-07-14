import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Carrito = () => {
  
  const { register, handleSubmit, reset } = useForm();
  const [formData, setFormData] = useState(null);

  const enviar = (dataformulario) => {
    setFormData(dataformulario);
  };

  
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleFinalizarCompra = () => {
    if (!formData) {
      alert('Por favor, complete el formulario de contacto antes de finalizar la compra.');
      return;
    }

    const numeroTelefono = '+5492615022513';
    let mensaje = 'Hola, vengo del sitio web de Nutrizone, para realizar mi compra.%0A%0ADetalles del contacto:%0A';
    mensaje += `Nombre: ${formData.nombre}%0A`;
    mensaje += `Dirección: ${formData.direccion}%0A`;
    mensaje += `Teléfono: ${formData.telefono}%0A%0ADetalles de la compra:%0A`;

    carrito.forEach(prod => {
      mensaje += `Producto: ${prod.titulo}%0APrecioUnitario: $${prod.precio}%0ACantidad: ${prod.cantidad}%0APrecio Total: $${prod.precio * prod.cantidad}%0A%0A`;
    });

    mensaje += `Total de la compra: $${precioTotal()}`;

    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensaje}`;
    window.open(urlWhatsApp, '_blank');
  };

  
  return (
    <section>
      <div>
        <h1 className='titulos'>Tus Compras</h1>
        <h4 className='espacios-verticales titulos'>Recorda que todos los productos que aparecen, son por 1/2kg o por unidad</h4>

        <div className="container-formulario">
          <h1 className="titulos">Contacto</h1>
          <form className="formulario" onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder="Ingresa tu Nombre" {...register("nombre")} />
            <input type="text" placeholder="Ingresa tu direccion" {...register("direccion")} />
            <input type="phone" placeholder="Ingresa tu Teléfono" {...register("telefono")} />
            <button className="boton-enviar" type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className='grid2'>
        <div>
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
                <div>
                <h2 className='titulos'> ¿Aún no hay artículos? Continúa explorando para aprovechar todas nuestras ofertas  </h2>
                <Link to="/productos/frutos-secos"><button className='boton-comenzar'>Comenzar</button></Link>
                </div>
            }
          </div>
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/imagen1.webp?alt=media&token=3bf94130-c90c-4ad4-a1f6-4e4c60a7aa69" alt="imagen inicio" />
        </div>
      </div>
    </section>
  );
};

export default Carrito;