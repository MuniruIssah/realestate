import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Services from "./components/Services";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Jumbotron />
      <Search />
      <Services />
      <UnderConstruction/>
    </div>
  );
}

export default App;