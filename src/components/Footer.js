import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className="flex items-center justify-between space-x-8 md:space-x-0 px-5 pb-4 md:pl-12 md:pr-32 lg:pl-24 lg:pr-44 w-full text-lm-support dark:text-dm-support">
      <ul className="flex space-x-2 md:hidden">
        <li className="hover:opacity-80 transition-all duration-500">
          <a
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/scott-martin-6680b322a/"
          >
            <LinkedInIcon />
          </a>
        </li>

        <li className="hover:opacity-80 transition-all duration-500">
          <a
            aria-label="Github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/smartinuk88"
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
      <div>
        <p className="text-xs">
          Copyright 2024 Scott Martin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
