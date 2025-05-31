// src/components/Navbar.jsx
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToogle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md dark:shadow-white/10 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <h1 className="text-xl font-bold">Prakash ⚡

</h1>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6">
          <Link 
            to="projects" 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Projects
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Contact
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;