// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-5">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Australian Migration Services (Pvt) Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


// py-4 mt-10