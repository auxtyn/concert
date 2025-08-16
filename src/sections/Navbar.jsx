import { useState } from "react";
import { motion } from "motion/react";
const Navigation = () => {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a href="" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a href="" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto px-10  max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-sm font-bold transition-colors text-neutral hover:text-white"
          >
           <img src="/assets/logo.png" alt="" srcset="" className="w-10"/>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              // src="assets/menu.svg"
              alt="toggle"
              className="w-6 h-6 cursor-pointer text-neutral-400 hover:text-white"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 10 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
