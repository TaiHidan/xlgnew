import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";


export default function PrimarySearchAppBar() {


  return (
    <div className="flex-grow drop-shadow">
      <nav className="bg-white static h-20 ">
        <div className="flex items-center justify-between p-4">
          {/* <!-- Logo --> */}

          <img
            src="./public/images/logoxlg.png"
            alt="Logo"
            className="max-w-32 h-14 rounded-full inline border-[2px] hover:opacity-80 transition-opacity duration-300 ease-in-out"
          />

          {/* <!-- Excel Button --> */}
          <button className="ml-10 text-error bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-orange-800 transition-all duration-300 ease-in-out">
            Excel
          </button>

          {/* <!-- Search Bar --> */}
          <div className="mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 inline"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <input
                className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
                type="text"
                placeholder="Search…"
                aria-label="search"
              />
            </div>
          </div>

          {/* <!-- Notification and Avatar --> */}
          <div className="flex items-center">
            {/* Notification Button */}
            <button className="text-white bg-orange-500 rounded-full p-2 focus:outline-none hover:bg-orange-600 transition-all duration-300 ease-in-out flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>

            {/* <!-- Avatar Button --> */}
            <button className="ml-2 text-white focus:outline-none hover:text-gray-300 transition-all duration-300 ease-in-out">
              <span className="text-xs">mở</span>
              <img
                src=".\public\images\anime-2.png"
                alt="User Avatar"
                className="w-16 h-16 inline object-cover rounded-full border-[3px]"
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
