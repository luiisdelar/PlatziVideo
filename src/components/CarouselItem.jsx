import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src='src/assets/images/randy.jpg' alt="Imagen.png"/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__datails--img" src='src/assets/images/play.png' alt="Play Icon"/>
                <img className="carousel-item__datails--img" src='src/assets/images/plus.png' alt="Plus Icon"/>
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2020 18+ 120 minutos</p>
        </div>
    </div>
);

export default CarouselItem;