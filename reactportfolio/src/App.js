import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Wrapper from "./components/Wrapper/index"
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Navbar /> 
        <Wrapper>
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
