import React, { useState } from 'react';
import { fetchRegisterPlantAPI } from '../Services/HerbarioService';

const RegisterPlant = () => {
    
    const [plantForm, setPlantForm] = useState({
        nombre_cientifico: "",
        nombre_comun: "",
        familia: "",
        forma_biologica: "",
        tipo_vegetacion: "",
        vulnerada: false,
        informacion_adicional: ""
      });

  const handleChange = (e) => {
      const { name, value } = e.target;
    setPlantForm((prevData) => (name != "vulnerada" ? {
      ...prevData,
      [name]: value ,
    }:{...prevData, [name]: value == "on" ?true:false}));
  };

  async function handleRegisterPlant() {
    console.log(plantForm)
      const response = await fetchRegisterPlantAPI(plantForm);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plantForm);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#B9E2BC]">
      <div className="w-full max-w-md px-6 py-12 bg-white rounded-lg shadow-md">
        <h2 className="mt-0 mb-8 text-3xl font-bold leading-9 text-gray-900 pl-6">
          Registro de Planta
        </h2>

          <div className="mb-4">
            <label htmlFor="scientificName" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre Científico
            </label>
            <input
              id="scientificName"
              name="nombre_cientifico"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="commonName" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre Común
            </label>
            <input
              id="commonName"
              name="nombre_comun"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="familia" className="block text-sm font-medium leading-6 text-gray-900">
              Familia
            </label>
            <input
              id="familia"
              name="familia"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="biologicForm" className="block text-sm font-medium leading-6 text-gray-900">
              Forma Biologica
            </label>
            <input
              id="forma_biologica"
              name="forma_biologica"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="vegetation" className="block text-sm font-medium leading-6 text-gray-900">
              Tipo de Vegetación
            </label>
            <input
              id="tipo_vegetacion"
              name="tipo_vegetacion"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="vulnerada" className="block text-sm font-medium leading-6 text-gray-900">
              ¿Vulnerada?
            </label>
            <div className="mt-2 flex items-center">
              <input
                id="vulnerada"
                name="vulnerada"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
                onChange={handleChange}
              />
              <span className="ml-2 text-sm text-gray-900">Sí</span>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="additionalInfo" className="block text-sm font-medium leading-6 text-gray-900">
              Información Adicional
            </label>
            <textarea
              id="additionalInfo"
              name="informacion_adicional"
              rows="4"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6 resize-none"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mt-6">
            <button
              className="w-full py-2 text-white bg-green-600 rounded-md font-semibold hover:bg-green-700 transition duration-300"
              type="submit"
              onClick={handleRegisterPlant}
            >
              Registrar Planta
            </button>
          </div>
      </div>
    </div>
  );
};

export default RegisterPlant;
