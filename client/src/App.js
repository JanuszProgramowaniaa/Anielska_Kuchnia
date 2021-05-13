import './App.css';
import Navigacja from './component/Common/Navigacja'
import React from 'react';
import {Helmet} from 'react-helmet'
import BootstrapFooter from './component/Common/BootstrapFooter';



function App() {
  return (
    <React.Fragment>
    <Helmet>
    <title>Anielska kuchnia</title>
    </Helmet>
       <Navigacja/>
       <BootstrapFooter/>
    </React.Fragment>
    

  );
}

export default App;
