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
      <header className="App-header">
        {/* Without customizations */}
        <VerifyButton
          apiKey={"YOUR_API_KEY"}
          onFinish={(identityAccessKey) => {
            referenceUserWithKey(identityAccessKey);
          }}
          onError={(errorCode) => {}}
          onStart={() => {}}
        />
        {/* With customizations */}
        {/* <VerifyButton
          apiKey={"YOUR_API_KEY"}
          onFinish={(identityAccessKey) => {}}
          prefillAttributes={{
            email: "hans.meier@corp.de",
          }}
          theme={{
            darkMode: true,
            systemDarkMode: true,
          }}
        /> */}
      </header>
    </div>
  );
}

export default App;
