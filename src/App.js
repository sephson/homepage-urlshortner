import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/Hero";
import InputUrl from "./components/InputUrl";
import AdvancedStats from "./components/AdvancedStats";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <InputUrl />
        <AdvancedStats />

        <Switch>
          <Route to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
