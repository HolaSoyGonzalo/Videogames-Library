import React from "react";
//Components & Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

//Styling
import GlobalStyles from "./components/GlobalStyles";

//Routing
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
