import React from "react";

function Carrousel ()
{
  return (


<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/2_1.webp?alt=media&token=764762b9-3f41-4c3e-8fee-4360a721eb0f" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/3_1.webp?alt=media&token=764762b9-3f41-4c3e-8fee-4360a721eb0f" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/4_1.webp?alt=media&token=764762b9-3f41-4c3e-8fee-4360a721eb0f" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

)
}

export default Carrousel;