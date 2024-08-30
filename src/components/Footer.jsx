// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  text-center p-4 fixed bottom-0 left-0 w-full">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Irix Technologies. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
