import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRegisterAPI } from '../Services/HerbarioService';

function RegisterPage() {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    correo: "",
    password: "",
    repeatPassword: "",
    nombre: "",
    apellidos: ""
  });
  const [error, setError] = useState('');

  async function handleRegister() {
    if (registerForm.password !== registerForm.repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      const response = await fetchRegisterAPI(registerForm);
      navigate('/LoginPage');
    } catch (error) {
      console.log(error);
      setError("Error en el registro");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterForm(prevState => ({ ...prevState, [name]: value }));

    if (name === "repeatPassword" || name === "password") {
      if (registerForm.repeatPassword !== value && name === "password") {
        setError("Las contraseñas no coinciden");
      } else if (registerForm.password !== value && name === "repeatPassword") {
        setError("Las contraseñas no coinciden");
      } else {
        setError("");
      }
    } else {
      setError("");
    }
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-[#B9E2BC]">
        <div className="w-full max-w-md px-6 py-12 bg-white rounded-lg shadow-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-40 w-40"
              src="https://i.imgur.com/OB8SF4I.png"
              alt="Flora UABCS"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Registrate
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                Apellidos
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="apellidos"
                  type="text"
                  autoComplete="lastName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo Electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="correo"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="repeatPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Repetir Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            {error && (
              <div className="mt-2 text-red-600 text-sm">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-110 transition-all duration-300 hover:bg-green-800"
                onClick={handleRegister}
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
