import React from 'react';
import Card from './Card';

const CardGrid = () => {
  const cardsData = [
    { nombreCientifico: 'Nombre Cientifico', nombrePila: 'Nombre de pila', fechaObservacion: 'Fecha de observacion' },
    { nombreCientifico: 'Nombre Cientifico', nombrePila: 'Nombre de pila', fechaObservacion: 'Fecha de observacion' },
    { nombreCientifico: 'Nombre Cientifico', nombrePila: 'Nombre de pila', fechaObservacion: 'Fecha de observacion' },
    { nombreCientifico: 'Nombre Cientifico', nombrePila: 'Nombre de pila', fechaObservacion: 'Fecha de observacion' },
    { nombreCientifico: 'Nombre Cientifico', nombrePila: 'Nombre de pila', fechaObservacion: 'Fecha de observacion' },
    { nombreCientifico: 'Nombre Cientifico', nombrePila: 'Nombre de pila', fechaObservacion: 'Fecha de observacion' },
    { nombreCientifico: 'Nombre Cientifico', nombrePila: 'Nombre de pila', fechaObservacion: 'Fecha de observacion' },
  ];

  return (
    <div className="p-11">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cardsData.map((card, index) => (
          <Card 
            key={index} 
            nombreCientifico={card.nombreCientifico} 
            nombrePila={card.nombrePila} 
            fechaObservacion={card.fechaObservacion} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
