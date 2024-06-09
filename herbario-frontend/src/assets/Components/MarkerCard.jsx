import React from 'react'

function MarkerCard({nombreCientifico}) {
  return (
    <div className="bg-[#ffffff] p-4 rounded-lg shadow-2xl w-[400px] h-full flex flex-col justify-between border border-zinc-200">
      <div className="h-60 bg-gray-200 rounded-md mb-4 cursor-pointer"></div>
      <h3 className="text-lg font-bold cursor-pointer">{nombreCientifico}</h3>
      <button> atras</button>
    </div>
  )
}

export default MarkerCard
