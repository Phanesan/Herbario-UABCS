import React from "react";
import plantImage from "../assets/icons/calabazashina.png";
import ImageSlider from "../assets/Components/ImageSlider";
import MapView from "../Mapa/Mapview";
import {
  Navigate,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { fetchUnicaPlanta } from "../Services/HerbarioService";
import { useEffect, useState } from "react";

const PlantView = () => {
  const [selectedPlanta, setSelectedPlanta] = useState("");
  const { nombre_cientifico } = useParams();

  useEffect(() => {
    console.log(nombre_cientifico);
    const getPlanta = async () => {
      const response = await fetchUnicaPlanta(nombre_cientifico);
      setSelectedPlanta([response.message[0], response.relations]);
      console.log(selectedPlanta);
      console.log(response);
    };
    getPlanta();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row p-4 bg-green-100 min-h-screen">
      <div className="flex-1 flex flex-col items-center lg:items-start border-r border-zinc-800 bg-green-100">
        <div className="flex justify-center w-full">
          <ImageSlider observaciones={selectedPlanta[1]}></ImageSlider>
        </div>
        <h1 className="text-3xl font-bold mt-4 italic text-gray-800">
          {selectedPlanta[0]?.nombre_cientifico}
        </h1>
        <div className="bg-white p-4 rounded shadow-2xl mt-4 w-11/12">
          <p className="text-lg text-gray-700 font-bold">Nombre comun</p>
          <p className="text-lg text-gray-500">
            {selectedPlanta[0]?.nombre_comun}
          </p>
          <p className="text-lg text-gray-700 font-bold">Forma Biologica</p>
          <p className="text-lg text-gray-500">
            {selectedPlanta[0]?.forma_biologica}
          </p>
          <p className="text-lg text-gray-700 font-bold">Tipo de Vegetación</p>
          <p className="text-lg text-gray-500">
            {selectedPlanta[0]?.tipo_vegetacion}
          </p>
          <p className="text-lg text-gray-700 font-bold">
            Información Adicional
          </p>
          <p className="text-sm text-gray-500">
            {selectedPlanta[0]?.informacion_adicional}
          </p>
          <ul className="list-disc list-inside text-gray-700"></ul>
        </div>
      </div>
      <div className="flex-1 mt-4 lg:mt-0 lg:ml-4 space-y-4">
        <div className="max-w-[110vw] max-h-[70vh] overflow-hidden border-2 border-zinc-300 shadow-xl">
          <MapView></MapView>
        </div>
      </div>
    </div>
  );
};

export default PlantView;
