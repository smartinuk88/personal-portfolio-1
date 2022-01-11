import "./TopNav.css";
import DownloadIcon from "@mui/icons-material/Download";

function TopNav() {
  return (
    <nav className="topNav">
      <div className="topNav__logo-container">
        <p className="topNav__logo">SM</p>
      </div>

      <ul className="topNav__nav-list">
        <li>
          <a className="topNav__nav-link topNav__nav-link--cv" href="#">
            CV <DownloadIcon />
          </a>
        </li>
        <li>
          <a
            aria-label="Link to Email"
            rel="noopener"
            className="topNav__nav-link topNav__contact-link"
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
