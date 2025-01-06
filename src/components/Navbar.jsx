import { useState } from "react";

const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scroll on click
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          {/* Logo (optional) */}

          {/* Mobile Menu Toggle Button */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`lg:flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li
            className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-white hover:bg-blue-400 hover:shadow-xl hover:rounded-md w-full lg:w-auto text-center p-2"
            onClick={() => scrollToSection("Introduction")}
          >
            Introduction
          </li>
          <li
            className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-white hover:bg-blue-400 hover:shadow-xl hover:rounded-md w-full lg:w-auto text-center p-2"
            onClick={() => scrollToSection("Causes")}
          >
            Causes
          </li>
          <li
            className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-white hover:bg-blue-400 hover:shadow-xl hover:rounded-md w-full lg:w-auto text-center p-2"
            onClick={() => scrollToSection("Effects")}
          >
            Effects
          </li>
          <li
            className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-white hover:bg-blue-400 hover:shadow-xl hover:rounded-md w-full lg:w-auto text-center p-2"
            onClick={() => scrollToSection("Solutions")}
          >
            Solution
          </li>
          <li
            className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-white hover:bg-blue-400 hover:shadow-xl hover:rounded-md w-full lg:w-auto text-center p-2"
            onClick={() => scrollToSection("Global Statistics")}
          >
            Global Stats
          </li>
          <li
            className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-white hover:bg-blue-400 hover:shadow-xl hover:rounded-md w-full lg:w-auto text-center p-2"
            onClick={() => scrollToSection("CheckAQI")}
          >
            Check AQI
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
