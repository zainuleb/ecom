import "./App.css";
import { Route, Switch , Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

//Import Pages
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Category from "./components/category/Catgory";
import ErrorPage from "./pages/errorPage/ErrorPage.js";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/details/:id" component={ProductDetail} />
        <Route path={`/category/:category`} component={Category} />
        <Route path="/cart" component={Cart} />
        <Route path="/404" component={ErrorPage} />
        <Redirect from="*" to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
