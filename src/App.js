import { useState, useEffect } from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import TechList from "./components/TechList";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="bg-lm-light dark:bg-dm-custom-black font-sans">
      <TopNav />
      <SideNav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        toggleDarkModeHandler={toggleDarkModeHandler}
      />
      <div className="pt-28 px-4 pb-12 md:pl-12 md:pr-32 lg:pl-24 lg:pr-44">
        <Header />
        <main>
          <ProjectList />
          <TechList />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
