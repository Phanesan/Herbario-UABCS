import { useEffect, useState } from 'react';
import React from 'react'
import SearchBar from '../assets/Components/SearchBar';
import { fetchPlanta } from '../Services/HerbarioService';
import Card from '../assets/Components/Card'

const SearchPage = () => {
  
  const [arrayPlantas, setArrayPlantas] = useState ()  
  const [filterPlantas, setArrayFilter] = useState ([])  

  useEffect(()=>{
    const getPlantas = async () =>{
      try {
        const response = await fetchPlanta();
        setArrayPlantas(response.message)
        setArrayFilter(response.message)
      } catch (error) {
        console.log(error)
      }
    }
    getPlantas();
  }, [])

  const handleSearch = (query) =>{
    const filtroPlantas = arrayPlantas.filter(item=>item["nombre_comun"].includes(query))
    console.log(query)
    setArrayFilter(query == null? arrayPlantas: filtroPlantas)
  }

  return (
    <>
    <SearchBar onSearch={handleSearch}></SearchBar>
      <div className="min-h-screen flex items-center justify-center bg-[#B9E2BC]">
      <div className="p-11">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filterPlantas.length > 0  ? filterPlantas.map((card, index) => (
          <Card 
            key={index} 
            nombreCientifico={card.nombreCientifico} 
            nombrePila={card.nombrePila} 
            fechaObservacion={card.fechaObservacion} 
          />
        )):<h1>
            no hay plantas mamallema
          </h1>}
      </div>
    </div>
      </div>
    </>
    );
}

export default SearchPage
