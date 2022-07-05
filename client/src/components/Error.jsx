import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Link to="/">
        <p className="mt-5">
          <p className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring hover:bg-white">
            <span className="relative block px-8 py-3 border border-current">
              <p className="text-xl hover:text-black">Go Home</p>
            </span>
          </p>
        </p>
      </Link>
    </main>
  );
};

export default Error;
