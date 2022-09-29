import React from 'react';

const Footer = () => (
  <div className="px-8 h-14 bg-gradient-to-r from-gray-300 to-gray-100 fixed left-0 right-0 bottom-0 flex items-center">
    <span className="text-black capitalize">
      All rights reserved © 2022
      {' '}
      <a href="https://github.com/aceDavon" className="text-red-500">
        Makoji D.
      </a>
      {' '}
      &
      {' '}
      <a href="https://github.com/elijahdre" className="text-red-500">
        Elijah A.
      </a>
    </span>
  </div>
);

export default Footer;
