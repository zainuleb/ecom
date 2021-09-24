import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

//Import Pages
import Categories from "./pages/categories/Categories";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Category from "./components/category/Category";
import ErrorPage from "./pages/errorPage/ErrorPage.js";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/categories" component={Categories} />
        <Route path="/details/:id" component={ProductDetail} />
        <Route path={`/category/:category`} component={Category} />
        <Route path="/404" component={ErrorPage} />
        <Redirect from="*" to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
