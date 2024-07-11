import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Carrousel from './components/Carrousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from "react-router-dom"
import { useState } from "react";
import { CartContext } from "./context/CartContext.jsx";



function App (){

const [carrito, setCarrito] = useState ([]);


const agregarAlCarrito = (item,cantidad) => {
  const itemAgregado = {...item, cantidad};

  const nuevoCarrito = [...carrito];

  const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id );


if (estaEnElCarrito){
estaEnElCarrito.cantidad += cantidad;
}else {
  nuevoCarrito.push(itemAgregado);
  }
  setCarrito(nuevoCarrito);
}

const cantidadProductos = () => {
  return carrito.reduce ((acc, prod)=> acc + prod.cantidad, 0);
}

const precioTotal = () => {
  return carrito.reduce ((acc,prod)=> acc + prod.precio * prod.cantidad,0);
  }

const vaciarCarrito = () => { 
  setCarrito ([]);
}


  return (
  <div>

<CartContext.Provider value={{carrito, agregarAlCarrito, cantidadProductos, precioTotal, vaciarCarrito}}>
  <BrowserRouter>
  <Header/>
  <Main/>
  <Carrousel/>
  <Footer/>

  </BrowserRouter>
  </CartContext.Provider>
  </div>
  )
}

export default App;
