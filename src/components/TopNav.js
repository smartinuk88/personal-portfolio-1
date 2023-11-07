import DownloadIcon from "@mui/icons-material/Download";

function TopNav() {
  return (
    <nav className="flex fixed top-0 items-center justify-start border-b-2 border-fucshia w-full h-20 z-50 bg-custom-black">
      <ul className="flex items-center h-full w-full list-none">
        <li className="px-8 h-full cursor-pointer flex items-center border-r border-fucshia overflow-hidden transition duration-500 hover:shadow-inner-fucshia hover:opacity-80">
          <a className="text-xl no-underline text-light" href="#">
            CV <DownloadIcon />
          </a>
        </li>
        <li className="px-8 h-full cursor-pointer flex items-center border-r border-fucshia overflow-hidden transition duration-500 hover:shadow-inner-fucshia hover:opacity-80">
          <a
            aria-label="Link to Email"
            rel="noopener"
            className="text-xl no-underline text-light"
            href="mailto:scottmartin.dev@gmail.com"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
