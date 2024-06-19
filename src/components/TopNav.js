import DownloadIcon from "@mui/icons-material/Download";

function TopNav() {
  return (
    <nav className="flex fixed top-0 items-center justify-start border-b-2 border-lm-fucshia dark:border-dm-fucshia w-full h-20 z-50 bg-lm-light dark:bg-dm-custom-black">
      <ul className="flex items-center h-full w-full list-none">
        <li className="px-4 md:px-8 h-full cursor-pointer flex items-center border-r-2 border-lm-fucshia dark:border-dm-fucshia overflow-hidden transition duration-500 hover:shadow-inner-fucshia hover:opacity-80">
          <a
            className="text-xl no-underline text-lm-custom-black dark:text-dm-light"
            href="https://drive.google.com/file/d/1z58kSN6Vb7DArjCsxouTKXJjwVDxLKmk/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            CV <DownloadIcon />
          </a>
        </li>
        <li className="px-8 h-full cursor-pointer flex items-center border-r-2 border-lm-fucshia dark:border-dm-fucshia overflow-hidden transition-all ease-in-out duration-500 hover:shadow-inner-fucshia hover:opacity-80">
          <a
            aria-label="Link to Email"
            rel="noreferrer"
            className="text-xl no-underline text-lm-custom-black dark:text-dm-light"
            href="mailto:scottmartinwebdevelopment@gmail.com"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
