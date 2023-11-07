import { useState } from "react";

function Header() {
  const [display, setDisplay] = useState("none");

  const aboutTextToggleHandler = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
  };

  return (
    <header className="mb-14">
      <div>
        <h1 className="font-bold text-7xl uppercase text-custom-orange">
          Scott Martin
        </h1>
        <h2 className="font-bold text-7xl uppercase text-mint">
          Front End Developer
        </h2>
        <div className="my-5 block h-1 w-3/4 bg-custom-orange"></div>
        <section>
          <div
            onClick={aboutTextToggleHandler}
            className="mt-5 text-support-text text-lg cursor-pointer w-40 border-2 py-2 px-8 transition-all duration-500 border-mint hover:shadow-inner-mint hover:opacity-70 shadow-sm"
          >
            About Me
          </div>
          <div style={{ display: display }} className="text-md w-3/4">
            <p className="mb-2">
              Hi, I'm <span className="font-semibold">Scott</span>.
            </p>
            <p className="mb-2">
              Thanks for coming. Make yourself comfortable.
            </p>

            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              placeat minus porro fugit facilis, labore saepe delectus quaerat
              beatae quas similique odio. Reprehenderit error exercitationem
              delectus facilis debitis expedita sit.
            </p>

            <p className="mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam dolorem iure corrupti sapiente. Commodi, blanditiis
              sunt.
            </p>
            <p className="mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              dolores minus excepturi neque.
            </p>
            <p className="mb-2">
              <a
                className="inline-block font-semibold transition-all duration-400 hover:opacity-80 text-fucshia"
                aria-label="CV on Google Drive"
                rel="noopener"
                target="_blank"
                href=""
              >
                CV right here
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
