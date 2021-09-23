import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/errorPage/ErrorPage.js";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/404" component={ErrorPage} />
        <Redirect from="*" to="/404" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
