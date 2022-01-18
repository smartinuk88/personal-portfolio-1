import { useState } from "react";
import "./Header.css";

function Header() {
  const [display, setDisplay] = useState("none");

  const handleClick = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
  };

  return (
    <header className="header">
      <div className="header__text-container">
        <h1 className="header__primary-heading">Scott Martin,</h1>
        <h2 className="header__secondary-heading">Front End Developer</h2>
        <div className="header__line"></div>
        <a onClick={handleClick} className="header__read-more-link">
          About Me
        </a>
        <section style={{ display: display }} className="header__about">
          <p className="header__about-text">
            Hi, I'm <span>Scott</span>.
          </p>
          <p className="header__about-text">
            Thanks for coming. Make yourself comfortable.
          </p>

          <p className="header__about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat
            minus porro fugit facilis, labore saepe delectus quaerat beatae quas
            similique odio. Reprehenderit error exercitationem delectus facilis
            debitis expedita sit.
          </p>

          <p className="header__about-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            dolorem iure corrupti sapiente. Commodi, blanditiis sunt.
          </p>
          <p className="header__about-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            dolores minus excepturi neque.
          </p>
          <p className="header__about-text">
            <a
              className="header__about-link"
              aria-label="CV on Google Drive"
              rel="noopener"
              target="_blank"
              href=""
            >
              CV right here
            </a>
            .
          </p>
        </section>
      </div>
    </header>
  );
}

export default Header;
