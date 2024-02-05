import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, About, FAQ, Product, Explore, Blog, NavBar } from "./component";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index component={Home} />
            <Route path="/about" component={About} />
            <Route path="/explore" component={Explore} />
            <Route path="/blog" component={Blog} />
            <Route path="/faq" component={FAQ} />
            <Route path="/product" component={Product} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
