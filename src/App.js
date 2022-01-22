import './App.css';
import { Route, Routes, Link} from "react-router-dom";
import { HashRouter} from "react-router-dom";
import { Home, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <HashRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
