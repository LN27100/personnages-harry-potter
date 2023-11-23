// import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Spells from "./pages/sortileges";
import Houses from './pages/maisons';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/characters"><img class="logo" src="../public/images/personnages.jpg" alt="logo personnages" />
              </Link>
            </li>
            <li>
              <Link to="/spells"><img class="logo" src="../public/images/sortileges.jpg" alt="logo personnages" /></Link>
            </li>
            <li>
              <Link to="/houses"><img class="logo" src="../public/images/chapeau.jpg" alt="logo personnages" /></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/houses" element={<Houses />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
