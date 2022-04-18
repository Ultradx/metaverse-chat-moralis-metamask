import React from 'react'
import Image from 'next/image'
import Wpaper from '../public/walp.jpg'
import Logo from '../public/logo.jpg'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis()
  return (
    <div className="bg-black relative">
      <h1>I am a login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Logo */}
        <Image
          className="object-cover rounded-full"
          src={Logo}
          height={200}
          width={200}
        />
        {/* Login button */}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        {/* Login form */}
        <Image src={Wpaper} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Login
