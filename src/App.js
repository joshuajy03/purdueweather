import './App.css';
import { Route, Routes} from "react-router-dom";
import { HashRouter} from "react-router-dom";
import { Home } from "./components";

function App() {
  return (
    <div className="App">
      <header>
      </header>

      
      <HashRouter basename="/">
        <Routes>
          <Route path="/" exact component={() => <Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
