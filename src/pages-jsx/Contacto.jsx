import {useForm } from "react-hook-form";


const Contacto = () => {

const {register, handleSubmit} =useForm ();

const enviar = (dataformulario) => {
  console.log (dataformulario);
}

  return (
    <div>
      <div className="container-formulario">
    <h1 className="titulos">Contacto</h1>

    <form className="formulario" onSubmit={handleSubmit(enviar)}>
    <input type="text" placeholder="Ingresa tu Nombre" {...register("nombre")}  />
    <input type="email" placeholder="Ingresa tu Email" {...register("email")}  />
    <input type="phone" placeholder="Ingresa tu Teléfono" {...register("teléfono")}  />

    <button className="boton-enviar" type="submit">Enviar</button>

    </form>

      </div>
    </div>
  )
}

export default Contacto
