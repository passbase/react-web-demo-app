import React from 'react';
import './App.css';
import VerifyButton from "@passbase/button/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      {/* Without customizations */}       
      <VerifyButton
        apiKey={"YOUR_OWN_PUBLISHABLE_API_KEY"}
        onFinished={(error, authKey, additionalAttributes) => {}}
        integrationType={"signup"}
        additionalAttributes={{ }}
        prefillAttributes={{ }}
        theme={{ }}
      />;
       
      {/* With customizations */}       
      {/* 
      <VerifyButton
        apiKey={"YOUR_OWN_PUBLISHABLE_API_KEY"}
        onFinished={(error, authKey, additionalAttributes) => {}}
        integrationType={"signup"}
        additionalAttributes={{
          customer_user_id: "a2ab4-f2jc4-k2dd4-1fa3x",
          another_attribute: ""
        }}
        prefillAttributes={{
          email: "user@test.com",
          country: "de"
        }}
        theme={{
          accentColor: "#ff0000",
          font: "Exo", 
          darkMode: true
        }}
      />;
      */}

      {/* Reauthentication without customizations */}       
      {/*
      <VerifyButton
      apiKey={"YOUR_OWN_PUBLISHABLE_API_KEY"}
        onFinished={(error, authKey, additionalAttributes) => {}}
        integrationType={"login"}
        additionalAttributes={{ }}
        prefillAttributes={{ }}
        theme={{ }}
      />;
      */}

      </header>
    </div>
  );
}

export default App;
