import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./components/Checkout";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

function App() {

  const options = {
    clientId:'AUvlGvOeFmqLiwnGmHWxwz6Be-Q8_nKizuEXU7a01miTo1_3AruxP45BHI90YLAPUzaTKsvh87kKRRpv'
    // 'AVESVPc9p3s6GV-ME57Aa_mFJMOvwrDn3K679X7U86pZr9b3remed-0QpYCoBj9IlBsQtA5Xw1S3hVxz'
    //'AecFtuETfqkmt8vkBb9fQN6nwkAJ7xBejc4Hck0iD9h7g0TR1oLicUiyIBcPUa_IhMSGvbhjGUouSz-7'
  }

  return (
    <PayPalScriptProvider
      options={options}
    >
      <Router>
        <Routes>
          <Route path='/' element={<> <Checkout /></>} />
        </Routes >
      </Router>
    </PayPalScriptProvider>
  )
}

export default App