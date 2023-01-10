import { Route, Router } from "react-router-dom";

import Welcome from "./component/Welcome";
import Products from "./component/Product";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
