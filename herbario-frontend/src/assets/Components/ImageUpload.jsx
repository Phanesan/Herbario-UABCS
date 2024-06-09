// src/components/ImageUploader.jsx
import React, { useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);

      // Crear una URL para la vista previa
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      console.log('Subiendo la imagen:', selectedImage);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: '500px', height: '550px' }}>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>
        {preview && (
          <div className="mb-4">
            <img 
              src={preview} 
              alt="Vista previa" 
              className="w-full h-48 object-cover rounded-md"
              style={{height: '400px' }}
            />
          </div>
        )}
        <button 
          type="submit" 
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition-all duration-300"
        >
          Subir Imagen
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;

