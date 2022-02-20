import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import Services from "./components/Services";
import UnderConstruction from "./components/UnderConstruction";
import SmilesAndComments from "./components/SmilesAndComments";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Jumbotron />
      <Search />
      <Services />
      <UnderConstruction/>
      <SmilesAndComments/>
    </div>
  );
}

export default App;
