import React from "react";

const Pricing = () => {
  return (
    <>
      {/* https://www.tailwindmasterkit.com/components/marketing/sections/pricing */}
      <div className="dark:bg-gray-800">
        <div className="page-container py-10">
          <div className="header">
            <h1 className="text-2xl md:text-4xl text-center text-gray-700 dark:text-white font-extrabold">
              Get Lifetime Accesss
            </h1>
            <p className="max-w-2xl text-gray-500 dark:text-white text-center md:mx-auto mx-4 mt-4 text-sm md:text-lg">
              Get Early access to premium components and all the additional
              benefits. Get 1-year updates for all the components and additional
              updates we release.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-20 mx-4 md:mx-8 xl:mx-40 gap-8 z-10 content-center items-center">
          <div className="relative z-10">
            <div className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-4">
                Marketing UI
              </h2>
              <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
                <span className="text-4xl">$</span>49
              </p>
              <div className="features">
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Get Marketing Components
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Community Support
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    1-year premium updates
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    New Monthly updates
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Premium support over email
                  </p>
                </div>
              </div>
              <button className="w-full rounded-md py-4 font-semibold bg-indigo-500 mt-4 text-white">
                Buy Now
              </button>
            </div>
            <div className="absolute inset-0 transform -rotate-3 opacity-20 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
          </div>
          <div className="relative z-10">
            <div
              className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border-2 border-tmk-blue dark:border-gray-700"
              style={{ zIndex: 20 }}
            >
              <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-6">
                Marketing + Application + Functional Components
              </h2>
              <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
                <span className="text-4xl">$</span>99
              </p>
              <div className="features mx-auto">
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    All Application Components
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    All Marketing Components
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    All Functional Components
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Premium Support
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Community Access
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    1-year premium updates
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Button Builders
                  </p>
                </div>
              </div>
              <button className="w-full rounded-md py-4 font-semibold bg-indigo-500 mt-4 text-white">
                Buy Now
              </button>
            </div>
            <div className="flex justify-center">
              <div
                className="absolute bg-blue-300 rounded-md px-2 py-2 font-semibold -top-5 dark:text-gray-100"
                style={{ zIndex: 20 }}
              >
                <p>MOST POPULAR</p>
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <div className="relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl text-gray-800 dark:text-white font-bold text-center my-4">
                Web Application UI
              </h2>
              <p className="price text-gray-800 font-extrabold text-8xl mt-4 dark:text-white flex items-center justify-center my-4">
                <span className="text-4xl">$</span>49
              </p>
              <div className="features">
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Get Application Components
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Community Support
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    1-year premium updates
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    New Monthly updates
                  </p>
                </div>
                <div className="flex flex-row items-start space-x-2 my-4 justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4 text-green-500 mt-1"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="text-gray-600 dark:text-white">
                    Premium support over email
                  </p>
                </div>
              </div>
              <button className="w-full rounded-md py-4 font-semibold bg-indigo-500 mt-4 text-white">
                Buy Now
              </button>
            </div>
            <div className="absolute inset-0 transform -rotate-3 opacity-20 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
