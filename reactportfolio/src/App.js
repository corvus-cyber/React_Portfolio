import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/index"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"


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
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}


export default App;
