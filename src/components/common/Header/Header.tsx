import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="p-5 flex items-center justify-between border-b border-black">
      <nav className="w-full flex space-x-10 font-normal">
        <div className="text-teal-500 p-1 font-extrabold text-3xl">D</div>

        <NavLink
          to="/discount"
          className={({ isActive }) =>
            isActive
              ? 'text-teal-500 font-bold text-lg p-1 border-b border-teal-500'
              : 'text-teal-500 font-bold text-lg p-1'
          }
        >
          Discount
        </NavLink>
        <NavLink
          to="/generate-code"
          className={({ isActive }) =>
            isActive
              ? 'text-teal-500 font-bold text-lg p-1 border-b border-teal-500'
              : 'text-teal-500 font-bold text-lg p-1'
          }
        >
          Generate Code
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive
              ? 'text-teal-500 font-bold text-lg p-1 border-b border-teal-500'
              : 'text-teal-500 font-bold text-lg p-1'
          }
        >
          List
        </NavLink>
      </nav>
    </div>
  );
};

export { Header };
