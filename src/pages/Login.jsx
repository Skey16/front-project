import React from 'react'
import Logo from '../assets/logo.svg'

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className=" w-11/12 max-w-[700px] px-10 py-10 rounded-3xl bg-white border-2 border-gray-100">
					<div className='mb-16'>
            <img src={Logo} alt="Ambar Logo" className='w-28 '/>
          </div>
          <h1 className="text-5xl font-semibold">Iniciar Sesión </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            ¡Hola de nuevo! Por favor ingresa tus datos.
          </p>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">Correo</label>
              <input type={"email"}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Contraseña</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Ingresa tu contraseña"
                type={"password"}
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg"
              >
                Iniciar Sesion
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">¿No tienes una cuenta?</p>
              <button
                className="ml-2 font-medium text-base text-violet-500"
              >
                Registrate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  )
}

export default Login