import React from "react";

function Carrousel ()
{
  return (


<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/banner1.png?alt=media&token=afd33a19-83e5-4764-877c-08cdecb51148" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/banner2.png?alt=media&token=afd33a19-83e5-4764-877c-08cdecb51148" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://firebasestorage.googleapis.com/v0/b/nutrizone-official.appspot.com/o/banner3.png?alt=media&token=afd33a19-83e5-4764-877c-08cdecb51148" className="d-block w-100" alt="..."/>
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