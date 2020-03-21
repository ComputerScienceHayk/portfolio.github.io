import React from 'react';
import logo from './logo.svg';
import './App.css';

//my own imports
import Navbar from './component/navbar.jsx';
import Header from './component/header.jsx';
import About from './component/about.jsx';
import Experience from './component/experience.jsx';
import Portfolio from './component/portfolio.jsx';
import Footer from './component/footer.jsx';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
