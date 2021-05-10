import './App.css';
import Navigacja from './component/Common/Navigacja'
import React from 'react';
import {Helmet} from 'react-helmet'



function App() {
  return (
    <React.Fragment>
    <Helmet>
    <title>Anielska kuchnia</title>
    </Helmet>
       <Navigacja/>
    </React.Fragment>
    

  );
}

export default App;
