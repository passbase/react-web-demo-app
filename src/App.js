import React from 'react';
import './App.css';
import Passbase from "@passbase/button";
import VerifyButton from "@passbase/button/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      {/* Without customizations */}       
      <VerifyButton
        apiKey={"YOUR_PUBLISHABLE_API_KEY"}
        onFinished={(error, authKey, additionalAttributes) => {}}
        additionalAttributes={{ }}
        prefillAttributes={{ }}
        theme={{ }}
      />;
       
      {/* With customizations */}       
      {/* 
      <VerifyButton
        apiKey={"YOUR_PUBLISHABLE_API_KEY"}
        onFinished={(error, authKey, additionalAttributes) => {}}
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

      </header>
    </div>
  );
}

export default App;
