import "./SideNav.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";

function SideNav() {
  return (
    <nav className="sideNav">
      <div className="topNav__theme-switch-container">
        <div className="topNav__theme-switch-btn">
          <LightModeIcon sx={{ color: "#96c8fb" }} />
        </div>
      </div>

      <ul>
        <li className="sideNav-list-item">
          <a
            aria-label="Linkedin"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/scott-martin-6680b322a/"
          >
            <LinkedInIcon
              className="sideNav__social-link"
              sx={{ color: "#96c8fb" }}
              fontSize="large"
            />
          </a>
        </li>
        <li className="sideNav-list-item">
          <a
            aria-label="Github"
            rel="noopener"
            target="_blank"
            href="https://github.com/smartinuk88"
          >
            <GitHubIcon
              className="sideNav__social-link"
              sx={{ color: "#96c8fb" }}
              fontSize="large"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
