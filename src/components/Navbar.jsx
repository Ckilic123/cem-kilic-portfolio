import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute top-0 right-0 p-4">
      <ul className="flex space-x-4">
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
