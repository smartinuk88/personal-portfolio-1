import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import TechList from "./components/TechList";

function App() {
  return (
    <div className="bg-custom-black font-sans">
      <TopNav />
      <SideNav />
      <main className="pt-28 px-12 pb-12 md:pl-12 md:pr-32 lg:pl-24 lg:pr-44">
        <Header />
        <ProjectList />
        <TechList />
      </main>
    </div>
  );
}

export default App;
