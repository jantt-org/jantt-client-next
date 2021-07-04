import React from 'react';
import { Social } from '../config';

const Footer = () => {
  return (
    <footer className="h-12 border-t border-gray-800 flex justify-center items-center">
      <p className="font-medium">
        © {new Date().getFullYear()} Developed by{' '}
        <a className="underline" href={Social.linkedin} target="_blank" rel="noopener noreferrer">
          Ariful Alam
        </a>
      </p>
    </footer>
  );
};

export default Footer;
