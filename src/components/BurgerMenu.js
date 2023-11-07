import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DownloadIcon from "@mui/icons-material/Download";

function BurgerMenu({ isMenuOpen, toggleMenuHandler }) {
  return (
    <div
      className={`fixed top-0 -right-full w-screen h-screen flex flex-col bg-custom-black justify-between items-center z-50 transition-transform duration-500 ease-in-out ${
        isMenuOpen
          ? "transform -translate-x-full"
          : " transform translate-x-full"
      }`}
    >
      <div className="fixed top-0 flex justify-between p-8 w-full">
        <div className="flex cursor-pointer justify-center items-center border border-custom-orange h-15 w-15 p-5 rounded-full text-light hover:opacity-80">
          <LightModeIcon />
        </div>

        <button
          onClick={toggleMenuHandler}
          className="p-4 border-2 border-fucshia hover:opacity-80"
        >
          <CloseIcon />
        </button>
      </div>

      <nav>
        <ul className="flex space-y-2 flex-col items-center list-none h-screen w-screen justify-center">
          <li className="flex items-center justify-cente h-20 py-2 px-4 text-center transition duration-400 cursor-pointer hover:opacity-80">
            <a
              className="text-xl"
              aria-label="Linkedin"
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/scott-martin-6680b322a/"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center justify-cente h-20 py-2 px-4 text-center transition duration-400 cursor-pointer hover:opacity-80">
            <a
              className="text-xl"
              aria-label="Github"
              rel="noopener"
              target="_blank"
              href="https://github.com/smartinuk88"
            >
              Github
            </a>
          </li>
          <li className="flex items-center justify-cente h-20 py-2 px-4 text-center transition duration-400 cursor-pointer hover:opacity-80">
            <a className="text-xl no-underline text-light" href="#">
              CV <DownloadIcon />
            </a>
          </li>
          <li className="flex items-center justify-cente h-20 py-2 px-4 text-center transition duration-400 cursor-pointer hover:opacity-80">
            <a
              aria-label="Link to Email"
              rel="noopener"
              className="text-xl text-blue-400 no-underline text-light"
              href="mailto:scottmartin.dev@gmail.com"
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
