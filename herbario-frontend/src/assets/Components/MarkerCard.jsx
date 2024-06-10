import React from 'react'
import useCardStore from '../../Global/CardStore'

function MarkerCard({nombreCientifico}) {
  const {setView, view} = useCardStore((state) => state)
  const handlerClick = () => {setView(!view)}
  return (
    <div className="bg-[#ffffff] p-4 rounded-lg shadow-2xl w-[400px] h-full flex flex-col justify-between border border-zinc-200">
      <div className="h-60 bg-gray-200 rounded-md mb-4"></div>
      <h3 className="text-lg font-bold cursor-pointer">aki va el name</h3>
      <button onClick={handlerClick}> atras</button>
    </div>
  )
}

export default MarkerCard
