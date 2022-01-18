import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="app">
      <TopNav />
      <SideNav />
      <main>
        <Header />
        <Portfolio />
      </main>
    </div>
  );
}

export default App;
