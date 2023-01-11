import { Redirect, Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Product";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
