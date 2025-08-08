import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow p-4">
      <ul className="flex justify-end space-x-4 pr-6">
        <li>
          <a href="#about" className="font-bold text-gray-700 hover:text-blue-500 transition-colors">About</a>
        </li>
        <li>
          <a href="#portfolio" className="font-bold text-gray-700 hover:text-blue-500 transition-colors">Portfolio</a>
        </li>
        <li>
          <a href="#contact" className="font-bold text-gray-700 hover:text-blue-500 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
