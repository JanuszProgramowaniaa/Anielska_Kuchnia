import "./App.css";
import Navigacja from "./component/Common/Navigacja";
import React from "react";
import { Helmet } from "react-helmet";
import BootstrapFooter from "./component/Common/BootstrapFooter";
import { Provider } from "react-redux";
import  store  from "./store";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Helmet>
          <title>Anielska kuchnia</title>
        </Helmet>
        <Navigacja />
        <BootstrapFooter />
      </React.Fragment>
    </Provider>
  );
}

export default App;
