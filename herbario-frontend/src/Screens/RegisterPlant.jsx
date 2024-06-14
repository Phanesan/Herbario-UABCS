import React, { useState } from "react";
import { fetchRegisterPlantAPI } from "../Services/HerbarioService";

const RegisterPlant = () => {
  const [plantForm, setPlantForm] = useState({
    nombre_cientifico: "",
    nombre_comun: "",
    familia: "",
    forma_biologica: "",
    tipo_vegetacion: "",
    vulnerada: false,
    informacion_adicional: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPlantForm((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegisterPlant = async () => {
    try {
      const response = await fetchRegisterPlantAPI(plantForm);
      console.log("Response Status:", response.status);
      console.log("Response OK:", response.ok);

      if (response.status) {
        setMessage({
          type: "success",
          text: "Planta registrada correctamente.",
        });
        setTimeout(() => {
          window.location.reload();
        }, 700);
      } else {
        const errorData = await response.json();
        console.log("Error Data:", errorData);
        setMessage({
          type: "error",
          text: errorData.message || "Error al registrar la planta",
        });
      }
    } catch (error) {
      console.log("Catch Error:", error);
      setMessage({
        type: "error",
        text: "No se pudo registrar la planta. Inténtalo de nuevo.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegisterPlant();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#B9E2BC]">
      <div className="w-full max-w-md px-6 py-12 bg-white rounded-lg shadow-md">
        <h2 className="mt-0 mb-8 text-3xl font-bold leading-9 text-gray-900 pl-6">
          Registro de Planta
        </h2>
        {message && (
          <div
            className={`mb-4 p-4 rounded ${
              message.type === "success"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nombre_cientifico"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre Científico
            </label>
            <input
              id="nombre_cientifico"
              name="nombre_cientifico"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="nombre_comun"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre Común
            </label>
            <input
              id="nombre_comun"
              name="nombre_comun"
              type="text"
              autoComplete="off"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="familia"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
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
            <label
              htmlFor="forma_biologica"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Forma Biológica
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
            <label
              htmlFor="tipo_vegetacion"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
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
            <label
              htmlFor="vulnerada"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
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
            <label
              htmlFor="informacion_adicional"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Información Adicional
            </label>
            <textarea
              id="informacion_adicional"
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
            >
              Registrar Planta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPlant;
