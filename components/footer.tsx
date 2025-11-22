import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center py-4 bg-[#0d1117] text-slate-400 border-t border-slate-700/40">
      <p><b>© {new Date().getFullYear()} YARIS AI — Built by Muhammad Yasir</b></p> 
      <p className="text-xs mt-1">
        Contact: <a href="mailto:myasirtech4831@gmail.com" className="underline hover:text-white">myasirtech4831@gmail.com</a> | 
        GitHub: <a href="https://github.com/YasirAwan4831" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
          YasirAwan4831
        </a>
      </p>
    </footer>
  );
};

export default Footer;
