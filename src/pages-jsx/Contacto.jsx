import React from 'react'
import { Link } from "react-router-dom";


const Contacto = () => {
  return (
    <div>
        <div className='espacio-costados'>
            <div>
                <h1 className="titulos">¡Hablemos! </h1>
                <h4 className="titulos">Estamos aquí para responder a todas tus preguntas, escuchar tus comentarios y atender tus necesidades. Si deseas ponerte en contacto con nosotros, podes hacerlo a través de los siguientes medios: </h4>
            </div>

            <div className='container-contactos'>
            <Link className="contactos" to="https://www.instagram.com/nutrizone.official?igsh=eDd5Znp5Z3ludDJj">
            <img className="imagen-contactos" src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/INSTA.png?alt=media&token=725432ff-d166-40b8-9cf6-29970b420c6f" alt="logo-instagram" title="logo-instagram"/>
            </Link>

            <Link className="contactos" to="mailto:nutrizone.official2024@gmail.com?subject=Consulta%20Web&body=%0Amailto:nutrizone.official2024@gmail.com?subject=Consulta%20Web&body=%0A">
            <img className="imagen-contactos" src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/MAIL.png?alt=media&token=725432ff-d166-40b8-9cf6-29970b420c6f" alt="logo-mail" title="logo-mail"/>
            </Link>

            <Link className="contactos" to="https://wa.link/l3c6tl">
            <img className="imagen-contactos" src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/WSP.png?alt=media&token=725432ff-d166-40b8-9cf6-29970b420c6f" alt="logo-whatsapp" title="logo-whatsapp"/>
            </Link>

            </div>
        </div>
    </div>
  )
}

export default Contacto
