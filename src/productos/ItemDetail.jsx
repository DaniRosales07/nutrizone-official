import ItemCount from "./ItemCount";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  }

  const handleAgregar = () => {
    agregarAlCarrito(item, cantidad);
    setCantidad(1); 
    Swal.fire({
      title: 'Agregado',
      text: 'El producto ha sido agregado al carrito.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  return (
    <section className="centrar-contenido">
      <div className="container-producto-detail">
        <div className='producto-detail'>
          <img src={item.imagen} alt={item.titulo} />
          <div className="producto-detail-div">
            <h4>{item.titulo}</h4>
            <p>Categoría: {item.categoria}</p>
            <p>{item.descripcion}</p>
            <h4>$ {item.precio}</h4>
            <ItemCount 
              cantidad={cantidad} 
              handleSumar={handleSumar} 
              handleRestar={handleRestar} 
              handleAgregar={handleAgregar} 
            />
          </div>
        </div>
      </div>
      <div className="centrar-contenido espacios-verticales">
        <Link to="/"><button className="boton-comenzar">Volver</button></Link>
      </div>
    </section>
  );
}

export default ItemDetail;