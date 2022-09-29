import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';

const NavBar = () => (
  <nav className="lg:flex-row gap-4 lg:gap-0 flex-col flex justify-between px-8 py-2 items-center border-b w-full">
    <div className="flex gap-4 items-center">
      <img src={Logo} alt="space-hub-logo" className="w-16" />
      <Link className="text-lg font-bold" to="/">
        Space Travelers&apos; Hub
      </Link>
    </div>
    <ul className="flex items-center gap-4 list-none">
      <li>
        <NavLink
          className={({ isActive }) => (isActive
            ? 'bg-black p-2 rounded-md text-red-600'
            : 'text-blue-500')}
          to="rockets"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive
            ? 'bg-black p-2 rounded-md text-red-600'
            : 'text-blue-500')}
          to="missions"
        >
          Missions
        </NavLink>
      </li>
      <li>|</li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive
            ? 'bg-black p-2 rounded-md text-red-600'
            : 'text-blue-500')}
          to="profile"
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
