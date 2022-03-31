import React from "react";
import "./App.css";
import Frame from "./layouts/Frame";
import Insight from "./pages/Insight";
import ProviderContext from "./context/AppContext";

function App() {
  return (
    <ProviderContext>
      <Frame>
        <Insight />
      </Frame>
    </ProviderContext>
  );
}

export default App;
