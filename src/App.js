import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/React-Employee-Directory" component={Home} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
