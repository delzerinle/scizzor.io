import React, { useState } from 'react';
import { MobileMenuDrawer } from '@components';

const CustomersLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-full relative max-w-screen-xl min-h-screen mx-auto">
      <div className="flex  justify-between items-center px-5 md:py-2">
        <div className="w-1/4">
          <button
            onClick={() => setOpen(true)}
            className="p-1 text-black focus:outline-none hover:text-primary focus:text-primary transition-ease transition-all md:hidden"
          >
            <svg
              className="h-4 w-4 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.084h16M1 6.093h16M1 11.103h16"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <img
            className="h-16 hidden md:block"
            src="/images/logo.png"
            alt="logo"
          />
        </div>

        <div className="w-1/2">
          <img
            className="h-16 mx-auto md:hidden"
            src="/images/logo.png"
            alt="logo"
          />

          <ul className="hidden md:flex text-secondary font-light text-sm">
            <li className="mr-6">
              <a className="font-medium text-alt-1" href="#">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a href="#">Shop</a>
            </li>
            <li className="mr-6">
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Join As A Brand</a>
            </li>
          </ul>
        </div>

        <div className="w-1/4 flex items-center justify-end">
          <button className="p-1 mt-1 mr-1 text-black focus:outline-none hover:text-primary focus:text-primary transition-ease transition-all">
            <svg
              className="h-5 w-5 stroke-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.493 4.781H3.496a.992.992 0 00-1.017.82l-1.417 9.856A.961.961 0 002.08 16.47H14.91a.963.963 0 001.017-1.012L14.51 5.601a.992.992 0 00-1.016-.82v0zM11.105 2.697A2.666 2.666 0 008.495.53v0a2.666 2.666 0 00-2.608 2.152"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="p-1 text-black focus:outline-none hover:text-primary focus:text-primary transition-ease transition-all md:hidden">
            <svg
              className="h-5 w-5 fill-current"
              strokeWidth="0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.72 5.824c0 2.06 1.701 3.744 3.78 3.744 2.079 0 3.78-1.685 3.78-3.744 0-2.06-1.701-3.744-3.78-3.744-2.079 0-3.78 1.685-3.78 3.744zm6.72 0c0 1.602-1.323 2.912-2.94 2.912s-2.94-1.31-2.94-2.912c0-1.602 1.323-2.912 2.94-2.912s2.94 1.31 2.94 2.912zM11.76 10.816H9.24c-4.179 0-7.56 3.349-7.56 7.488a.42.42 0 00.84 0c0-3.66 3.024-6.656 6.72-6.656h2.52c3.696 0 6.72 2.995 6.72 6.656a.42.42 0 00.84 0c0-4.14-3.381-7.488-7.56-7.488z" />
            </svg>
          </button>

          <button className="hidden md:block bg-alt-1 text-alt-3 text-sm px-6 py-2 ml-6 focus:outline-none focus:bg-primary hover:bg-primary transition-ease transition-all">
            Sign In
          </button>
        </div>
      </div>
      <MobileMenuDrawer isOpen={isOpen} closeDrawer={() => setOpen(false)} />
      {children}

      <div className="bg-alt-2 px-5 py-4 text-center text-xs md:flex md:justify-between md:items-center">
        <p className="flex justify-center items-center md:order-2">
          <a href="#">Terms & Conditions</a>
          <span className="ml-2 mr-1 md:hidden">
            <svg
              className="w-1 h-6 stroke-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1v20" strokeWidth=".5" strokeLinecap="round" />
            </svg>
          </span>
          <a className="md:ml-6" href="#">
            Privacy Policy
          </a>
        </p>
        <p className="leading-snug md:order-1">
          &copy; 2019 The Scizzor Group Inc. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default CustomersLayout;
