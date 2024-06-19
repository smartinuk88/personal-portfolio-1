import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DownloadIcon from "@mui/icons-material/Download";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function BurgerMenu({
  isMenuOpen,
  toggleMenuHandler,
  darkMode,
  toggleDarkModeHandler,
}) {
  return (
    <div
      className={`fixed top-0 -right-full w-screen h-screen flex flex-col bg-lm-light dark:bg-dm-custom-black justify-between items-center z-50 transition-transform duration-500 ease-in-out ${
        isMenuOpen
          ? "transform -translate-x-full"
          : " transform translate-x-full"
      }`}
    >
      <div className="fixed top-0 flex justify-between p-8 w-full">
        <div className="flex cursor-pointer justify-center items-center border-2 border-lm-custom-orange dark:border-dm-custom-orange h-15 w-15 p-5 rounded-full text-lm-custom-black dark:text-dm-light hover:opacity-80">
          {darkMode ? (
            <LightModeIcon onClick={toggleDarkModeHandler} />
          ) : (
            <DarkModeIcon onClick={toggleDarkModeHandler} />
          )}
        </div>

        <button
          onClick={toggleMenuHandler}
          className="p-4 border-2 border-lm-fucshia dark:border-dm-fucshia hover:opacity-80 text-lm-custom-black dark:text-dm-light"
        >
          <CloseIcon />
        </button>
      </div>

      <nav>
        <ul className="flex space-y-2 flex-col items-center list-none h-screen w-screen justify-center text-lm-custom-black dark:text-dm-light">
          <li className="flex items-center h-20 py-2 px-4 text-center transition duration-500 cursor-pointer hover:opacity-80">
            <a
              className="text-xl"
              aria-label="Linkedin"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/scott-martin-6680b322a/"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center h-20 py-2 px-4 text-center  transition duration-500 cursor-pointer hover:opacity-80">
            <a
              className="text-xl"
              aria-label="Github"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/smartinuk88"
            >
              Github
            </a>
          </li>
          <li className="flex items-center h-20 py-2 px-4 text-center transition duration-500 cursor-pointer hover:opacity-80">
            <a
              className="text-xl no-underline text-lm-custom-black dark:text-dm-light"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1z58kSN6Vb7DArjCsxouTKXJjwVDxLKmk/view?usp=sharing"
            >
              CV <DownloadIcon />
            </a>
          </li>
          <li className="flex items-center h-20 py-2 px-4 text-center transition duration-400 cursor-pointer hover:opacity-80">
            <a
              aria-label="Link to Email"
              rel="noopener"
              className="text-xl no-underline text-lm-custom-black dark:text-dm-light"
              href="mailto:scottmartinwebdevelopment@gmail.com"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BurgerMenu;
