import logo from './logo.svg';
import './App.css';
import Baner from './component/Baner'
import Navbar from './component/Navbar'
import React from 'react';





function App() {
  const nameTitle ="Strona głównaaaa"
  return (
    <React.Fragment>
       <Navbar/>
      <Baner/>
     
    </React.Fragment>
    

  );
}

export default App;
