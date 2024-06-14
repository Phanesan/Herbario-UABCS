import React, { Component, useEffect, useState } from "react";
import { eliminarPlant, fetchPlanta } from "../../Services/HerbarioService";

export function TablePlants() {
  const [plantas, setPlantas] = useState();

  useEffect(() => {
    const obtenerPlantas = async () => {
      try {
        const response = await fetchPlanta();
        console.log(response.message);
        setPlantas(response.message);
      } catch (error) {}
    };
    obtenerPlantas();
  }, []);

  const handleClick = async (id) => {
    try {
      await eliminarPlant(id);
      const index = plantas.findIndex((planta) => planta.id === id);
      if (index !== -1) {
        const updatedPlantas = [
          ...plantas.slice(0, index),
          ...plantas.slice(index + 1),
        ];
        setPlantas(updatedPlantas);
      }
    } catch (error) {}
  };

  return (
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr class="bg-green-600 text-white">
          <th class="py-3 px-4 text-left">Nombre Científico</th>
          <th class="py-3 px-4 text-left">Nombre Común</th>
          <th class="py-3 px-4 text-left">Familia</th>
          <th class="py-3 px-4 text-left">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {plantas?.length > 0 &&
          plantas.map((item, index) => (
            <tr key={index} class="border-t border-gray-200">
              <td class="py-3 px-4">
                <h1 class="text-lg font-semibold">{item.nombre_cientifico}</h1>
              </td>
              <td class="py-3 px-4">
                <h1 class="text-lg font-semibold">{item.nombre_comun}</h1>
              </td>
              <td class="py-3 px-4">
                <h1 class="text-lg font-semibold">{item.familia}</h1>
              </td>
              <td class="py-3 px-4">
                <button
                  class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                  onClick={() => handleClick(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TablePlants;
