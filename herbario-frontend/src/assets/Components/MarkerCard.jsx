import React from "react";
import useCardStore from "../../Global/CardStore";

function MarkerCard({ nombreCientifico }) {
  const { setView, view, data } = useCardStore((state) => state);
  const handlerClick = () => {
    setView(!view);
    console.log(data);
  };

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-2xl w-[400px] h-full flex flex-col border border-zinc-200">
      <div
        className="absolute top-2 left-2 cursor-pointer"
        onClick={handlerClick}
      >
        <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="h-60 bg-gray-200 rounded-md mb-4 overflow-hidden">
        <img
          src={`${import.meta.env.VITE_API_ROUTE}files/${data.imagenes.rutas[0]}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <h1 className="text-lg font-bold">Identificador</h1>
        <h3 className="text-lg text-zinc-600 cursor-pointer">
          {data.identificador}
        </h3>
        <h1 className="text-lg font-bold">Fecha Colecta</h1>
        <h3 className="text-lg text-zinc-600 cursor-pointer">
          {data.fecha_colecta}
        </h3>
        <h1 className="text-lg font-bold">Latitud</h1>
        <h3 className="text-lg text-zinc-600 cursor-pointer">{data.latitud}</h3>
        <h1 className="text-lg font-bold">Longitud</h1>
        <h3 className="text-lg text-zinc-600 cursor-pointer">
          {data.longitud}
        </h3>
        <h1 className="text-lg font-bold">Ubicación</h1>
        <h3 className="text-lg text-zinc-600 cursor-pointer">
          {data.ubicacion}
        </h3>
        <h1 className="text-lg font-bold">Localidad</h1>
        <h3 className="text-lg text-zinc-600 cursor-pointer">
          {data.localidad}
        </h3>
        <h1 className="text-lg font-bold">Colector</h1>
        <h3 className="text-lg text-zinc-600 cursor-pointer">
          {data.colector}
        </h3>
      </div>
    </div>
  );
}

export default MarkerCard;
