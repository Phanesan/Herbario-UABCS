// PlantView.jsx
import React from 'react';
import plantImage from '../assets/icons/calabazashina.png';
import ImageSlider from '../assets/Components/ImageSlider';

const PlantView = () => {
    return (
        <div className="flex flex-col lg:flex-row p-4 bg-green-100 min-h-screen">
            <div className="flex-1 flex flex-col items-center lg:items-start border-r border-zinc-800 bg-green-100">
                <div className="flex justify-center w-full">
                    <ImageSlider></ImageSlider>
                </div>
                <h1 className="text-3xl font-bold mt-4 italic text-gray-800">Nombre cientifico de planta</h1>
                <div className="bg-white p-4 rounded shadow mt-4 w-11/12">
                    <p className="text-lg text-gray-700">No. total de observaciones</p>
                    <p className="text-sm text-gray-700">Nombre de pila o comun</p>
                    <ul className="list-disc list-inside text-gray-700">
                    </ul>
                </div>
            </div>
            <div className="flex-1 mt-4 lg:mt-0 lg:ml-4 space-y-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <h2 className="text-lg font-bold text-gray-700">Observacion Ejemplo {index + 1}</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Fecha</li>
                            <li>Lugar</li>
                            <li>Observador</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantView;
