import React from 'react';
import Navbar from './Components/Navbar/navbar'
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Components/Routing/routes';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
    </div>
  </Router>
  );
}

export default App
