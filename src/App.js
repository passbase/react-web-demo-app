import React from 'react';
import './App.css';
import Passbase from "@passbase/button";
import VerifyButton from "@passbase/button/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <VerifyButton
        apiKey={"YOUR_PUBLISHABLE_API_KEY"}
        onFinished={(error, authKey, additionalAttributes) => {}}
        additionalAttributes={{ }}
        prefillAttributes={{ }}
        theme={{ }}
      />;
        
      </header>
    </div>
  );
}

export default App;
