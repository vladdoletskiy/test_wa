import React from 'react';
import "./gallery.style.css";
import foto from "./img/g4.png";
import foto2 from "./img/g7.jpg";
import foto3 from "./img/g3.jpg";
import foto4 from "./img/g5.jpg";


const Gallery  = () => {
  return (
    <div className="fotorama"
    data-transition="crossfade"
    data-loop="true">
    <img src = {foto} alt = "Упс"/>
    <img src = {foto3} alt = "Упс"/>
    <img src = {foto4} alt = "Упс"/>
    <img src = {foto2} alt = "Упс"/>
  </div>
  )
};

export default Gallery;
