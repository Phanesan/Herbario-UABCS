import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Image+1',
  'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Image+2',
  'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Image+3',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-11/12 mx-auto mt-10">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="w-full h-96 object-cover flex-shrink-0"
              style={{ minWidth: '100%' }}
            />
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-black"
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-black"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
