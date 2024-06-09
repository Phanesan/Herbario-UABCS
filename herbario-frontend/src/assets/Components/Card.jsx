import React from 'react';

const Card = ({ nombreCientifico, nombrePila, fechaObservacion }) => {
  return (
    <div className="bg-[#F2FBF2] p-4 rounded-lg shadow-xl w-80 h-90">
      <div className="h-60 bg-gray-200 rounded-md mb-4 cursor-pointer"></div>
      <h3 className="text-lg font-bold cursor-pointer">{nombreCientifico}</h3>
      {nombrePila && <p className="text-sm text-gray-500">{nombrePila}</p>}
      {fechaObservacion && <p className="text-sm text-gray-500">{fechaObservacion}</p>}
    </div>
  );
};

export default Card;
