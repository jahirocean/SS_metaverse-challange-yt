import React from "react";
import Image from "next/image";
function Login() {
  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Papafam logo */}
        <Image
          className="object-cover rounded-full"
          src="https://links.papareact.com/3pi"
          width={200}
          height={200}
        />

        {/* Login button */}
        <button className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
