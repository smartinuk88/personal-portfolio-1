import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function SideNav({ darkMode, toggleDarkModeHandler }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className="md:flex fixed md:border-l-2 md:border-lm-fucshia md:dark:border-dm-fucshia bg-transparent top-0 right-0 flex-col justify-between items-center w-20
     md:h-screen z-50 overflow-x-hidden md:bg-lm-light md:dark:bg-dm-custom-black"
    >
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        toggleMenuHandler={toggleMenuHandler}
        toggleDarkModeHandler={toggleDarkModeHandler}
        darkMode={darkMode}
      />
      <div
        onClick={toggleMenuHandler}
        className="md:hidden border-l-2 flex justify-center items-center cursor-pointer h-20 w-20 text-4xl font-extrabold border-b-2 border-lm-fucshia dark:border-dm-fucshia transition-all duration-500 hover:shadow-inner-fucshia hover:opacity-80"
      >
        <div className="flex justify-center items-center h-5 w-5 p-5 text-lm-custom-black dark:text-dm-light">
          <IconButton>
            <MenuIcon
              className="text-lm-custom-black dark:text-dm-light"
              fontSize="large"
            />
          </IconButton>
        </div>
      </div>

      <div
        onClick={toggleDarkModeHandler}
        className="hidden md:flex justify-center items-center cursor-pointer h-20 w-full text-4xl font-extrabold border-b-2 border-lm-fucshia dark:border-dm-fucshia transition-all duration-500 hover:shadow-inner-fucshia hover:opacity-80"
      >
        <div className="flex justify-center items-center border border-lm-custom-black dark:border-dm-light h-5 w-5 p-5 rounded-full text-lm-custom-black dark:text-dm-light">
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </div>
      </div>

      <ul className="hidden md:flex flex-col items-center list-none w-full">
        <li className="flex items-center justify-center border-t border-lm-fucshia dark:border-dm-fucshia h-20 w-full text-center transition duration-500 cursor-pointer hover:shadow-inner-fucshia hover:opacity-80">
          <a
            aria-label="Linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/scottmartinwebdevelopment/"
            className="h-full w-full flex items-center justify-center"
          >
            <LinkedInIcon
              className="text-lm-custom-black dark:text-dm-light"
              fontSize="large"
            />
          </a>
        </li>
        <li className="flex items-center justify-center border-t border-lm-fucshia dark:border-dm-fucshia h-20 w-full text-center transition duration-500 cursor-pointer hover:shadow-inner-fucshia hover:opacity-80">
          <a
            aria-label="Github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/smartinuk88"
            className="h-full w-full flex items-center justify-center"
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
