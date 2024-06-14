import { useEffect, useState } from "react";
import React from "react";
import SearchBar from "../assets/Components/SearchBar";
import { fetchPlanta } from "../Services/HerbarioService";
import Card from "../assets/Components/Card";

const SearchPage = () => {
  const [arrayPlantas, setArrayPlantas] = useState([]);
  const [filterPlantas, setArrayFilter] = useState([]);

  useEffect(() => {
    const getPlantas = async () => {
      try {
        const response = await fetchPlanta();
        setArrayPlantas(response.message);
        setArrayFilter(response.message);
      } catch (error) {
        console.log(error);
      }
    };
    getPlantas();
  }, []);

  const handleSearch = (query) => {
    const filtroPlantas = arrayPlantas.filter((item) =>
      item["nombre_comun"].toLowerCase().includes(query.toLowerCase())
    );
    setArrayFilter(query ? filtroPlantas : arrayPlantas);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="min-h-screen bg-[#B9E2BC] p-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filterPlantas.length > 0 ? (
            filterPlantas.map((card, index) => (
              <Card
                key={index}
                nombreCientifico={card.nombre_cientifico}
                nombrePila={card.nombre_comun}
              />
            ))
          ) : (
            <h1 className="text-zinc-700 col-span-full">
              No existen coincidencias con la búsqueda
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
