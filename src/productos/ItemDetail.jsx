import ItemCount from "./ItemCount";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";



const ItemDetail = ( { item }) => {

  const { carrito, agregarAlCarrito}  = useContext(CartContext);


    const [cantidad, setCantidad] = useState (1);
    
    const handleRestar = () => {
      cantidad > 1 && setCantidad (cantidad-1)
    }
    
    const handleSumar = () => {
    
    cantidad < item.stock &&  setCantidad (cantidad+1)
    }


return (
  <section className="centrar-contenido">
    <div className="container-producto-detail">

    <div className='producto-detail'>
      <img src={item.imagen}/>
      <div className="producto-detail-div">
        <h4>{item.titulo}</h4>
        <p>Categoría: {item.categoria}</p>
        <p>Descripción: {item.descripcion}</p>
        <p>Precio: $ {item.precio}</p>
        <ItemCount 
        cantidad={cantidad} 
        handleSumar={handleSumar}  
        handleRestar={handleRestar} 
        handleAgregar={() => {agregarAlCarrito (item,cantidad)}}/>
      </div>
    </div>
    </div>

    <div className="centrar-contenido espacios-verticales">
      <Link to="/"><button className="boton-comenzar">Volver</button></Link>
    </div>
    </section>
)
}

export default ItemDetail;