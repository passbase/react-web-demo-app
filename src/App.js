import React from "react";
import "./App.css";
import VerifyButton from "@passbase/button/react";

function App() {
  const referenceUserWithKey = (key) => {
    console.log(key);
    // Make request to your backend/db and save the key to the user's profile
  };

  return (
    <div className="App">
      <img
        className="img-fluid passbase"
        src="https://passbase.com/assets/images/logo.png"
        alt="Passbase"
      />

      <div className="container">
        <p className="title">Welcome to this Demo</p>
        <p className="subtitle">
          Click the button below to start a new verification.
        </p>

        <VerifyButton
          apiKey={
            "YOUR_OWN_PUBLISHABLE_API_KEY"
          }
          onFinish={(identityAccessKey) => {
            referenceUserWithKey(identityAccessKey);
            console.log(identityAccessKey)
            // open new window when end user completes verification
            window.location.href =("https://passbase.com/")
          }}
          onError={(errorCode) => {}}
          onStart={() => {}}
        />
      </div>
    </div>
  );
}

export default App;
