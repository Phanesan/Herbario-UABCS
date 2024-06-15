import React, { useEffect, useState } from "react";
import {
  fetchObservationAPI,
  fetchSendImage,
} from "../Services/HerbarioService";
import MapRegisterView from "../Mapa/MapRegisterView";
import ImageUpload from "../assets/Components/ImageUpload";
import { fetchPlanta } from "../Services/HerbarioService";
import { fetchUnicaPlanta } from "../Services/HerbarioService";
import { Navigate, useNavigate } from "react-router-dom";

function RegisterObservation() {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [selectedPlanta, setSelectedPlanta] = useState("");
  const [arrayPlantas, setArrayPlantas] = useState([]);
  const navigate = useNavigate();

  const [observationForm, setObservationForm] = useState({
    localidad: "",
    ubicacion: "",
    latitud: "",
    longitud: "",
    fisiografia: "",
    fecha_colecta: "",
    colector: "",
    identificador: "",
    id_plantas: "",
    imagenes: {
      rutas: [],
    },
  });

  useEffect(() => {
    const getPlantas = async () => {
      const plantasData = await fetchPlantasData();
      setArrayPlantas(plantasData);
    };
    getPlantas();
  }, []);

  const fetchPlantasData = async () => {
    try {
      const response = await fetchPlanta();
      return response.message;
    } catch (error) {
      console.error("Error fetching plantas data:", error);
      return [];
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObservationForm((prevData) =>
      name !== "vulnerada"
        ? {
            ...prevData,
            [name]: value,
          }
        : { ...prevData, [name]: value === "on" }
    );

    if (name === "latitud" || name === "longitud") {
      setCoords((prevCoords) => ({
        ...prevCoords,
        [name]: parseFloat(value),
      }));
    }
  };

  async function handleRegisterObservation() {
    const formData = new FormData();
    formData.append("img", image);
    const images = await fetchSendImage(formData);
    const infoPlantita = await fetchUnicaPlanta(selectedPlanta);
    const observationData = {
      ...observationForm,
      id_plantas: infoPlantita.message[0].id,
      imagenes: { rutas: images.filePath },
    };

    console.log(observationData);
    const response = await fetchObservationAPI(observationData);
    navigate("/");
  }

  const handleMarkerClick = ({ lat, lng }) => {
    setCoords({ lat: lat.toFixed(6), lng: lng.toFixed(6) });
    setObservationForm((prevData) => ({
      ...prevData,
      latitud: lat.toFixed(6),
      longitud: lng.toFixed(6),
    }));
  };

  const handleInputCoordChange = (e) => {
    const { name, value } = e.target;
    setCoords((prevCoords) => ({
      ...prevCoords,
      [name]: parseFloat(value),
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 min-h-screen items-center justify-center bg-[#B9E2BC]">
      <div className="w-full px-6 py-12 bg-white rounded-lg shadow-md">
        <h2 className="mt-0 mb-8 text-3xl font-bold leading-9 text-gray-900 pl-6">
          Registro de Observación
        </h2>

        <div className="grid grid-cols-3 gap-2">
          <div>
            {/* LOCALIDAD */}
            <div className="mb-4">
              <label
                htmlFor="Localidad"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Localidad
              </label>
              <input
                id="localidad"
                name="localidad"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>

            {/* UBICACIÓN */}
            <div className="mb-4">
              <label
                htmlFor="Ubicación"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ubicación
              </label>
              <input
                id="ubicacion"
                name="ubicacion"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>

            {/* LATITUD */}
            <div className="mb-4">
              <label
                htmlFor="Latitud"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Latitud - Colocar Marcador en el mapa
              </label>
              <input
                id="latitud"
                name="latitud"
                type="text"
                autoComplete="off"
                required
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                value={coords.lat || ""}
                onChange={handleInputCoordChange}
              />
            </div>

            {/* LONGITUD */}
            <div className="mb-4">
              <label
                htmlFor="Longitud"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Longitud - Colocar Marcador en el mapa
              </label>
              <input
                id="longitud"
                name="longitud"
                type="text"
                autoComplete="off"
                required
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                value={coords.lng || ""}
                onChange={handleInputCoordChange}
              />
            </div>

            {/* FISIOGRAFIA */}
            <div className="mb-4">
              <label
                htmlFor="fisiografia"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fisiografía
              </label>
              <input
                id="fisiografia"
                name="fisiografia"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>

            {/* IMAGENES */}
            <div className="mb-4">
              <label
                htmlFor="imagenes"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fotografía
              </label>
              <input
                id="imagenes"
                name="imagenes"
                type="file"
                accept="image/*"
                required
                className="block w-full text-gray-900"
                onChange={handleImageChange}
              />
              {image && (
                <div className="mt-4">
                  <img
                    src={previewImage}
                    alt="Uploaded"
                    className="w-full h-auto border-2 border-zinc-300 shadow-xl"
                    style={{ maxWidth: "110vw", maxHeight: "50vh" }}
                  />
                </div>
              )}
            </div>
          </div>
          <div>
            {/* FECHA DE COLECTA */}
            <div className="mb-4">
              <label
                htmlFor="fecha_colecta"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Fecha de Colecta
              </label>
              <input
                id="fecha_colecta"
                name="fecha_colecta"
                type="date"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>

            {/* COLECTOR */}
            <div className="mb-4">
              <label
                htmlFor="colector"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre del Colector
              </label>
              <input
                id="colector"
                name="colector"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>

            {/* IDENTIFICADOR */}
            <div className="mb-4">
              <label
                htmlFor="identificador"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre del Identificador
              </label>
              <input
                id="identificador"
                name="identificador"
                type="text"
                autoComplete="off"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                onChange={handleChange}
              />
            </div>

            {/* ID PLANTAS */}
            <div className="mb-4">
              <label
                htmlFor="id_plantas"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Planta
              </label>
              <select
                className="border border-gray-300"
                value={selectedPlanta}
                onChange={(e) => setSelectedPlanta(e.target.value)}
              >
                <option value="">Seleccionar Planta</option>
                {arrayPlantas.map((planta) => (
                  <option key={planta.id} value={planta.nombre_cientifico}>
                    {planta.nombre_cientifico}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mapa */}
          <div className="max-w-[110vw] max-h-[40vh] overflow-hidden border-2 border-zinc-300 shadow-xl">
            <MapRegisterView
              onMarkerClick={handleMarkerClick}
              setCoords={setCoords}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            className="w-full py-2 text-white bg-green-600 rounded-md font-semibold hover:bg-green-700 transition duration-300"
            type="submit"
            onClick={handleRegisterObservation}
          >
            Registrar Observacion
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterObservation;
