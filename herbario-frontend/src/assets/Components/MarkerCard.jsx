import React from 'react'
import useCardStore from '../../Global/CardStore'

function MarkerCard({nombreCientifico}) {
  const {setView, view} = useCardStore((state) => state)
  const handlerClick = () => {setView(!view)}
  return (
    <div className="relative bg-[#ffffff] p-4 rounded-lg shadow-2xl w-[400px] h-full flex flex-col justify-between border border-zinc-200">
      <div className="absolute top-2 left-2 cursor-pointer" onClick={handlerClick}>
        <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className="h-60 bg-gray-200 rounded-md mb-4"></div>
      <h3 className="text-lg font-bold cursor-pointer">aki va el name</h3>
    </div>
  )
}

export default MarkerCard
