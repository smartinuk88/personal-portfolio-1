import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function SideNav({ darkMode, setDarkMode, toggleDarkModeHandler }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="md:flex fixed md:border-l-2 md:border-lm-fucshia md:dark:border-dm-fucshia bg-transparent top-0 right-0 flex-col justify-between items-center w-20 h-screen z-50 overflow-x-hidden md:bg-lm-light md:dark:bg-dm-custom-black">
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        toggleMenuHandler={toggleMenuHandler}
        toggleDarkModeHandler={toggleDarkModeHandler}
        darkMode={darkMode}
      />
      <div
        onClick={toggleMenuHandler}
        className="md:hidden border-l-2 flex justify-center items-center cursor-pointer h-20 w-full text-4xl font-extrabold border-b-2 border-fucshia transition-all duration-500 hover:shadow-inner-lm-fucshia dark:hover:shadow-inner-dm-fucshia hover:opacity-80"
      >
        <div className="flex justify-center items-center  h-5 w-5 p-5 text-lm-custom-black dark:text-dm-light">
          <IconButton>
            <MenuIcon
              className="text-lm-custom-black dark:text-dm-light"
              fontSize="large"
            />
          </IconButton>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center cursor-pointer h-20 w-full text-4xl font-extrabold border-b-2 border-lm-fucshia dark:border-dm-fucshia transition-all duration-500 hover:shadow-inner-lm-fucshia dark:hover:shadow-inner-dm-fucshia hover:opacity-80">
        <div className="flex justify-center items-center border border-lm-custom-black dark:border-dm-light h-5 w-5 p-5 rounded-full text-lm-custom-black dark:text-dm-light">
          {darkMode ? (
            <LightModeIcon onClick={toggleDarkModeHandler} />
          ) : (
            <DarkModeIcon onClick={toggleDarkModeHandler} />
          )}
        </div>
      </div>

      <ul className="hidden md:flex flex-col items-center list-none w-full">
        <li className="flex items-center justify-center border-t border-lm-fucshia dark:border-dm-fucshia h-20 w-full text-center transition duration-400 cursor-pointer hover:shadow-inner-lm-fucshia dark:hover:shadow-inner-dm-fucshia hover:opacity-80">
          <a
            aria-label="Linkedin"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/scott-martin-6680b322a/"
          >
            <LinkedInIcon
              className="text-lm-custom-black dark:text-dm-light"
              fontSize="large"
            />
          </a>
        </li>
        <li className="flex items-center justify-center border-t border-lm-fucshia dark:border-dm-fucshia h-20 w-full text-center transition duration-400 cursor-pointer hover:shadow-inner-lm-fucshia dark:hover:shadow-inner-dm-fucshia hover:opacity-80">
          <a
            aria-label="Github"
            rel="noopener"
            target="_blank"
            href="https://github.com/smartinuk88"
          >
            <GitHubIcon
              className="text-lm-custom-black dark:text-dm-light"
              fontSize="large"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
