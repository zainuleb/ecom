import "./App.css";
import { Route, Switch } from "react-router-dom";

//Import Pages
import Header from "./components/header/Header";
import Categories from "./pages/categories/Categories";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Category from "./components/category/Catgory";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/categories" component={Categories} />
        <Route path="/details/:id" component={ProductDetail} />
        <Route path={`/category/:category`} component={Category} />
      </Switch>
    </div>
  );
}

export default App;
