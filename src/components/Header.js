import "./Header.css";

function header() {
  return (
    <header className="header">
      <div class="header__text-container">
        <h1 class="header__primary-heading">Scott Martin,</h1>
        <h2 class="header__secondary-heading">Front End Developer</h2>
        <div class="header__line"></div>
        <a class="header__read-more-link">About Me</a>
        {/* <section class="about">
          <p class="about__about-text about__about-text--heading">
            Studious JavaScript enthusiast.
          </p>
          <p class="about__about-text"></p>

          <p class="about__about-text"></p>
          <p class="about__about-text"></p>
          <p class="about__about-text">
            <a
              class="about__link"
              aria-label="CV on Google Drive"
              rel="noopener"
              target="_blank"
              href="https://drive.google.com/file/d/1wzQqz3uGmtLcSF6pfML7jfO1YdVFYgXy/view?usp=sharing"
            >
              CV right here
            </a>
            .
          </p>
          <div class="header-line"></div>
        </section> */}
      </div>
    </header>
  );
}

export default header;
