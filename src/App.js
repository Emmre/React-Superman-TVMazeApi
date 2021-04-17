import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Detail from "./components/Detail/Detail";
import Navbars from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="">
        <Navbars />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect to="/Home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
