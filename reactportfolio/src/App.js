import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/index"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Test from "./components/Test/Portfolio"
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Navbar /> 
        <Wrapper>
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/test" component={Test}/>
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
